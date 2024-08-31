import { defineAction } from "astro:actions";
import { db, Registrars } from "astro:db";
import { z } from "astro:schema";

export const server = {
  register: defineAction({
    input: z.object({
      email: z.string(),
    }),
    accept: "form",
    handler: async (input) => {
      await db.insert(Registrars).values({
        email: input.email,
      });
    },
  }),
};
