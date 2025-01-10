export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        The people behind your
        <br />
        favorite AI solutions.
      </h1>
      <p className="mt-6 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
        Our #1 goal is to satisfy our customers' needs through innovative AI solutions.
      </p>
      <div className="mt-8">
        <a 
          href="mailto:team@elevatedailabs.com"
          className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
} 