interface CardProps {
  title: string;
  body: string;
  img: string;
}

const CaracteristicasCard = ({ title, body, img }: CardProps) => {
  return (
    <div className="flex flex-col bg-gris rounded-3xl p-4 max-w-[500px] text-start">
      <div className="flex flex-row items-center gap-4">
        <img src={img} className="h-14" />
        <p className="text-salmon font-bold text-3xl">{title}</p>
      </div>
      <p className="text-lg text-gray-600 pl-4">{body}</p>
    </div>
  );
};

export default CaracteristicasCard;
