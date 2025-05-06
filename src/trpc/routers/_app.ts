import { productsRouter } from "@/modules/server/products";
import { createTRPCRouter } from "../init";
import { categoriesRouter } from "@/modules/server/procedures";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  products: productsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
