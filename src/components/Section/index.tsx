import { PropsWithChildren } from "react";

import "./section.scss";

export type SectionProps = {
  header?: string;
} & PropsWithChildren;

const Section = ({ children, header }: SectionProps) => {
  return (
    <section className="section">
      {header && <h6 className="section__header">{header}</h6>}
      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;
