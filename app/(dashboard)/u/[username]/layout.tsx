import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = ({ params, children }: CreatorLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default CreatorLayout;
