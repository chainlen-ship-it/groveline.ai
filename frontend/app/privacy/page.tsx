import Link from 'next/link';

export default function PrivacyPolicy() {
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

  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--grove)]">Privacy Policy</h1>

  <div className="space-y-6 text-[var(--muted)]">
    <div className="forest-card p-4 md:p-5">
      <p className="text-sm">
        <strong>TL;DR:</strong> We collect only what we need (contact info and assessment responses), use it to send your results and improve the service, and we don’t sell your data.
        You can opt out of marketing anytime. Questions? Email <a href="mailto:privacy@groveline.ai" className="text-[var(--forest)] hover:underline">privacy@groveline.ai</a>.
      </p>
    </div>
        <p className="text-sm text-[var(--muted)]">
          <strong>Last Updated:</strong> January 9, 2025
        </p>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">1. Introduction</h2>
          <p>
            Groveline Advisor Services ("Groveline", "we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website groveline.ai and use our services, including our Operational Readiness Assessment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">2.1 Information You Provide</h3>
          <p className="mb-3">We collect information that you voluntarily provide to us, including:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you submit forms, schedule consultations, or contact us</li>
            <li><strong>Assessment Data:</strong> Responses to our Operational Readiness Assessment questionnaire</li>
            <li><strong>Communications:</strong> Information contained in emails, messages, or other correspondence you send to us</li>
          </ul>

          <h3 className="text-xl font-semibold text-[var(--ink)] mb-3 mt-4">2.2 Automatically Collected Information</h3>
          <p className="mb-3">When you visit our website, we automatically collect certain information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Analytics Data:</strong> We use Google Analytics to collect information about your visit, including pages viewed, time spent on pages, browser type, referring website, and general location (city/country level)</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">3. How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide our services, including generating your Operational Readiness Assessment report</li>
            <li>Communicate with you about our services, respond to inquiries, and schedule consultations</li>
            <li>Send you relevant information about operational best practices, industry insights, and our services (you may opt out at any time)</li>
            <li>Improve our website and services based on usage patterns</li>
            <li>Comply with legal obligations and protect our legal rights</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">4. Data Storage and Security</h2>
          <p className="mb-3">
            Your assessment data and contact information are stored securely using Supabase, a secure cloud database platform with enterprise-grade security measures including encryption at rest and in transit.
          </p>
          <p className="mb-3">
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">5. Information Sharing and Disclosure</h2>
          <p className="mb-3">We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services (e.g., Supabase for data storage, Google Analytics for website analytics)</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal processes</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity</li>
            <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">6. Your Rights and Choices</h2>
          <p className="mb-3">You have the following rights regarding your personal information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications by clicking the unsubscribe link in our emails or contacting us directly</li>
            <li><strong>Cookies:</strong> Manage cookie preferences through your browser settings</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, please contact us at <a href="mailto:privacy@groveline.ai" className="text-[var(--forest)] hover:underline">privacy@groveline.ai</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">7. Google Analytics</h2>
          <p className="mb-3">
            We use Google Analytics to understand how visitors use our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--forest)] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">8. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Assessment data and contact information are retained to provide ongoing service and support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to the United States and other countries.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--grove)] mb-4">12. Contact Us</h2>
          <p className="mb-3">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-[#f0f7f0] dark:bg-[#0f1410] p-4 rounded-lg border border-[var(--border)]">
            <p><strong className="text-[var(--grove)]">Groveline Advisor Services</strong></p>
            <p>Privacy Inquiries: <a href="mailto:privacy@groveline.ai" className="text-[var(--forest)] hover:underline">privacy@groveline.ai</a></p>
            <p>General Contact: <a href="mailto:hello@groveline.ai" className="text-[var(--forest)] hover:underline">hello@groveline.ai</a></p>
            <p>Location: Dallas, Texas</p>
          </div>
        </section>
      </div>
    </div>
  );
}
