import { Sidebar } from "./_components/sidebar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-48">{children}</div>
    </>
  );
};

export default DashboardLayout;
