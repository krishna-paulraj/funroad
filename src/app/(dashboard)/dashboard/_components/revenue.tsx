import { Info } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Revenue = () => {
  return (
    <div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-3 border border-dashed shadow-shadow h-24 bg-slate-100">
          <div className="text-xs flex gap-2 font-semibold">
            Balance
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  Your current balance <br /> available for payout
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-2xl font-semibold mt-2">&#8377;0</p>
        </div>
        <div className="p-3 border border-dashed shadow-shadow h-24 bg-slate-100">
          <div className="text-xs flex gap-2 font-semibold">
            Last 7 days
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  Your total sales in <br /> the last 7 days
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-2xl font-semibold mt-2">&#8377;0</p>
        </div>
        <div className="p-3 border border-dashed shadow-shadow h-24 bg-slate-100">
          <div className="text-xs flex gap-2 font-semibold">
            Last 28 days
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  Your total sales in <br /> the last 28 days
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-2xl font-semibold mt-2">&#8377;0</p>
        </div>
        <div className="p-3 border border-dashed shadow-shadow h-24 bg-slate-100">
          <div className="text-xs flex gap-2 font-semibold">
            Total Earnings
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent className="text-xs">
                  Your all-time net earnings <br /> from all products
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-2xl font-semibold mt-2">&#8377;0</p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
