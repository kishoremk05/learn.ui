import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <FooterPageLayout
      title="Contact Us"
      subtitle="Connect with our EdTech specialists. We are here to support your institution."
    >
      <div className="space-y-10 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-display text-[22px] font-bold text-[#161616]">Get in Touch</h3>
            <p>
              Whether you are looking to schedule a live demo for your leadership team, request custom module development, or ask about migration timelines, we are ready to assist you.
            </p>
            
            <div className="space-y-4">
              <div>
                <strong className="text-[#161616] block text-[13px] uppercase font-mono tracking-wider">Email Inquiry</strong>
                <a href="mailto:hello@studiqs.com" className="text-[#c97a3a] text-[16px] font-semibold hover:underline">
                  hello@studiqs.com
                </a>
              </div>

              <div>
                <strong className="text-[#161616] block text-[13px] uppercase font-mono tracking-wider">Locations</strong>
                <p className="mt-1 text-[14px]">
                  Dubai Office: Marina Plaza, Dubai Marina, UAE
                  <br />
                  Abu Dhabi: Al Khatem Tower, ADGM Square, Al Maryah Island, UAE
                  <br />
                  Sharjah: Sharjah Research Technology & Innovation Park, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm space-y-4">
            <h4 className="font-display text-[18px] font-bold text-[#161616]">Inquiry Form</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-[12px] font-mono text-[#2a2a2a]/70">School Name</label>
                <input type="text" placeholder="e.g. Dubai Academy" className="mt-1 w-full border border-[#1a1a1a]/15 rounded-lg p-2 text-[13.5px] bg-[#fbfaf7]" />
              </div>
              <div>
                <label className="block text-[12px] font-mono text-[#2a2a2a]/70">Contact Email</label>
                <input type="email" placeholder="e.g. principal@academy.ae" className="mt-1 w-full border border-[#1a1a1a]/15 rounded-lg p-2 text-[13.5px] bg-[#fbfaf7]" />
              </div>
              <div>
                <label className="block text-[12px] font-mono text-[#2a2a2a]/70">Message / Request</label>
                <textarea rows={4} placeholder="Tell us about your requirements..." className="mt-1 w-full border border-[#1a1a1a]/15 rounded-lg p-2 text-[13.5px] bg-[#fbfaf7] resize-none" />
              </div>
              <button className="w-full bg-[#c97a3a] hover:bg-[#b5692e] text-white font-medium py-2 rounded-lg text-[13.5px] transition duration-300">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </FooterPageLayout>
  );
}
