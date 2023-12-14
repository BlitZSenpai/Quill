import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[49] w-full h-20 px-2 lg:px-4 flex items-center justify-between shadow-sm bg-[#252731]">
      <Logo />
    </nav>
  );
};
