import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-12 md:py-20">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-[var(--muted)] hover:text-[var(--forest)] transition-colors text-sm"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--grove)]">Terms and Conditions</h1>

      <div className="space-y-6 text-[var(--muted)]">
        <p className="text-sm text-[var(--muted)]">
          <strong>Last Updated:</strong> January 9, 2025
        </p>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the website groveline.ai (the "Site") and services provided by Groveline Advisor Services ("Groveline", "we", "us", or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">2. Description of Services</h2>
          <p className="mb-3">
            Groveline provides operational consulting and advisory services to investment managers, including:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Operational readiness assessments</li>
            <li>Fund launch infrastructure consulting</li>
            <li>Vendor stack optimization</li>
            <li>Compliance and risk management advisory</li>
            <li>CFO/COO fractional services</li>
            <li>Other operational consulting services as described on our Site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">3. Operational Readiness Assessment</h2>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">3.1 Nature of Assessment</h3>
          <p className="mb-3">
            Our free Operational Readiness Assessment is an educational tool designed to help investment managers identify potential operational gaps and opportunities for improvement. The assessment:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Is provided for informational purposes only</li>
            <li>Does not constitute professional advice or a comprehensive operational audit</li>
            <li>Should not be relied upon as the sole basis for operational or business decisions</li>
            <li>May not identify all operational risks or issues</li>
          </ul>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">3.2 No Guarantees</h3>
          <p>
            The assessment results and recommendations are based on limited information and standardized criteria. We make no guarantees regarding the accuracy, completeness, or applicability of assessment results to your specific situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">4. Not Professional Advice</h2>
          <p className="mb-3">
            <strong>Important Disclaimer:</strong> The information provided through our Site, assessment tool, and general communications is for educational and informational purposes only and does not constitute:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Legal advice</li>
            <li>Accounting or tax advice</li>
            <li>Investment advice</li>
            <li>Regulatory compliance advice</li>
            <li>A comprehensive operational audit</li>
          </ul>
          <p className="mt-3">
            Formal consulting engagements and professional advice require a signed service agreement. You should consult with qualified legal, accounting, and compliance professionals regarding your specific situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">5. Intellectual Property</h2>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">5.1 Our Content</h3>
          <p>
            All content on this Site, including text, graphics, logos, images, software, and assessment tools, is the property of Groveline Advisor Services and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
          </p>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">5.2 Your Content</h3>
          <p>
            By submitting information through our assessment tool or contact forms, you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process that information for the purposes of providing our services and improving our offerings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">6. Limitation of Liability</h2>
          <p className="mb-3">
            TO THE FULLEST EXTENT PERMITTED BY LAW:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>GROVELINE PROVIDES THE SITE AND ASSESSMENT TOOL "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED</li>
            <li>WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
            <li>WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR SITE OR SERVICES</li>
            <li>OUR TOTAL LIABILITY FOR ANY CLAIMS RELATED TO THE FREE ASSESSMENT TOOL SHALL NOT EXCEED $100</li>
            <li>WE ARE NOT RESPONSIBLE FOR DECISIONS MADE BASED ON ASSESSMENT RESULTS OR INFORMATION PROVIDED ON OUR SITE</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Groveline Advisor Services, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>Your use of our Site or services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any information you submit through our Site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">8. Service Engagements</h2>
          <p className="mb-3">
            Any formal consulting or advisory services provided by Groveline require a separate written service agreement. These Terms do not create a client relationship or consulting engagement. Specific terms for paid services, including:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Scope of work</li>
            <li>Fees and payment terms</li>
            <li>Deliverables and timelines</li>
            <li>Confidentiality provisions</li>
            <li>Liability limitations</li>
          </ul>
          <p className="mt-3">
            will be outlined in a separate service agreement that supersedes these general Terms for the specific engagement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">9. User Conduct</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use our Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>Interfere with or disrupt our Site or servers</li>
            <li>Submit false, misleading, or fraudulent information</li>
            <li>Use automated systems (bots, scrapers) to access our Site without permission</li>
            <li>Reverse engineer or attempt to extract source code from our assessment tool</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">10. Third-Party Links and Services</h2>
          <p>
            Our Site may contain links to third-party websites and services (including scheduling tools, analytics services, etc.). We are not responsible for the content, privacy practices, or terms of service of third-party sites. Your use of third-party services is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">11. Privacy</h2>
          <p>
            Your use of our Site is also governed by our <Link href="/privacy" className="text-[var(--forest)] hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your information. By using our Site, you consent to our privacy practices as described in the Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">12. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the "Last Updated" date at the top of this page. Your continued use of our Site after changes are posted constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">13. Modifications to Services</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our Site or services at any time without notice. We are not liable for any modification, suspension, or discontinuation of services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">14. Governing Law and Dispute Resolution</h2>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">14.1 Governing Law</h3>
          <p>
            These Terms are governed by the laws of the State of Texas, United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">14.2 Dispute Resolution</h3>
          <p>
            Any disputes arising from these Terms or your use of our Site shall be resolved through binding arbitration in Dallas, Texas, in accordance with the rules of the American Arbitration Association. You waive any right to a jury trial or to participate in a class action lawsuit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">15. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">16. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Groveline Advisor Services regarding the use of our Site and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">17. Contact Information</h2>
          <p className="mb-3">
            If you have questions about these Terms, please contact us:
          </p>
          <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
            <p><strong className="text-[var(--grove)]">Groveline Advisor Services</strong></p>
            <p>Legal Inquiries: <a href="mailto:legal@groveline.ai" className="text-[var(--forest)] hover:underline">legal@groveline.ai</a></p>
            <p>General Contact: <a href="mailto:hello@groveline.ai" className="text-[var(--forest)] hover:underline">hello@groveline.ai</a></p>
            <p>Phone: <a href="tel:903-605-6399" className="text-[var(--forest)] hover:underline">903-605-6399</a></p>
            <p>Location: Dallas, Texas</p>
          </div>
        </section>

        <section className="mt-8 p-4 bg-[#f0f7f0] dark:bg-[#0f1410] border-l-4 border-[var(--forest)] rounded">
          <p className="text-sm">
            <strong className="text-[var(--grove)]">Acknowledgment:</strong> By using our Site and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
