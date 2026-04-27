export function CTASection() {
  return (
    <div className="bg-emerald-600 dark:bg-emerald-900 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-emerald-100">
            Let's collaborate on your next project
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-lg transition-colors">
            Contact Me
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors">
            View Portfolio
          </button> */}
        </div>
      </div>
    </div>
  );
}