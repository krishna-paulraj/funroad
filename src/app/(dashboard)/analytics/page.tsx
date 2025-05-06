import Activity from "../dashboard/_components/activity";
import BestSales from "../dashboard/_components/best-sales";
import Revenue from "../dashboard/_components/revenue";
import { Chart } from "./_components/chart";
const Page = () => {
  return (
    <div>
      <div className="h-20 border-b p-6">
        <h1 className="text-xl md:text-3xl">Analytics</h1>
      </div>
      <Chart />
      <Revenue />
      <BestSales />
      <Activity />
    </div>
  );
};

export default Page;
