import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Search } from "./_components/search-filters";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Navbar />
      <Search />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
