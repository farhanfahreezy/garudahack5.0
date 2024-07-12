import React from "react";

interface Props {
  children: React.ReactNode;
}

const ScrollbarLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ScrollbarLayout;
