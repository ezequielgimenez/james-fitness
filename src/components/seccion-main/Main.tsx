import main from "../../assets/main.png";

export default function MainComponent() {
  return (
    <div>
      <div
        data-aos="fade-down"
        className="flex items-center justify-center xs:flex-col xs:pt-10 lg:flex-row lg:pt-0"
      >
        <div className="flex xs:items-center lg:items-start flex-col lg:w-[686px] px-10">
          <h1 className="font-[oxanium] xs:text-[35px] xs:text-center sm:text-[45px] lg:text-[70px] lg:text-left font-extrabold pb-[20px]">
            Transform obstacles into achievements.
          </h1>
          <p className="font-[outfit] xs:text-[18px] text-[#909090]  sm:text-center lg:text-[24px] lg:text-left xs:pb-[30px] lg:pb-[40px]">
            As a passionate personal trainer, I believe in empowering
            individuals to achieve their fitness goals through personalized
            coaching and support.
          </p>
          <div>
            <a href="#started">
              <button className="xs:w-[150px] xs:h-[50px] lg:w-[214px] lg:h-[74px] text-white cursor-pointer font-outfit text-[24px] bg-[#BF3131] rounded-[12px] hover:bg-[#d77f7f] transition-all duration-500">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            className="mask-image-gradient xs:h-[400px] lg:h-auto max-w-full"
            src={main}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
