import { useState } from "react";
interface FormCompProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: FormCompProps) {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Función para manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen xs:w-[300px] lg:w-[500px] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#1E1E1E] rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div>
          <button onClick={onClose} className="cursor-pointer p-2">
            🗙
          </button>
        </div>
        <h2 className="text-3xl font-outfit font-bold text-[#FF2332] text-center">
          Contact Me
        </h2>

        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className=" font-oxanium  p-3 rounded-lg bg-[#2A2A2A] text-gray-200 outline-none focus:ring-2 focus:ring-[#FF2332] transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="font-oxanium p-3 rounded-lg bg-[#2A2A2A] text-gray-200 outline-none focus:ring-2 focus:ring-[#FF2332] transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="font-oxanium p-3 rounded-lg bg-[#2A2A2A] text-gray-200 outline-none focus:ring-2 focus:ring-[#FF2332] transition"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-4 bg-[#FF2332] text-white font-semibold cursor-pointer rounded-lg hover:bg-[#d81c28] transition"
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  );
}
