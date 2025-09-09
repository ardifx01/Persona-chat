import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveMessage = mutation({
    args: {
        charId: v.string(),
        content: v.string(),
        sender: v.union(v.literal("user"), v.literal("ai")),
        userId: v.id("users"),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("messages", {
            charId: args.charId,
            content: args.content,
            sender: args.sender,
            userId: args.userId,
            timestamp: Date.now(),
        })
    }
})