interface TitleWithUnderlineProps {
  title: string;
  small?: boolean; 
  reverse? : boolean;
}

const TitleWithUnderline: React.FC<TitleWithUnderlineProps> = ({ title, small ,reverse }) => {
  const titleClasses = small ? "text-xl font-medium" : "text-3xl font-semibold";
  const titleColor = reverse ? "text-red-600" : "text-black";
  const underlineColor = reverse ? "bg-black" : "bg-[#ff2424]"
  return (
    <div>
      <h2 className={`${titleClasses} ${titleColor}  mb-4`}>{title}</h2>

      <div className="flex items-center justify-center w-[85%]">
        {/* Red Section */}
        <div className={`h-[4px] ${underlineColor} flex-grow`}></div>
        {/* Gray Section */}
        <div className="h-[2px] bg-gray-200 flex-grow"></div>
      </div>
    </div>
  );
};

export default TitleWithUnderline;
