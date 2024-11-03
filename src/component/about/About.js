import React from 'react';
import Navbar from '../navbar/Navbar';
import  Footer from '../footer/Footer';
 

export default function About() {


  

  return (
      
      <div>
        <Navbar/>

      <section class="bg-linear-gradient(to right, #00c6ff, #0072ff) py-12">
  <div class="container mx-auto px-4">
    {/* <!-- Title --> */}
    <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">About Notes Web</h2>
    
    {/* <!-- Description --> */}
    <p class="text-gray-600 text-center mb-8 max-w-xl mx-auto">
      Welcome to Notes Web, your digital notebook for organizing thoughts, tracking tasks, and capturing inspiration. Whether you're a student, professional, or creative, Notes Web helps you stay organized and productive by providing an accessible, intuitive platform for managing all your notes in one place.
    </p>
    
    {/* <!-- Features List --> */}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* <!-- Feature 1 --> */}
      <div class="bg-green-300 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Simple & Intuitive</h3>
        <p class="text-gray-600">
          Designed with simplicity in mind, Notes Web lets you focus on your content with an easy-to-navigate layout that minimizes distractions.
        </p>
      </div>

      {/* <!-- Feature 2 --> */}
      <div class="bg-green-300 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Powerful Search</h3>
        <p class="text-gray-600">
          Quickly locate any note, idea, or to-do with our robust search functionality, so you spend less time searching and more time creating.
        </p>
      </div>

      {/* <!-- Feature 3 --> */}
      <div class="bg-green-300 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Sync Across Devices</h3>
        <p class="text-gray-600">
          Access your notes from any device, anywhere. Notes Web keeps your information synced so you can work on the go, without missing a beat.
        </p>
      </div>

      {/* <!-- Feature 4 --> */}
      <div class="bg-green-300 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Organize with Tags</h3>
        <p class="text-gray-600">
          Keep your notes organized by tagging them with custom labels. Easily categorize projects, ideas, and to-dos to find exactly what you need.
        </p>
      </div>

      {/* <!-- Feature 5 --> */}
      <div class="bg-green-300 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Secure & Private</h3>
        <p class="text-gray-600">
          Your notes are private and secure with Notes Web. We prioritize data security so you can store sensitive information with confidence.
        </p>
      </div>

      {/* <!-- Feature 6 --> */}
      <div class="bg-green-300 p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Dark Mode Option</h3>
        <p class="text-gray-600">
          Customize your workspace with light and dark modes, so you can write comfortably, day or night.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </div>
  )
}
