interface TitleWithUnderlineProps {
  title: string;
  small?: boolean; 
}

const TitleWithUnderline: React.FC<TitleWithUnderlineProps> = ({ title, small }) => {
  const titleClasses = small ? "text-xl font-medium" : "text-3xl font-semibold";

  return (
    <div>
      <h2 className={`${titleClasses} text-black mb-4`}>{title}</h2>

      <div className="flex items-center justify-center w-[85%]">
        {/* Red Section */}
        <div className="h-[4px] bg-[#ff2424] flex-grow"></div>
        {/* Gray Section */}
        <div className="h-[2px] bg-gray-200 flex-grow"></div>
      </div>
    </div>
  );
};

export default TitleWithUnderline;
