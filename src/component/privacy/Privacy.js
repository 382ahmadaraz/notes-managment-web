import React from 'react'
import Navbar from '../navbar/Navbar';
import  Footer from '../footer/Footer';


export default function Privacy() {
  return (

    <div>
    <Navbar/>
      <section class="bg-gray-100 py-12">
  <div class="container mx-auto px-4 max-w-4xl bg-white p-8 rounded-lg shadow-lg">
    {/* <!-- Title --> */}
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h2>
    
    {/* <!-- Last Updated --> */}
    <p class="text-sm text-gray-500 mb-8 text-center">Last Updated: [11/03/2024]</p>
    
    {/* <!-- Content --> */}
    <div class="space-y-8 text-gray-700">
      {/* <!-- Section 1 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">1. Introduction</h3>
        <p>
          Welcome to Notes Web. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Service. By using Notes Web, you agree to the data practices described in this Privacy Policy.
        </p>
      </div>

      {/* <!-- Section 2 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">2. Information We Collect</h3>
        <p>
          We collect information that you provide directly to us, such as when you create an account or upload notes. This may include:
        </p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Personal information (e.g., name, email address)</li>
          <li>Content you upload or create on Notes Web</li>
          <li>Usage data, such as your interactions with our Service</li>
        </ul>
      </div>

      {/* <!-- Section 3 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
        <p>
          We use your information to:
        </p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>Provide and improve our Service</li>
          <li>Communicate with you about updates, support, and promotions</li>
          <li>Personalize your experience on Notes Web</li>
          <li>Analyze usage and improve functionality</li>
        </ul>
      </div>

      {/* <!-- Section 4 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">4. Sharing of Information</h3>
        <p>
          We do not share your personal information with third parties, except in the following cases:
        </p>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li>With service providers who help us operate our Service</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </div>

      {/* <!-- Section 5 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">5. Security of Your Information</h3>
        <p>
          We implement appropriate security measures to protect your personal information. However, no data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your data.
        </p>
      </div>

      {/* <!-- Section 6 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">6. Your Choices</h3>
        <p>
          You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us.
        </p>
      </div>

      {/* <!-- Section 7 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the Service after changes constitutes your acceptance of the new Privacy Policy.
        </p>
      </div>

      {/* <!-- Section 8 --> */}
      <div>
        <h3 class="text-xl font-semibold mb-2">8. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p class="mt-2">
        <br/>
          Email: <a href="mailto:your-email@example.com" class="text-blue-600 hover:underline">382ahmadraza@gmail.com</a><br/>
          Location: [Pakistan]
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}
