import type { Metadata } from "next";
export const metadata: Metadata = { title: "Neighbourhoods" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Map"}</p>
      <h1>{"Where we actually work."}</h1>
      <p className="lede">{"Jordaan, De Pijp, Oost, Zuid, and a strip of Noord. Outside that, we will say if we are useful or not."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Jordaan"}</h2><p>{"Stairs, canals, and homes that are smaller than the photos."}</p></article>
<article className="panel"><h2>{"De Pijp"}</h2><p>{"Busy street, quiet block behind it."}</p></article>
<article className="panel"><h2>{"Oost"}</h2><p>{"More garden, longer bike ride."}</p></article>
<article className="panel"><h2>{"Zuid"}</h2><p>{"Larger budgets, lift buildings."}</p></article>
<article className="panel"><h2>{"Noord"}</h2><p>{"A ferry, and houses that still need work."}</p></article>
</div>
      
      
      
    </article>
  );
}
