type SectionContainerProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const SectionContainer = (props: SectionContainerProps) => {
  const { children, className, id } = props;
  return (
    <section
      id={id}
      className={`${className} h-full flex flex-col justify-center items-center mb-15`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
