import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "./assets/logo.jpg"; // Adjust the path based on your file location

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="w-28 h-25 mb-4" />
          <div className="flex space-x-3 text-yellow-500">
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
          </div>
          <p className="mt-4 text-sm">&copy; 2024 Vipin_uidesigns. All Rights Reserved</p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3">ការស្វែងរក</h4>
          <p className="text-sm">ទំព័រដើម</p>
          <p className="text-sm">អំពីយើង</p>
          <p className="text-sm">ដំណើរទេសចរណ៏</p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3">តំណរភ្ជាប់រហ័ស</h4>
          <p className="text-sm">រូបភាព</p>
          <p className="text-sm">ការចូល</p>
          <p className="text-sm">ការចុះឈ្មោះ</p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm flex items-center"><MdLocationOn className="mr-2" />អាស័យដ្ឋានៈ<p className="text-gray-700 text-sm font-medium leading-relaxed ml-2"></p> ទួលទំពូង, ភ្នំពេញ</p>
          <p className="text-sm flex items-center"><MdEmail className="mr-2" />អុីមែលៈ<p className="text-gray-700 text-sm font-medium leading-relaxed ml-2"></p> nadrayoky000@gmail.com</p>
          <p className="text-sm flex items-center"><MdPhone className="mr-2" />លេខទូរសព្ទ័ៈ<p className="text-gray-700 text-sm font-medium leading-relaxed ml-2"></p> 012-345-6789</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
