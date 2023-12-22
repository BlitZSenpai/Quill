import { Navbar } from "./_components/navbar";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = ({ params, children }: CreatorLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="pt-20">{children}</div>
    </>
  );
};

export default CreatorLayout;
