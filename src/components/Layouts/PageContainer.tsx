type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = (props: PageContainerProps) => {
  const { children } = props;
  return <div className="h-full w-full flex flex-col">{children}</div>;
};

export default PageContainer;
