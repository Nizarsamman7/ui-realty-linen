import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Buyers and sellers"}</p>
      <h1>{"Questions before the first viewing."}</h1>
      <p className="lede">{"Nothing here is legal advice. The notary does the transfer."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Are the prices real?"}</summary><p>{"No. They are sample figures for the template."}</p></details>
<details className="panel"><summary>{"Can I view without an agent?"}</summary><p>{"Not on our listings."}</p></details>
<details className="panel"><summary>{"Do you do rentals?"}</summary><p>{"Rarely, and only if we already know the building."}</p></details>
<details className="panel"><summary>{"New build?"}</summary><p>{"No."}</p></details>
</div>
      
    </article>
  );
}
