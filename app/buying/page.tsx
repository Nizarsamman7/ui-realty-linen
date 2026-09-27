import type { Metadata } from "next";
export const metadata: Metadata = { title: "Buying" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Search"}</p>
      <h1>{"How we look with you."}</h1>
      <p className="lede">{"Tell us the neighbourhood, the number of rooms, and the number you will not cross. We do not send you everything on the market."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Brief"}</h2><p>{"A call, then a short list."}</p></article>
<article className="panel"><h2>{"Viewing"}</h2><p>{"We come with you, or you go and we talk after."}</p></article>
<article className="panel"><h2>{"Bid"}</h2><p>{"We write it. You decide the number."}</p></article>
</div>
      
      
      
    </article>
  );
}
