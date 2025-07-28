interface ParagraphSectionProps {
    question?: string;
    para1?: string;
    para2?: string;
  }
  
  const ParagraphSection: React.FC<ParagraphSectionProps> = ({ question, para1, para2 }) => {
    return (
      <section className="max-w-[1366px] mx-auto py-8 px-4 md:px-8 lg:px-16 text-center lg:text-left">
        {question && (
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{question}</h2>
        )}
  
        {para1 && (
          <p className="text-md text-gray-600 mb-4">{para1}</p>
        )}

        {para2 && (
          <p className="text-md text-gray-600">{para2}</p>
        )}
      </section>
    );
  };
  
  export default ParagraphSection;
  