export default function Post() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Getting Started with Covox AI
      </h1>
      <p className="mb-8 text-gray-400">February 24, 2025</p>

      <div className="prose prose-lg prose-invert max-w-none">
        <p>
          Covox AI is a powerful platform that helps agricultural businesses
          analyze drone imagery to identify crop health issues, optimize
          irrigation, and increase yields. This guide will walk you through the
          basics of getting started with our platform.
        </p>

        <h2>Setting Up Your Account</h2>
        <p>Before you can start using Covox AI, you&apos;ll need to:</p>
        <ol>
          <li>
            <strong>Create an account</strong> - Visit{" "}
            <a href="https://admin.covox.io/login">admin.covox.io</a> and click
            &quot;Create Account&quot;
          </li>
          <li>
            <strong>Verify your email</strong> - Check your inbox for a
            verification link
          </li>
          <li>
            <strong>Complete your profile</strong> - Add your farm details and
            preferences
          </li>
        </ol>

        <h2>Uploading Your First Drone Images</h2>
        <p>
          Covox AI works by analyzing drone imagery of your fields. To get
          started:
        </p>
        <ol>
          <li>
            Ensure your drone captures high-resolution images (minimum 12MP
            recommended)
          </li>
          <li>Upload your images through our web interface or API</li>
          <li>
            Wait for our AI to process the imagery (typically takes 5-10
            minutes)
          </li>
        </ol>

        <pre className="overflow-x-auto rounded bg-gray-800 p-4 text-gray-200">
          <code>
            {`// Example API upload using fetch
const response = await fetch('https://api.covox.io/v1/upload', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.COVOX_API_KEY}\`,
    'Content-Type': 'multipart/form-data'
  },
  body: formData // FormData containing your images
});`}
          </code>
        </pre>

        <h2>Understanding Your Results</h2>
        <p>
          Once processing is complete, you&apos;ll receive a detailed analysis
          including:
        </p>
        <ul>
          <li>Vegetation health index maps</li>
          <li>Problem area identification</li>
          <li>Irrigation recommendations</li>
          <li>Yield predictions</li>
        </ul>
        <p>
          Our color-coded maps make it easy to identify areas that need
          attention, with red indicating potential issues and green showing
          healthy vegetation.
        </p>

        <h2>Next Steps</h2>
        <p>
          After you&apos;ve familiarized yourself with the basics, explore our
          advanced features:
        </p>
        <ul>
          <li>
            <strong>Historical Analysis</strong>: Track changes over time
          </li>
          <li>
            <strong>Custom Alerts</strong>: Get notified when specific
            conditions are detected
          </li>
          <li>
            <strong>Integration</strong>: Connect with your existing farm
            management software
          </li>
        </ul>
        <p>
          If you have any questions, our support team is available 24/7 at
          support@covox.io.
        </p>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Getting Started with Covox AI",
  description:
    "Learn how to integrate Covox AI into your existing workflows with our step-by-step guide.",
}
