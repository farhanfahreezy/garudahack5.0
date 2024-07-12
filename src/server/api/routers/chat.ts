import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const chatRouter = createTRPCRouter({
  createChat: protectedProcedure
    .input(z.object({
      userIds: z.array(z.number()),
    }))
    .mutation(async ({ ctx, input }) => {
      const chat = await ctx.prisma.chat.create({
        data: {
          participants: {
            create: input.userIds.map(userId => ({ userId })),
          },
        },
      });
      return chat;
    }),

  getChats: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.chat.findMany({
      include: {
        participants: true,
        messages: true,
      },
    });
  }),

  deleteChat: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.chat.delete({
        where: { id: input.id },
      });
      return "Chat deleted";
    }),
});
