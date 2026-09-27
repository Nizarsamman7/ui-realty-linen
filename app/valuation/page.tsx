import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Valuation" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Visit"}</p>
      <h1>{"We come to the house."}</h1>
      <p className="lede">{"Forty minutes. We look at the rooms, the building, and what sold on the street. You get a range, not a promise."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Book a valuation"} fields={[{"name":"name","label":"Name"},{"name":"phone","label":"Phone","type":"tel"},{"name":"address","label":"Address"},{"name":"note","label":"Anything we should know","type":"textarea"}]} />
    </article>
  );
}
