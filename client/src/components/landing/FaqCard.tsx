import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";

interface FaqProps {
  title: string;
  body: string;
}

const FaqCard = ({ title, body }: FaqProps) => {
  const [deploy, setDeploy] = useState(false);
  return deploy ? (
    <div
      className="p-6 border border-gray-300 rounded-2xl flex flex-col gap-4 max-w-[700px] w-4/5 "
      onClick={() => setDeploy(!deploy)}
    >
      <div className="flex flex-row justify-between">
        <MdOutlineQuestionAnswer className="h-6 w-6" />
        <p className="text-start w-full pl-4">{title}</p>
        <IoIosArrowDown className="h-8 w-8 hover:cursor-pointer rotate-180 duration-300" />
      </div>
      <p className="w-full">{body}</p>
    </div>
  ) : (
    <div
      className="p-6 border border-gray-300 rounded-2xl flex flex-col gap-4  max-w-[700px] w-4/5 "
      onClick={() => setDeploy(!deploy)}
    >
      <div className="flex flex-row justify-between">
        <MdOutlineQuestionAnswer className="h-6 w-6" />
        <p className="text-start w-full pl-4">{title}</p>
        <IoIosArrowDown className="h-8 w-8 hover:cursor-pointer duration-300" />
      </div>
    </div>
  );
};

export default FaqCard;
