import type { Metadata } from "next";
export const metadata: Metadata = { title: "Process" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Steps"}</p>
      <h1>{"From valuation to keys."}</h1>
      <p className="lede">{"A sale in this city is a bid, a confirmation, a notary, and a wait. We stay until the notary date."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"1. Valuation"}</h2><p>{"A range and a plan for photos."}</p></article>
<article className="panel"><h2>{"2. List"}</h2><p>{"One set of photos, one text, the real floor size."}</p></article>
<article className="panel"><h2>{"3. Viewings"}</h2><p>{"Grouped where we can, private where it matters."}</p></article>
<article className="panel"><h2>{"4. Bid and notary"}</h2><p>{"You choose. We prepare the file."}</p></article>
</div>
      
      
      
    </article>
  );
}
