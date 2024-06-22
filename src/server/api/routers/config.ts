import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { Config } from "~/model/config.model";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { isNil } from "~/util";

type SessionId = ReturnType<typeof crypto.randomUUID>;

const db = new Map<SessionId, { config: Config }>();

export const configRouter = createTRPCRouter({
  getConfig: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(({ input }) => {
      const data = db.get(input.sessionId);
      if (isNil(data)) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "no entry for current session",
        });
      }
      return data;
    }),
});
