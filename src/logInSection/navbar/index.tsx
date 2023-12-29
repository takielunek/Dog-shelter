import Logo from "@/assets/logo/logo_2.png";
import LogoPin from "@/assets/logo/logo_pin.png";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav className="fixed z-50 w-full border-b-4 bg-white">
      <div className={`${flexBetween} mx-auto w-5/6 py-4`}>
        <img alt="logo" src={Logo} className="hidden h-[50px] xs:block" />
        <img alt="logo" src={LogoPin} className="block h-[50px] xs:hidden" />
        <div className="rounded-xl bg-orange py-2 px-8 font-quicksand text-white duration-500 hover:bg-green-1">
          <a href="/app">Wróć</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
