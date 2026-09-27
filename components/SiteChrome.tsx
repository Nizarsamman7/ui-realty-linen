import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="nav">
        <Link className="logo" href="/">Linen &amp; Key</Link>
        <nav><Link href="/valuation">Book a valuation</Link></nav>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Homes</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/buying">Buying</Link>
        <Link href="/selling">Selling</Link>
        <Link href="/valuation">Valuation</Link>
        <Link href="/neighbourhoods">Neighbourhoods</Link>
        <Link href="/jordaan">Jordaan</Link>
        <Link href="/oost">Oost</Link>
        <Link href="/zuid">Zuid</Link>
        <Link href="/process">Process</Link>
        <Link href="/fees">Fees</Link>
        <Link href="/team">Team</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
