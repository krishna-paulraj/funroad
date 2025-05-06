import { prisma } from "@/lib/prisma";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    return await prisma.categories.findMany({
      include: {
        subCategories: true,
      },
    });
  }),

  getColor: baseProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      return await prisma.categories.findUnique({
        where: { slug: input.slug },
        select: { color: true },
      });
    }),
});
