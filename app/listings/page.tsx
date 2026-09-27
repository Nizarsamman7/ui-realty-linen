import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Listings" };

export default function ListingsPage() {
  return (
    <>
      <header className="nav">
        <Link className="logo" href="/">Linen &amp; Key</Link>
        <nav><Link href="/">Homes</Link></nav>
      </header>
      <section className="pad">
        <h1>Ask about a home</h1>
        <p>Sample prices are fictional. Tell the agent which listing you mean.</p>
        <InquiryForm
          submitLabel="Contact the agent"
          fields={[
            { name: "name", label: "Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "home", label: "Listing", type: "select", options: ["Canal apartment", "Garden maisonette", "Top-floor flat", "Something else"] },
            { name: "note", label: "Message", type: "textarea" },
          ]}
        />
      </section>
    </>
  );
}
