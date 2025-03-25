import { useState } from "react";
import started from "../../assets/started.png";
import FormComp from "../form/Form";

export default function StartComponent() {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div data-aos="fade-rigth">
      <div
        id="started"
        className="flex items-center justify-center xs:flex-col lg:flex-row gap-x-20 px-8 xs:pt-15 lg:pt-30"
      >
        <div className="xs:pt-10 lg:w-[452px] ">
          <img
            className="xs:max-h-[300px] lg:max-h-none mask-image-gradient"
            src={started}
            alt=""
          />
        </div>
        <div className="flex xs:flex-col xs:items-center xs:justify-center lg:items-start lg:w-[600px]">
          <h2 className="font-[anton] xs:text-[30px] xs:text-center lg:text-left lg:text-[60px]">
            You want to train with me?
          </h2>
          <p className="font-[outfit] text-[#909090] xs:text-[15px] xs:text-center lg:text-left lg:text-[24px]">
            Feel free to contact me if you want to train with me.
          </p>
          <div className="xs:pt-4 lg:pt-10">
            <button
              onClick={openForm}
              className="xs:w-[150px] xs:h-[50px] lg:w-[214px] lg:h-[74px] cursor-pointer font-outfit text-[24px] bg-[#BF3131] rounded-[12px] hover:bg-[#d77f7f] transition-all duration-500"
            >
              Get Started
            </button>
          </div>
          <div
            className={`${
              showForm ? "flex" : "hidden"
            } w-auto h-auto flex-col items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50  p-4 rounded-[12px]`}
          >
            <FormComp onClose={openForm}></FormComp>
          </div>
        </div>
      </div>
    </div>
  );
}
