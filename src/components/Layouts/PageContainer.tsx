import { forwardRef } from "react";

const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ children }) => {
  return <div className="h-full w-full flex flex-col">{children}</div>;
});

export default PageContainer;
