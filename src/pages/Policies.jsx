import React from 'react'

function Policies(){
  return (
    <div className="section">
      <div className="container policies">
        <h2 className="section-title">Policies</h2>

        <section>
          <h3>Privacy Policy</h3>
          <p>We collect minimal information you provide (such as name and email via the contact form) to respond to your inquiries. We do not sell personal data. Data is retained only as long as necessary to provide our services.</p>
          <ul>
            <li><strong>Data Collected:</strong> Name, email, and message details you submit.</li>
            <li><strong>How We Use It:</strong> To respond to your requests and improve content.</li>
            <li><strong>Storage:</strong> Securely stored; access limited to authorized personnel.</li>
            <li><strong>Your Rights:</strong> You can request correction or deletion of your data.</li>
          </ul>
        </section>

        <section>
          <h3>Terms & Conditions</h3>
          <p>By using this website, you agree to follow local laws and our usage rules. Content is provided “as is” without warranties. We are not liable for indirect or incidental damages.</p>
          <ul>
            <li><strong>Use of Content:</strong> For personal, non-commercial use.</li>
            <li><strong>Prohibited:</strong> Misuse, scraping, or attempting to breach security.</li>
            <li><strong>Changes:</strong> We may update these terms; continued use implies acceptance.</li>
          </ul>
        </section>

        <section>
          <h3>Cookie Policy</h3>
          <p>We use essential cookies to ensure the site functions correctly and may use analytics cookies to understand traffic (if enabled). You can control cookies in your browser settings.</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for navigation and basic features.</li>
            <li><strong>Analytics Cookies:</strong> Help us improve pages and user experience.</li>
            <li><strong>Opt-out:</strong> Manage preferences in your browser settings.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Policies;
