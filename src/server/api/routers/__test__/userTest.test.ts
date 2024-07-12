import { test, expect } from "vitest";
import { AppRouter, appRouter } from "../../root";
import { prisma } from "@/server/db";
import { inferProcedureInput } from "@trpc/server";
import { createInnerTRPCContext } from "../../context";

test('user test', async () => {
  const caller = appRouter.createCaller(
    createInnerTRPCContext({ session: null })
  );

  type Input = inferProcedureInput<AppRouter["user"]["userRegister"]>;

  const input: Input = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    rePassword: "password123"
  };

  const result = await caller.user.userRegister(input);

  expect(result).toBeTruthy();
  console.log(result);
});
