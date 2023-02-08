import logoGrande from "../../assets/logoGrande.png";
import fondoImg from "../../assets/Fondo.png";
import useWindowSize from "../../hooks/useWindowSize";

const Bienvenida = () => {
  const { width } = useWindowSize();
  return width && width > 800 ? (
    <div className="flex flex-row items-center justify-between pl-10 bg-salmon pb-8">
      <div className="flex flex-col items-start">
        <img src={logoGrande} alt="" />
        <p className="text-4xl text-start text-gray-900">
          Tu sistema de turnos ideal
        </p>
      </div>
      <img className="max-w-[400px] w-1/3 mt-4" src={fondoImg} />
    </div>
  ) : (
    <div className="flex flex-row items-center justify-between pl-10 bg-salmon pb-8">
      <div className="flex flex-col items-start">
        <img src={logoGrande} alt="" className="w-full max-w-[350px]" />
        <p className="text-xl text-start">Tu sistema de turnos ideal</p>
      </div>
      <img className="w-1/3 mt-4" src={fondoImg} />
    </div>
  );
};

export default Bienvenida;
