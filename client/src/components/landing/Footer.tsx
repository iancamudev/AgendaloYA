import { IoLogoWhatsapp } from "react-icons/io";
import logoGrande from "../../assets/logoGrande.png";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const { width } = useWindowSize();
  return (
    <div
      className={
        width && width > 600
          ? "h-24 w-full bg-salmon flex flex-row items-center justify-around select-none"
          : "h-auto py-4 gap-2 w-full bg-salmon flex flex-col items-center justify-around select-none"
      }
    >
      <img src={logoGrande} className="h-10" />
      <div className="bg-white p-4 h-fit rounded-3xl flex flex-row gap-4 items-center duration-300 hover:duration-300 hover:scale-105 cursor-pointer">
        <IoLogoWhatsapp className="h-8 w-8 text-green-700" />
        <p>Contactate con nosotros!</p>
      </div>
    </div>
  );
};

export default Footer;
