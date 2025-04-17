type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = (props: SectionContainerProps) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

export default SectionContainer;
