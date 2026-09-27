import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Office"}</p>
      <h1>{"Write to the agent who covers the neighbourhood."}</h1>
      <p className="lede">{"For a valuation, use the valuation page so we get the address."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
