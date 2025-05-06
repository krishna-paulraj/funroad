import { prisma } from "@/lib/prisma";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

export const productsRouter = createTRPCRouter({
  // Get all products
  getMany: baseProcedure.query(async () => {
    return await prisma.product.findMany({
      include: {
        category: true,
        subCategory: true,
        reviews: true,
      },
    });
  }),

  getByUsername: baseProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return await prisma.product.findMany({
        where: {
          userId: input.userId,
        },
      });
    }),

  // Get by category slug
  getByCategory: baseProcedure
    .input(z.object({ categorySlug: z.string() }))
    .query(async ({ input }) => {
      return await prisma.product.findMany({
        where: {
          category: {
            slug: input.categorySlug,
          },
        },
        include: {
          category: true,
          subCategory: true,
          reviews: true,
        },
      });
    }),

  // Get by category + subcategory
  getByCategoryAndSub: baseProcedure
    .input(
      z.object({
        categorySlug: z.string(),
        subCategorySlug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.product.findMany({
        where: {
          category: {
            slug: input.categorySlug,
          },
          subCategory: {
            slug: input.subCategorySlug,
          },
        },
        include: {
          category: true,
          subCategory: true,
          reviews: true,
        },
      });
    }),

  // Create Product
  createProduct: baseProcedure
    .input(
      z.object({
        userId: z.string(),
        title: z.string(),
        price: z.number(),
        categoryId: z.string(),
        subCategoryId: z.string(),
        description: z.string().optional(),
        content: z.any().optional(),
        contentDescription: z.any().optional(),
        coverImage: z.string().optional().nullable(),
        thumbnail: z.string().optional().nullable(),
      }),
    )
    .mutation(async ({ input }) => {
      return prisma.product.create({
        data: {
          userId: input.userId,
          title: input.title,
          price: input.price,
          categoryId: input.categoryId,
          subCategoryId: input.subCategoryId,
          description: input.description,
          content: input.content ?? undefined,
          contentDescription: input.contentDescription ?? undefined,
          coverImage: input.coverImage ?? null,
          thumbnail: input.thumbnail ?? null,
        },
      });
    }),
});
