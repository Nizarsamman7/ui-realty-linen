import type { Metadata } from "next";
export const metadata: Metadata = { title: "About" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Office"}</p>
      <h1>{"A small agency. We would rather know the street."}</h1>
      <p className="lede">{"The office is by appointment. Viewings happen at the home, not in a glass meeting room."}</p>
      <p>{"Sample office line: +31 20 123 4580."}</p>
      
      
      
      
    </article>
  );
}
