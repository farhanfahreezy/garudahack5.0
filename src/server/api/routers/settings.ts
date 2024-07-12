import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const settingsRouter = createTRPCRouter({
  updateSettings: protectedProcedure
    .input(z.object({
      notification: z.boolean().optional(),
      notificationSound: z.boolean().optional(),
      voiceAssistance: z.boolean().optional(),
      colorBlind: z.boolean().optional(),
      fontSize: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const settings = await ctx.prisma.settings.upsert({
        where: { userId: ctx.session.user.id },
        update: {
          ...input,
        },
        create: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
      return settings;
    }),

  getSettings: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.settings.findUnique({
      where: { userId: ctx.session.user.id },
    });
  }),
});
