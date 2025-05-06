import { Suspense } from "react";
import { ProductList } from "../_components/product-list";
import { ProductListSkeleton } from "../_components/product-list-skeleton";
import { ProductFilters } from "../_components/product-filters";

interface Props {
  params: Promise<{ category: string; subcategory: string }>;
}

const SubcategoryPage = async ({ params }: Props) => {
  const { category, subcategory } = await params;

  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12">
        <div className="lg:col-span-2 xl:col-span-2">
          <ProductFilters />
        </div>
        <div className="lg:col-span-4 xl:col-span-6">
          <Suspense fallback={<ProductListSkeleton />}>
            <ProductList
              categorySlug={category}
              subCategorySlug={subcategory}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;
