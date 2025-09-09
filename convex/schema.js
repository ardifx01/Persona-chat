import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
const schema = defineSchema({
  ...authTables,
  messages: defineTable({
    charId: v.string(),
    content: v.string(),
    sender: v.union(v.literal("user"), v.literal("ai")),
    userId: v.id("users"),
    timestamp: v.number(),
  })
});
 
export default schema;