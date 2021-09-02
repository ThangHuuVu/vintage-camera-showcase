import classNames from "classnames";

interface SectionProp {
  children: JSX.Element;
  cls: string;
}
function Section({ children, cls }: SectionProp): JSX.Element {
  const className = classNames("h-screen w-full relative", cls);

  return <div className={className}>{children}</div>;
}

export default Section;
