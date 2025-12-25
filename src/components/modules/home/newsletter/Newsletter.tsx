const Newsletter = () => {
  return (
    <section className="absolute left-1/2 -translate-x-1/2 mt-24">
      <section className="relative  px-6  overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/2 left-1/2 w-20 md:w-[220px] lg:w-[450px] xl:w-[500px] h-[500px]
          bg-primary/30 blur-[120px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div
          className="w-sm md:w-2xl lg:w-4xl xl:w-5xl mx-auto rounded-xl
        bg-custom-accent/10 dark:bg-secondary/40 backdrop-blur-xl border 
        px-8 py-3 text-center"
        >
          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-semibold mb-5 leading-tight">
            Don’t Miss What’s Next
          </h2>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 justify-center max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-6 py-1.5 rounded-full
            bg-white/50 dark:bg-black/20 border border-white/10
            outline-none focus:ring-2 focus:ring-primary
            placeholder:opacity-60"
            />

            <button
              type="submit"
              className="px-10 py-1.5 rounded-full font-medium
            bg-primary dark:bg-secondary text-white
            hover:scale-105 hover:shadow-lg hover:shadow-primary/30
            transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Newsletter;
