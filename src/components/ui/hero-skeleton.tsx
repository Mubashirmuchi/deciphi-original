export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden bg-gray-900">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 sm:space-y-8 animate-pulse">
          <div className="space-y-4">
            <div className="h-12 sm:h-16 md:h-20 lg:h-24 bg-gray-700 rounded-lg mx-auto max-w-4xl"></div>
            <div className="h-8 sm:h-12 md:h-16 bg-gray-700 rounded-lg mx-auto max-w-3xl"></div>
          </div>
          <div className="h-6 sm:h-8 bg-gray-700 rounded-lg mx-auto max-w-2xl"></div>
          <div className="h-12 w-40 bg-gray-700 rounded-lg mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
