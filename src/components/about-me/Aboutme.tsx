import aboutme from "../../assets/aboutme.png";

export default function AboutMeComponent() {
  return (
    <div data-aos="fade-right" id="aboutme">
      <div className="flex items-center justify-center xs:flex-col lg:flex-row gap-x-20 pt-20 px-8">
        <div className="w-[452px] xs:hidden lg:block">
          <img src={aboutme} alt="" />
        </div>

        {/* Contenedor del texto */}
        <div className="xs:w-full lg:w-[500px]">
          <h2 className="font-[anton] xs:text-[30px] lg:text-[60px]">
            Who Is James?
          </h2>
          <p className="font-[outfit] text-[#909090] xs:text-[15px] lg:text-[24px]">
            As a dedicated fitness coach, I’m committed to helping individuals
            reach their health and wellness goals with tailored guidance and
            ongoing encouragement.
          </p>
          <div className="flex md:items-center md:justify-center gap-x-4 pt-4">
            <div className="flex flex-col justify-center items-center w-[177px] h-[127px]  opacity-90  bg-[#525050] rounded-[10px]">
              <h2 className="font-[anton] text-[#FF2332] text-[50px]">100+</h2>
              <p className="xs:text-[10px] text-white lg:text-[16px]">
                Satisfied Clients
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[177px] h-[127px]  opacity-90 bg-[#525050] rounded-[10px]">
              <h2 className="font-[anton] text-[#FF2332] text-[50px]">10</h2>
              <p className="xs:text-[10px] text-white lg:text-[16px]">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[177px] h-[127px] opacity-90  bg-[#525050] rounded-[10px]">
              <h2 className="font-[anton] text-[#FF2332] text-[50px]">15</h2>
              <p className="xs:text-[10px] text-white lg:text-[16px]">
                Years in Sport
              </p>
            </div>
          </div>
        </div>
        <div className="block lg:hidden pt-10">
          <img className=" max-h-[300px]" src={aboutme} alt="" />
        </div>
      </div>
    </div>
  );
}
