import type { Metadata } from "next";
export const metadata: Metadata = { title: "Team" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Agents"}</p>
      <h1>{"Three agents. You get one of them."}</h1>
      <p className="lede">{"The person who values the home is the person at the viewing."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"L. Key"}</h2><p>{"Jordaan and De Pijp."}</p></article>
<article className="panel"><h2>{"A. Linen"}</h2><p>{"Zuid and sales."}</p></article>
<article className="panel"><h2>{"R. Vos"}</h2><p>{"Oost and Noord."}</p></article>
</div>
      
      
      
    </article>
  );
}
