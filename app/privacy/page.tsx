import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TMAX Logo"
              width={100}
              height={51}
              className="cursor-pointer"
            />
          </Link>

          <Link href="/">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <Home className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-[#1f1f1f] rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-800">
          {/* Title Section */}
          <div className="mb-12 text-center border-b border-gray-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm">
              Last Updated: <span className="text-[#FF6B35]">January 10, 2025</span>
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            
            <section>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  This Privacy Policy explains how DISPLAYOURVISION SRL ("Company," "we," "us," "our"), 
                  a company registered in Romania (CUI: 48488845, Reg. Com.: J12/3036/2023), 
                  collects, uses, shares, and protects information when you use TMAX.
                </p>
              </div>
            </section>

            {/* 1. SCOPE */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">1. Scope</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  This Privacy Policy applies to information collected through the App and related Service. 
                  It does not apply to third-party services that you access through the App.
                </p>
              </div>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Depending on features you use, you may provide:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Account information (e.g., email, username) if accounts exist</li>
                  <li>Habit tracker entries (e.g., completed tasks, notes)</li>
                  <li>Favorites/inventory lists and preferences</li>
                  <li>Support messages and feedback</li>
                  <li>Photos or product information submissions (if you contribute)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>We may collect:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Device identifiers and technical data (device type, OS version, app version)</li>
                  <li>App usage events (feature interactions, crash logs)</li>
                  <li>Approximate location derived from IP (if applicable)</li>
                  <li>Cookies/SDK identifiers (for analytics)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Barcode and Product Data</h3>
              <p className="text-gray-300 leading-relaxed">
                When you scan a barcode, we process the barcode identifier and retrieve related Product 
                Data from our databases and/or third-party sources.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.4 Sensitive Data</h3>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>
                  TMAX is not intended to collect regulated health data as a medical provider. However, 
                  your habit entries or preferences could be considered sensitive in some contexts. You 
                  choose what you input.
                </p>
                <p>
                  We do not ask for lab values, diagnoses, or medical records.
                </p>
              </div>
            </section>

            {/* 3. HOW WE USE INFORMATION */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">3. How We Use Information</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>We use information to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide and operate the Service (barcode lookup, displaying Product Data)</li>
                  <li>Generate AI-based Scores and insights (AI Output)</li>
                  <li>Personalize your experience (inventory, preferences, recommendations)</li>
                  <li>Improve safety, prevent abuse, debug and improve performance</li>
                  <li>Provide customer support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* 4. AI PROCESSING */}
            <section className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">4. AI Processing and Automated Decisions</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  The Service may use automated processing, including machine learning models, to generate 
                  product Scores and insights. These outputs are informational approximations and may be 
                  inaccurate.
                </p>
                <p>
                  We may use de-identified/aggregated data and certain User Content to improve our models 
                  and Service unless you opt out or unless prohibited by law.
                </p>
              </div>
            </section>

            {/* 5. HOW WE SHARE INFORMATION */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">5. How We Share Information</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>We may share information:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>With service providers (hosting, analytics, crash reporting, customer support)</li>
                  <li>With database/lookup partners that return Product Data (if applicable)</li>
                  <li>To comply with law, enforce rights, or respond to lawful requests</li>
                  <li>In a business transfer (merger, acquisition, asset sale)</li>
                </ul>
                <p>
                  We do not sell your personal information.
                </p>
              </div>
            </section>

            {/* 6. DATA RETENTION */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">6. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain information as long as necessary to provide the Service and for legitimate 
                business purposes (security, compliance, dispute resolution). You may request deletion 
                by contacting us at inquiries.tmax@gmail.com.
              </p>
            </section>

            {/* 7. YOUR CHOICES AND RIGHTS */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">7. Your Choices and Rights</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>Depending on your jurisdiction (including under GDPR for EU residents), you may have rights to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Access, correct, or delete your data</li>
                  <li>Object to or restrict certain processing</li>
                  <li>Port your data</li>
                  <li>Withdraw consent (where processing is based on consent)</li>
                </ul>
                <p>
                  To exercise your rights, please contact us at: <span className="text-[#FF6B35]">inquiries.tmax@gmail.com</span>
                </p>
              </div>
            </section>

            {/* 8. SECURITY */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">8. Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We use reasonable administrative, technical, and organizational measures to protect 
                information. No system is 100% secure.
              </p>
            </section>

            {/* 9. CHILDREN */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">9. Children</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service is not directed to children under 16 years of age. If you believe a child has 
                provided personal information, contact us at <span className="text-[#FF6B35]">inquiries.tmax@gmail.com</span>.
              </p>
            </section>

            {/* 10. INTERNATIONAL TRANSFERS */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">10. International Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                If you operate internationally, your data may be processed in countries other than your 
                own. We use appropriate safeguards where required by law.
              </p>
            </section>

            {/* 11. THIRD-PARTY LINKS AND SDKS */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">11. Third-Party Links and SDKs</h2>
              <p className="text-gray-300 leading-relaxed">
                The App may include third-party SDKs or links. Their privacy practices are governed by 
                their own policies.
              </p>
            </section>

            {/* 12. CHANGES TO THIS PRIVACY POLICY */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">12. Changes to this Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy. We will update the "Last Updated" date and may 
                provide additional notice where required.
              </p>
            </section>

            {/* 13. CONTACT */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">13. Contact</h2>
              <div className="text-gray-300 space-y-2 leading-relaxed">
                <p>Email: <span className="text-[#FF6B35]">inquiries.tmax@gmail.com</span></p>
                <p>Company: <span className="text-[#FF6B35]">DISPLAYOURVISION SRL (CUI: 48488845)</span></p>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/terms">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
              >
                <FileText className="mr-2 h-4 w-4" />
                Terms of Service
              </Button>
            </Link>
            
            <Link href="/">
              <Button
                className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#FF8555] text-white"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© 2025 TMAX. All rights reserved.</p>
      </footer>
    </main>
  );
}

