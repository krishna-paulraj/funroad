import Activity from "./_components/activity";
import BestSales from "./_components/best-sales";
import CreateProductBanner from "../_components/create-product-banner";
import Revenue from "./_components/revenue";

const Page = () => {
  return (
    <div>
      <div className="h-20 border-b p-6">
        <h1 className="text-xl md:text-3xl">Welcome to Funroad.</h1>
      </div>
      <Revenue />
      <CreateProductBanner />
      <BestSales />
      <Activity />
    </div>
  );
};

export default Page;
