type SectionContainerProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const SectionContainer = (props: SectionContainerProps) => {
  const { children, className, id } = props;
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default SectionContainer;
