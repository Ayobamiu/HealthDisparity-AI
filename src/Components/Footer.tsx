export default function Footer() {
  return (
    <div>
      <footer className="bg-white  dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Disclaimer: The health data and recommendations presented in this
            app are based on comparisons with real-world data and health
            guidelines. While we strive to provide accurate and helpful
            insights, some components of the results, including explanations and
            recommendations, are generated using artificial intelligence (AI).
            These AI-generated components are intended to assist in
            understanding the information but should not be taken as medical
            advice. We strongly encourage you to consult with a qualified
            healthcare professional for personalized medical advice and to
            verify any information before making health-related decisions.
          </p>
        </div>
      </footer>
    </div>
  );
}
