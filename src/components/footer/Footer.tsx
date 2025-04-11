import logo from "../../assets/logo-gym.png";
import ig from "../../assets/ig.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";

export default function FooterComp() {
  return (
    <div>
      <footer className="bg-[#252525] text-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img className="w-[100px] h-[85px]" src={logo} alt="Logo-header" />

            <h3 className="font-oxanium font-bold text-[25px] text-[#f95c19] "></h3>
          </div>

          <div className="pt-12">
            <h3 className="text-lg font-oxanium font-semibold mb-2">
              Quick Links
            </h3>
            <ul className="text-sm text-gray-400 space-y-4">
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#aboutme"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#qualification"
                >
                  Qualifications
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#f95c19] transition-all duration-300"
                  href="#question"
                >
                  F&Q
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-12 space-y-4">
            <h3 className="text-lg font-oxanium font-semibold mb-2 ">
              Contact
            </h3>
            <p className="text-sm text-gray-400">📍 123 Main St, City</p>
            <p className="text-sm text-gray-400">📞 +1 (123) 456-7890</p>
            <p className="text-sm text-gray-400">
              📧 JamesPersonalTrainer-23@gmail.com
            </p>
          </div>

          <div className="pt-12">
            <h3 className="text-lg font-oxanium font-semibold mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={ig} alt="Instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          © 2025 James Personal Trainer.
        </div>
      </footer>
    </div>
  );
}
