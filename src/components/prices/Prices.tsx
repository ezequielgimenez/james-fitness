export default function PricesComp() {
  return (
    <div data-aos="fade-down" id="services">
      <div className="flex items-center justify-center flex-col pt-30">
        <div>
          <h2 className="font-[anton] text-[60px]  text-center">
            Training Programs
          </h2>
          <p className="font-[outfit] text-[32px] text-center">
            Choose your program
          </p>
        </div>

        {/* contenedor tarjetas */}
        <div className="flex xs:flex-col lg:flex-row gap-x-20 gap-y-4 pt-8 ">
          {/* tarjeta 1 */}
          <div className="flex flex-col items-center justify-center  gap-y-2 w-[302px] h-[354px] border-1 border-[#525050] rounded-[20px] cursor-pointer transform transition-transform duration-300 hover:scale-110">
            <p className="font-[outfit] text-[20px] text-[#ffffff]">
              Personal Trainings
            </p>
            <h2 className="font-[anton] text-[80px] text-[#ffffff]">200$</h2>
            <p className="text-[#909090]">Monthly Membership</p>

            <a href="#started">
              <button className="w-[121px] h-[44px] text-white bg-[#FF2332] rounded-[12px] cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center  gap-y-2 w-[302px] h-[354px] border-1 border-[#FF2332] rounded-[20px] cursor-pointer transform transition-transform duration-300 hover:scale-110">
            <p className="font-[outfit] text-[20px] text-[#ffffff]">
              Personals Training + Diet
            </p>
            <h2 className="font-[anton] text-[80px] text-[#FF2332]">300$</h2>
            <p className="text-[#909090]">Monthly Membership</p>
            <a href="#started">
              <button className="w-[121px] h-[44px] text-white bg-[#FF2332] rounded-[12px] cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 w-[302px] h-[354px] border-1 border-[#525050] rounded-[20px] cursor-pointer transform transition-transform duration-300 hover:scale-110">
            <p className="font-[outfit] text-[20px] text-[#ffffff]">Diet</p>
            <h2 className="font-[anton] text-[80px] text-[#ffffff]">150$</h2>
            <p className="text-[#909090]">Monthly Membership</p>

            <a href="#started">
              <button className="w-[121px] h-[44px] text-white bg-[#FF2332] rounded-[12px]  cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
