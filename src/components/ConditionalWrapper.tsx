import React, { ReactElement, ReactNode } from "react";

type Props = {
  condition: boolean;
  wrapper: {
    tag: string;
    props: { style?: {}; id?: string; className?: string };
  };
  children?: ReactNode;
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: Props): JSX.Element => {
  console.log("called");
  return condition ? (
    <>{React.createElement(wrapper.tag, wrapper.props, children)}</>
  ) : (
    <>{children}</>
  );
};

export default ConditionalWrapper;
