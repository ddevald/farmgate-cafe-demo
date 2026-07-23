import React from "react";
import { Container } from "@/components/ui/Container";
import { Check, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Website Solutions & Packages | SolveItMate",
  description: "Modern websites built for local businesses by SolveItMate.",
};

export default function PackagesPage() {
  return (
    <div className="bg-[#FAF7F5] min-h-screen text-espresso py-16">
      <Container className="max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F2ECE7] text-espresso/70 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-strawberry" /> Built by SolveItMate
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-tight">
            Website Solutions for <br />
            <span className="italic text-strawberry">Local Businesses.</span>
          </h1>
          <p className="mt-6 text-espresso/70 text-base sm:text-lg leading-relaxed">
            Modern websites designed to help local businesses attract customers, build trust, and grow online.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Starter Package */}
          <div className="bg-white border border-espresso/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <h2 className="font-display text-3xl font-medium text-espresso mb-2">Starter Business</h2>
              <div className="text-2xl font-bold text-espresso mb-4">
                $1,200 – $1,500 <span className="text-sm font-normal text-espresso/60">AUD</span>
              </div>
              <p className="text-sm text-espresso/70 pb-6 border-b border-espresso/10 mb-6">
                <strong>Perfect for:</strong> Cafés, restaurants, trades, salons, consultants, and small local businesses.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  { title: "Mobile-Friendly Design", desc: "Fast, simple mobile experience optimized for phone users." },
                  { title: "Business Information Pages", desc: "Home, About, Services/Menu, Contact, Location & Gallery." },
                  { title: "Google Maps Integration", desc: "Directions and easy location access directly on customer phones." },
                  { title: "Contact Enquiry Form", desc: "Direct website enquiries straight to your inbox." },
                  { title: "Essential SEO Setup", desc: "Search-friendly layout, local metadata, and image optimization." },
                  { title: "Google Search Console & Security", desc: "HTTPS security certificate, verification, and Google indexing." },
                  { title: "Full Deployment", desc: "Hosting setup, domain connection, and complete launch process." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-strawberry shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm text-espresso block">{item.title}</span>
                      <span className="text-xs text-espresso/60">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://solveitmate.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 px-6 rounded-full border border-espresso text-espresso font-medium text-sm hover:bg-espresso hover:text-linen transition-colors"
            >
              Enquire About Starter
            </a>
          </div>

          {/* Growth Package */}
          <div className="bg-white border-2 border-espresso rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3.5 right-8 bg-strawberry text-linen text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full">
              Recommended
            </div>

            <div>
              <h2 className="font-display text-3xl font-medium text-espresso mb-2">Growth Business</h2>
              <div className="text-2xl font-bold text-espresso mb-4">
                $2,500 – $3,500 <span className="text-sm font-normal text-espresso/60">AUD</span>
              </div>
              <p className="text-sm text-espresso/70 pb-6 border-b border-espresso/10 mb-6">
                <strong>Perfect for:</strong> Businesses wanting online sales, direct ordering, and customer automation.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-semibold text-sm text-espresso">
                  <Check className="w-5 h-5 text-strawberry shrink-0" />
                  <span>Includes everything in Starter Package, PLUS:</span>
                </li>
                {[
                  { title: "Online Ordering System", desc: "Customers can view products/menu and place pickup orders." },
                  { title: "Payment Integration", desc: "Seamless setup with Square, Stripe, or preferred gateways." },
                  { title: "Event Booking System", desc: "Online registrations for workshops, special nights, or functions." },
                  { title: "Automated Notifications", desc: "Instant alerts when enquiries, bookings, or orders arrive." },
                  { title: "Website Analytics", desc: "Track visitor numbers, popular pages, and customer origin." },
                  { title: "Advanced Local SEO", desc: "Target high-intent searches like 'coffee near me' or 'best café Clyde'." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-strawberry shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm text-espresso block">{item.title}</span>
                      <span className="text-xs text-espresso/60">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://solveitmate.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 px-6 rounded-full bg-espresso text-linen font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Choose Growth Package
            </a>
          </div>

        </div>

        {/* Website Care & Support */}
        <div className="bg-white border border-espresso/10 rounded-3xl p-8 sm:p-12 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-strawberry font-medium text-xs mb-2">
                <ShieldCheck className="w-4 h-4" /> Ongoing Maintenance
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-espresso mb-2">
                Website Care & Support
              </h3>
              <p className="text-sm text-espresso/70 leading-relaxed">
                We look after your website so you can focus on your business. Includes continuous menu/price updates, security monitoring, and local technical support.
              </p>
            </div>
            <div className="shrink-0">
              <div className="text-2xl font-bold text-strawberry">
                $79 – $149 <span className="text-xs font-normal text-espresso/60">/ month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white border border-espresso/10 rounded-3xl p-8 sm:p-12 mb-16">
          <h3 className="font-display text-2xl sm:text-3xl text-espresso text-center mb-10">
            Our Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { step: "01", name: "Discovery", text: "We learn your business & goals." },
              { step: "02", name: "Design", text: "Crafting layout & user journey." },
              { step: "03", name: "Development", text: "Building features & integrations." },
              { step: "04", name: "Launch", text: "Domain, SEO & live setup." },
              { step: "05", name: "Support", text: "Ongoing help & growth." }
            ].map((p, idx) => (
              <div key={idx} className="p-4">
                <div className="font-display italic text-2xl text-strawberry mb-2">{p.step}</div>
                <div className="font-semibold text-sm text-espresso mb-1">{p.name}</div>
                <div className="text-xs text-espresso/60">{p.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-espresso text-linen rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl mb-4">Ready to elevate your online presence?</h3>
          <p className="text-sm text-linen/70 max-w-xl mx-auto mb-8">
            Work directly with a local technology partner. No overseas communication, no complicated technical jargon.
          </p>
          <a
            href="https://solveitmate.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-strawberry text-linen px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Visit SolveItMate.com.au <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </Container>
    </div>
  );
}