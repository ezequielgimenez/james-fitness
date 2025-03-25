import qualifications from "../../assets/qualifications.png";

export default function QualificationsComp() {
  return (
    <div data-aos="fade-left">
      <div
        id="qualification"
        className="flex items-center justify-center xs:flex-col lg:flex-row gap-x-20 px-8 pt-40"
      >
        <div className="lg:w-[500px]">
          <h2 className="font-[anton] text-[60px]">Qualifications</h2>
          <p className="font-[outfit] text-[#909090] xs:text-[15px] lg:text-[24px]">
            I’m a certified fitness trainer with over 10 years of experience,
            specializing in personal training and nutrition. I’m passionate
            about helping individuals transform their lives and aim to create a
            welcoming environment where everyone can thrive, regardless of
            fitness level.
          </p>
        </div>
        <div className="xs:pt-10 lg:w-[452px]">
          <img
            className="xs:max-h-[300px] lg:max-h-none "
            src={qualifications}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
