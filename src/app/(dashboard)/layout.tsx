import { Sidebar } from "./_components/sidebar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-48">{children}</div>
    </div>
  );
};

export default DashboardLayout;
