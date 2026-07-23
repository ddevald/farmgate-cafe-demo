import React from "react";
import { Container } from "@/components/ui/Container";
import { Check, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Website Solutions & Packages | SolveItMate",
  description:
    "Professional websites designed for local Australian businesses by SolveItMate.",
};

export default function PackagesPage() {
  return (
    <div className="bg-[#FAF7F5] min-h-screen text-espresso py-16">
      <Container className="max-w-6xl">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F2ECE7] text-espresso/70 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-strawberry" />
            Built by SolveItMate
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-tight">
            Websites that help
            <br />
            <span className="italic text-strawberry">
              local businesses grow.
            </span>
          </h1>

          <p className="mt-6 text-espresso/70 text-base sm:text-lg leading-relaxed">
            Professional websites, SEO setup, and digital solutions designed
            for cafés, trades, and small Australian businesses.
          </p>
        </div>


        {/* Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">


          {/* Starter */}
          <div className="bg-white border border-espresso/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">

            <div>

              <h2 className="font-display text-3xl text-espresso mb-2">
                Starter Website
              </h2>

              <div className="text-3xl font-bold text-espresso mb-4">
                $699
                <span className="text-sm font-normal text-espresso/60">
                  {" "}
                  AUD one-time
                </span>
              </div>


              <p className="text-sm text-espresso/70 pb-6 border-b border-espresso/10 mb-6">
                <strong>Perfect for:</strong> Cafés, restaurants, trades,
                salons, and local businesses needing a professional online
                presence.
              </p>


              <ul className="space-y-4">

                {[
                  [
                    "Custom Responsive Website",
                    "Mobile and desktop design tailored to your business.",
                  ],
                  [
                    "Up to 5 Pages",
                    "Home, About, Services/Menu, Gallery and Contact.",
                  ],
                  [
                    "Google Maps Integration",
                    "Help customers find your location easily.",
                  ],
                  [
                    "Contact Enquiry Form",
                    "Receive customer enquiries directly.",
                  ],
                  [
                    "SEO Foundation Setup",
                    "Page titles, descriptions, sitemap and Google-friendly structure.",
                  ],
                  [
                    "Google Search Console Setup",
                    "Website verification and indexing support.",
                  ],
                  [
                    "Security & Performance Setup",
                    "SSL security, optimisation and deployment.",
                  ],
                  [
                    "30 Days Support",
                    "Help after launch with minor updates.",
                  ],
                ].map((item, index) => (

                  <li key={index} className="flex gap-3">

                    <Check className="w-5 h-5 text-strawberry shrink-0 mt-1"/>

                    <div>
                      <span className="block text-sm font-medium">
                        {item[0]}
                      </span>

                      <span className="text-xs text-espresso/60">
                        {item[1]}
                      </span>
                    </div>

                  </li>

                ))}

              </ul>

            </div>


            <a
              href="https://solveitmate.com.au"
              className="mt-8 w-full text-center py-3.5 rounded-full border border-espresso text-sm font-medium hover:bg-espresso hover:text-white transition"
            >
              Enquire About Starter
            </a>


          </div>



          {/* Growth */}

          <div className="bg-white border-2 border-espresso rounded-3xl p-8 sm:p-10 relative shadow-md">


            <div className="absolute -top-3 right-8 bg-strawberry text-white text-xs px-4 py-1 rounded-full">
              Recommended
            </div>


            <h2 className="font-display text-3xl text-espresso mb-2">
              Growth Website
            </h2>


            <div className="text-3xl font-bold mb-4">
              $1,299
              <span className="text-sm font-normal text-espresso/60">
                {" "}
                AUD one-time
              </span>
            </div>


            <p className="text-sm text-espresso/70 pb-6 border-b border-espresso/10 mb-6">
              <strong>Perfect for:</strong> Businesses wanting stronger online
              visibility, customer engagement and future growth.
            </p>


            <ul className="space-y-4">


              {[
                "Everything included in Starter Website",
                "Up to 10 Website Pages",
                "Advanced Local SEO Setup",
                "Google Analytics Integration",
                "Customer Reviews Section",
                "Social Media Integration",
                "Blog / Helpful Content Section",
                "Email Setup Assistance",
                "90 Days Priority Support",
              ].map((item,index)=>(

                <li key={index} className="flex gap-3">

                  <Check className="w-5 h-5 text-strawberry shrink-0"/>

                  <span className="text-sm font-medium">
                    {item}
                  </span>

                </li>

              ))}


            </ul>


            <a
              href="https://solveitmate.com.au"
              className="mt-8 block text-center py-3.5 rounded-full bg-espresso text-white text-sm font-medium"
            >
              Choose Growth Package
            </a>


          </div>


        </div>



        {/* Addons */}

        <div className="bg-white rounded-3xl border border-espresso/10 p-8 sm:p-12 mb-16">

          <h3 className="font-display text-3xl mb-6">
            Optional Add-ons
          </h3>


          <div className="space-y-4 text-sm">

            <p>
              <strong>Online Ordering / Booking Setup:</strong> From $300
              <br/>
              Square, Stripe or preferred payment platforms configured for your business.
            </p>


            <p>
              <strong>Website Care Plan:</strong>
              <br/>
              Basic $49/month | Business $99/month
            </p>


            <p>
              <strong>Domain, Email & Hosting:</strong>
              <br/>
              Setup assistance included. Third-party costs paid directly by client.
            </p>


          </div>


        </div>



        {/* Support */}

        <div className="bg-white border rounded-3xl p-8 mb-16">

          <div className="flex items-center gap-2 text-strawberry text-xs mb-3">
            <ShieldCheck className="w-4 h-4"/>
            Ongoing Support
          </div>


          <h3 className="font-display text-3xl mb-3">
            Website Care & Support
          </h3>


          <p className="text-sm text-espresso/70">
            Keep your website secure, updated and performing while you focus on running your business.
          </p>


        </div>



        {/* CTA */}

        <div className="bg-espresso text-white rounded-3xl p-10 text-center">

          <h3 className="font-display text-3xl mb-4">
            Ready to grow online?
          </h3>

          <p className="text-white/70 mb-8">
            Work with a local technology partner who understands small business.
          </p>


          <a
            href="https://solveitmate.com.au"
            className="inline-flex items-center gap-2 bg-strawberry px-8 py-3 rounded-full"
          >
            Visit SolveItMate
            <ArrowRight className="w-4 h-4"/>
          </a>

        </div>


      </Container>
    </div>
  );
}