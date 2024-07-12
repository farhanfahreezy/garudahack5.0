import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const messageRouter = createTRPCRouter({
  sendMessage: protectedProcedure
    .input(z.object({
      chatId: z.number(),
      content: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const message = await ctx.prisma.message.create({
        data: {
          chatId: input.chatId,
          userId: ctx.session.user.id,
          content: input.content,
        },
      });
      return message;
    }),

  getMessages: protectedProcedure
    .input(z.object({ chatId: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.message.findMany({
        where: { chatId: input.chatId },
        include: { user: true },
      });
    }),

  deleteMessage: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.message.delete({
        where: { id: input.id },
      });
      return "Message deleted";
    }),
});
