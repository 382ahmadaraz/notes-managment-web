import React from 'react'

export default function Upload() {
  return (
    <div>
      <div class="container mx-auto p-6 bg-gray-50 mt-8">
  <h1 class="text-3xl font-bold text-center text-gray-800 mb-4">How to Upload a Note</h1>
  <div class="space-y-4">
    <div class="bg-green-300 p-4 rounded-lg shadow-md ">
      <h2 class="text-xl font-semibold text-gray-700">Step 1: Navigate to the Notes Page</h2>
      <p class="text-gray-600">Open the application and find the "Add Notes" button on the main page.</p>
    </div>
    
    <div class="bg-green-300 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-gray-700">Step 2: Click on "Add Notes"</h2>
      <p class="text-gray-600">Click the "Add Notes" button to open the upload form.</p>
    </div>

    <div class="bg-green-300 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-gray-700">Step 3: Fill Out the Note Form</h2>
      <p class="text-gray-600">Enter the note title and provide a detailed description of the note, including the subject.</p>
    </div>

    <div class="bg-green-300 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-gray-700">Step 4: Review the Information</h2>
      <p class="text-gray-600">Check your inputs to ensure all necessary information is correct before submission.</p>
    </div>

    <div class="bg-green-300 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-gray-700">Step 5: Submit the Note</h2>
      <p class="text-gray-600">Click the "ADD" button to submit your note.</p>
    </div>

    <div class="bg-green-300 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-gray-700">Step 6: Confirmation and Feedback</h2>
      <p class="text-gray-600">Wait for the processing. A success message will confirm your note was uploaded.</p>
    </div>

    {/* <div class="bg-white p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-gray-700">Step 7: View Your Note (Optional)</h2>
      <p class="text-gray-600">Navigate back to the notes list to see your newly uploaded note and check its details.</p>
    </div> */}
  </div>
</div>

    </div>
  )
}
