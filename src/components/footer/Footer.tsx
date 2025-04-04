import logo from "../../assets/logo-gym.png";

export default function FooterComp() {
  return (
    <div className="pt-30">
      <footer className="flex justify-center flex-col  bg-[#252525]">
        <div className="cursor-pointer pl-4">
          <img className="w-[100px] h-[85px]" src={logo} alt="Logo-header" />
        </div>

        <div className="flex justify-around pt-4">
          <div className="flex flex-col gap-y-4">
            <h6 className="text-white">Menu</h6>
            <a className="text-[11px]">Home</a>
            <a className="text-[11px]">Services</a>
            <a className="text-[11px]">About Me</a>
          </div>
          <div>
            <h6 className="text-white">Contact</h6>
            <p className="text-[11px]">ezequielgimenezdev@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="xs:w-[300px] sm:w-[600px] lg:w-[1200px] h-[0.1px] bg-[#a09999]"></div>
          <p className="text-[10px] pt-10 pb-4">
            © 2025 JPT Fitness. Developed with ❤️ by
            ezequielgimenezdev@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
