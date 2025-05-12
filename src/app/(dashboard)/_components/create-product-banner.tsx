import Image from "next/image";

const CreateProductBanner = () => {
  return (
    <div className="max-w-4xl m-6 h-72 lg:mx-auto md:h-96 border border-dashed shadow-shadow bg-slate-100">
      <Image
        src={"/sales.png"}
        height={700}
        width={1500}
        alt="banner"
        className="bg-cover"
      />
      <p className="text-center text-lg font-medium py-10 cursor-pointer">
        Get started by creating your first{" "}
        <span className="underline underline-offset-2">product</span>.<br />
        <span className="text-xs">Literally Sell Anything</span>
      </p>
    </div>
  );
};

export default CreateProductBanner;
