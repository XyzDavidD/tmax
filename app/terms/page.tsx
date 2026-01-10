import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Shield } from "lucide-react";

export default function TermsPage() {
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
              TMAX Terms and Conditions
            </h1>
            <p className="text-gray-400 text-sm">
              Last Updated: <span className="text-[#FF6B35]">January 10, 2025</span>
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            
            {/* PREAMBLE */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">PREAMBLE</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  The TMAX mobile application (the "App"), any related website(s) (the "Website"), 
                  and all related services (together, the "Service") are operated by DISPLAYOURVISION SRL 
                  (the "Company," "we," "us," "our"), a company organized under the laws of Romania 
                  (CUI: 48488845, Reg. Com.: J12/3036/2023).
                </p>
                <p>
                  You may contact us at: <span className="text-[#FF6B35]">inquiries.tmax@gmail.com</span>.
                </p>
              </div>
            </section>

            {/* PLEASE READ CAREFULLY */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">PLEASE READ CAREFULLY</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  These Terms and Conditions (the "Terms") govern your access to and use of the Service. 
                  By downloading, accessing, or using the Service, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and our Privacy Policy (together, the "Agreement"). 
                  If you do not agree, do not use the Service.
                </p>
                <p>
                  The Company may revise these Terms at any time. Your continued use of the Service after 
                  such changes become effective constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </section>

            {/* IMPORTANT NOTICE */}
            <section className="bg-red-900/20 border border-red-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-400 mb-4">
                IMPORTANT NOTICE — NOT MEDICAL OR HEALTHCARE SERVICES
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  TMAX is a lifestyle and informational application only. The Service does not provide 
                  medical advice, diagnosis, treatment, nutritional counseling, or healthcare services of 
                  any kind, and is not a medical device. No content or functionality provided through the 
                  Service is intended to substitute for professional medical advice, diagnosis, or treatment, 
                  or to establish a healthcare provider–patient relationship.
                </p>
                <p>
                  The Service does not claim, promise, or guarantee any increase or boost in testosterone 
                  (or any other hormone), nor any particular health, fitness, or performance outcome. Any 
                  information, Scores, insights, or recommendations provided by the Service are general, 
                  automated, AI-based approximations that may be incomplete, inaccurate, misleading, or 
                  unsuitable for you.
                </p>
                <p className="font-semibold text-red-400">
                  You use the Service at your own risk and under your sole responsibility.
                </p>
              </div>
            </section>

            {/* 1. DEFINITIONS */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">1. DEFINITIONS</h2>
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p><span className="font-semibold text-white">App:</span> The TMAX mobile application and all associated pages, screens, and features.</p>
                <p><span className="font-semibold text-white">AI Output:</span> Any outputs, Scores, ratings, classifications, insights, summaries, or recommendations generated by automated systems or artificial intelligence models.</p>
                <p><span className="font-semibold text-white">Barcode Scan:</span> Capturing a product barcode and retrieving associated product information.</p>
                <p><span className="font-semibold text-white">Content:</span> All text, images, audio, video, software, databases, designs, and materials made available through the Service.</p>
                <p><span className="font-semibold text-white">Product Data:</span> Ingredient lists, nutrition facts, labeling information, metadata, and related product information displayed in the App.</p>
                <p><span className="font-semibold text-white">Score / Rating:</span> Any product-level or ingredient-level score or rating, including hormone-related or overall ratings, generated by the Service.</p>
                <p><span className="font-semibold text-white">User Content:</span> Any content submitted, uploaded, or transmitted by you, including photos, edits, habits, notes, messages, and feedback.</p>
                <p><span className="font-semibold text-white">Services:</span> The features offered by the App, including barcode scanning, AI analysis, scoring, habit tracking, inventory/favorites, search, and recommended products.</p>
              </div>
            </section>

            {/* 2. ELIGIBILITY AND ACCOUNT */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">2. ELIGIBILITY AND ACCOUNT</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Age Requirements</h3>
              <p className="text-gray-300 leading-relaxed">
                You must be at least 16 years old to use the Service. If you are under the age of 
                legal majority in your jurisdiction, you may only use the Service with the consent and 
                supervision of a parent or legal guardian.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Account Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Where accounts are available, you are responsible for maintaining the confidentiality 
                of your login credentials and for all activities conducted through your account.
              </p>
            </section>

            {/* 3. DESCRIPTION OF THE SERVICE */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">3. DESCRIPTION OF THE SERVICE</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>The Service may allow you to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Scan product barcodes to retrieve Product Data from internal databases and/or third-party sources.</li>
                  <li>Submit Product Data to automated AI analysis that generates Scores and insights, including hormone-related informational indicators (e.g., testosterone, insulin, cortisol, thyroid, estrogen).</li>
                  <li>Track daily lifestyle habits related to fitness, nutrition, and general well-being.</li>
                  <li>Save favorite products, manage an inventory, search products, and view recommended products.</li>
                </ul>
                <p>
                  The Company may modify, suspend, or discontinue any part of the Service at any time without liability.
                </p>
              </div>
            </section>

            {/* 4. HEALTH, HORMONE, AND SAFETY DISCLAIMERS */}
            <section className="bg-amber-900/20 border border-amber-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-400 mb-4">
                4. HEALTH, HORMONE, AND SAFETY DISCLAIMERS (CRITICAL)
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.1 No Medical Advice or Professional Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Service does not provide medical advice, nutritional counseling, diagnosis, treatment, 
                    or healthcare services. You must not rely on the Service for medical decisions. Always seek 
                    advice from a qualified healthcare professional.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.2 Hormone-Related Information Is Not Medical</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Any references to hormones (including testosterone, insulin, cortisol, thyroid, estrogen, or similar) 
                    are general, informational, and lifestyle-oriented only. They are not clinically validated, do not 
                    measure hormone levels, and do not replace laboratory testing or medical evaluation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.3 No Guaranteed Results; No Testosterone Boost Guarantee</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You expressly acknowledge and agree that the Service does not claim, promise, or guarantee any 
                    testosterone boost, hormonal optimization, hormonal change, improved laboratory values, improved 
                    health markers, increased strength, muscle gain, weight loss, or any other outcome. Results, if any, 
                    vary widely based on individual factors. The use of the Service is entirely at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.4 No Diagnosis; No Disease Claims</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Service is not intended to diagnose, treat, cure, or prevent any disease and makes no medical 
                    or therapeutic claims.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.5 AI and Automation Limitations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Service relies on automated systems, databases, and third-party sources that may be incomplete, 
                    outdated, biased, or inaccurate. AI Output may be incorrect, misleading, or inappropriate for your 
                    circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.6 Product Labels and Allergies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Product formulations may change. You are solely responsible for verifying ingredients and nutritional 
                    information directly on product packaging and ensuring products are safe for your dietary needs, 
                    allergies, or medical conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.7 Eating Disorders and Sensitive Users</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Service may not be appropriate for individuals with current or past eating disorders or disordered 
                    eating behaviors. Seek professional guidance if needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.8 Emergencies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Do not use the Service in emergency situations. If you believe you have a medical emergency, contact 
                    local emergency services immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. USER RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">5. USER RESPONSIBILITIES AND ACCEPTABLE USE</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Use the Service as a source of medical or professional advice.</li>
                  <li>Misuse, interfere with, or attempt to reverse engineer the Service, its algorithms, or AI models.</li>
                  <li>Scrape, harvest, or exploit data for commercial or competitive purposes.</li>
                  <li>Upload unlawful, harmful, misleading, or infringing content.</li>
                  <li>Upload personal data of others without lawful consent.</li>
                </ul>
                <p>The Company may suspend or terminate access for violations.</p>
              </div>
            </section>

            {/* 6. USER CONTENT */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">6. USER CONTENT</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 License</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By submitting User Content, you grant the Company a worldwide, royalty-free, transferable, 
                sublicensable license to use, reproduce, process, analyze, modify, and display such content to 
                operate, maintain, and improve the Service, including improving automated systems, to the extent 
                permitted by law.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Responsibility</h3>
              <p className="text-gray-300 leading-relaxed">
                You are solely responsible for the accuracy and legality of your User Content.
              </p>
            </section>

            {/* 7. INTELLECTUAL PROPERTY */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">7. INTELLECTUAL PROPERTY</h2>
              <p className="text-gray-300 leading-relaxed">
                All Content and technology underlying the Service (excluding User Content) are owned by the Company 
                or its licensors. You receive a limited, revocable, non-transferable license for personal, 
                non-commercial use only.
              </p>
            </section>

            {/* 8. THIRD-PARTY SERVICES */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">8. THIRD-PARTY SERVICES</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service may integrate or link to third-party services. The Company does not control and is 
                not responsible for third-party content, accuracy, or availability.
              </p>
            </section>

            {/* 9. SUBSCRIPTIONS AND PAYMENTS */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">9. SUBSCRIPTIONS AND PAYMENTS (IF APPLICABLE)</h2>
              <p className="text-gray-300 leading-relaxed">
                Purchases and subscriptions are processed by third-party platforms (e.g., Apple App Store, Google Play Store) 
                and governed by their terms. Subscriptions renew automatically unless canceled according to platform rules.
              </p>
            </section>

            {/* 10. TERMINATION */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">10. TERMINATION</h2>
              <p className="text-gray-300 leading-relaxed">
                The Company may suspend or terminate your access at any time for violation of these Terms or misuse of 
                the Service. You may stop using the Service at any time.
              </p>
            </section>

            {/* 11. DISCLAIMER OF WARRANTIES */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">11. DISCLAIMER OF WARRANTIES</h2>
              <p className="text-gray-300 leading-relaxed">
                The Service is provided "AS IS" and "AS AVAILABLE", without warranties of any kind, express or implied, 
                including accuracy, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            {/* 12. LIMITATION OF LIABILITY */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">12. LIMITATION OF LIABILITY</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>The Company shall not be liable for indirect, incidental, consequential, or special damages.</li>
                  <li>The Company shall not be liable for decisions or actions taken based on the Service.</li>
                  <li>The Company shall not be liable for any claim that you did not achieve any expected or desired result, including any alleged testosterone boost or hormone-related outcome.</li>
                  <li>The Company's total liability shall not exceed the greater of:
                    <ul className="list-disc list-inside space-y-1 pl-6 mt-2">
                      <li>The amount you paid to the Company in the twelve (12) months preceding the claim; or</li>
                      <li>50 EUR.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            {/* 13. INDEMNIFICATION */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">13. INDEMNIFICATION</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless the Company and its affiliates from any claims arising out 
                of your use of the Service or violation of these Terms.
              </p>
            </section>

            {/* 14. GOVERNING LAW */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">14. GOVERNING LAW</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of Romania, subject to mandatory consumer 
                protection laws where applicable, including applicable European Union regulations.
              </p>
            </section>

            {/* 15. DISPUTE RESOLUTION */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">15. DISPUTE RESOLUTION (OPTIONAL)</h2>
              <p className="text-gray-300 leading-relaxed">
                Disputes shall be resolved through good-faith negotiations, arbitration, or courts as permitted by 
                applicable law, as specified by the Company.
              </p>
            </section>

            {/* 16. CHANGES TO TERMS */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">16. CHANGES TO TERMS</h2>
              <p className="text-gray-300 leading-relaxed">
                The Company may modify these Terms at any time. Continued use constitutes acceptance.
              </p>
            </section>

            {/* 17. SEVERABILITY */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">17. SEVERABILITY</h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision is invalid, the remaining provisions remain in full force.
              </p>
            </section>

            {/* 18. CONTACT */}
            <section>
              <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">18. CONTACT</h2>
              <div className="text-gray-300 space-y-2 leading-relaxed">
                <p>Email: <span className="text-[#FF6B35]">inquiries.tmax@gmail.com</span></p>
                <p>Company: <span className="text-[#FF6B35]">DISPLAYOURVISION SRL (CUI: 48488845)</span></p>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/privacy">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
              >
                <Shield className="mr-2 h-4 w-4" />
                Privacy Policy
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

