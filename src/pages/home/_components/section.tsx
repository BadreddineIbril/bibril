import type { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section-area">
      <div className="head">
        <h3 className="title">{title}</h3>
      </div>
      {children}
    </section>
  );
}
