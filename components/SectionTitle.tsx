interface SectionTitleProps {
  subTitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subTitle, title }) => {
  return (
    <div className="wrapper text-center pb-10">
      <span className="uppercase font-semibold tracking-widest text-error">
        {subTitle}
      </span>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
