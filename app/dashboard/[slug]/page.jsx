"use client";

import { Input } from "@/components/ui/input";
import { character } from "@/constant/character";
import { api } from "@/convex/_generated/api";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useMutation } from "convex/react";
import { LoaderIcon, Send } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const CharacterSlug = () => {
  const { slug } = useParams();
  const Characters = character.find((item) => item.slug === slug);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useCurrentUser();
  
  // Pindahkan useMutation SEBELUM conditional return
  const saveMessage = useMutation(api.messages.saveMessage);

  if (!data) {
    return null;
  }

  const { _id } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !Characters || isLoading) return;

    // Tambahkan pesan user
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Simpan pesan user ke Convex
      await saveMessage({
        charId: Characters.id,
        content: inputValue,
        sender: "user",
        userId: _id,
      });

      // Panggil API chat
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: inputValue,
          characterId: Characters.id
        }),
      });

      if (!response.ok) throw new Error("Gagal mengirim pesan");
      const responseData = await response.json();

      // Simpan respon AI ke Convex
      await saveMessage({
        charId: Characters.id,
        content: responseData.resp,
        sender: "ai",
        userId: _id, 
      });

      // Tambahkan pesan AI ke state
      const aiMessage = {
        id: messages.length + 2,
        text: responseData.resp,
        sender: "them",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black-1">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black-2 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <Image
            src={Characters?.avatar || ""}
            alt={Characters?.name || ""}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-white font-semibold">{Characters?.name}</h1>
            <p className="text-gray-400 text-sm line-clamp-1">
              {Characters?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "them" && (
              <Image
                src={Characters?.avatar || ""}
                alt={Characters?.name || ""}
                width={32}
                height={32}
                className="rounded-full mr-2 self-end"
              />
            )}
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.sender === "me"
                  ? "bg-violet-1 text-white"
                  : "bg-black-2 text-white"
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-300 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] rounded-2xl px-4 py-2 bg-black-2text-white">
              <p>Typing...</p>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-black-2 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-black-1 text-white rounded-full px-4 py-2 outline-none border-none focus:outline-none focus:ring-1 focus:ring-violet-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                handleSubmit(e);
              }
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-2 text-white bg-violet-1 rounded-full disabled:opacity-50"
            disabled={isLoading || !inputValue.trim()}
          >
            {isLoading ? (
              <>
                <LoaderIcon className="w-4 h-4 text-white animate-spin" />
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CharacterSlug;
