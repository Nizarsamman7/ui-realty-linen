import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Listings" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"For sale"}</p>
      <h1>{"Sample homes. Replace them with the real book."}</h1>
      <p className="lede">{"Prices are fictional and written the Dutch way. Each card is a starting point for a viewing, not an offer."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Canal apartment, Jordaan"}</h2><p>{"€725.000 · 78 m² · 3 rooms · one flight of stairs."}</p></article>
<article className="panel"><h2>{"Garden maisonette, Oost"}</h2><p>{"€610.000 · 92 m² · 4 rooms · own door to the garden."}</p></article>
<article className="panel"><h2>{"Top-floor flat, Zuid"}</h2><p>{"€890.000 · 84 m² · 3 rooms · lift in the building."}</p></article>
<article className="panel"><h2>{"Workers' cottage, Noord"}</h2><p>{"€540.000 · 70 m² · 3 rooms · needs a kitchen."}</p></article>
</div>
      
      
      <InquiryForm submitLabel={"Ask about a home"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"home","label":"Listing","type":"select","options":["Canal apartment","Garden maisonette","Top-floor flat","Workers' cottage"]},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
