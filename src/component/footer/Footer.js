import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="bg-gray-800 text-white p-4 mt-8" >
  <div class="container mx-auto text-center">
    <p class="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
    <div class="flex justify-center space-x-4 mt-2">
      <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
      <span class="text-gray-400">|</span>
      <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
      <span class="text-gray-400">|</span>
      <a href="#" class="text-gray-400 hover:text-white">Contact Us</a>
    </div>
  </div>
</footer>
    </div>
  )
}
