function Intro() {
  return (
    <section className="w-full h-screen px-16 flex flex-col justify-center items-center sm:grid sm:content-center sm:grid-cols-3 sm:gap-4">
      <div className="col-span-2 flex flex-col justify-center text-center sm:text-left sm:grid-span-1">
        <h1 className="text-yellow-400 text-3xl">
          Hi, I'm Justine Nguyen
          <span className="block text-2xl">
            a <b>Frontend Developer</b> <span className="block sm:inline">with a past life in digital marketing & SEO</span>
          </span>
        </h1>
        <h2 className="mt-2 text-white italic">
          Originally from Canada, now located in Ireland
        </h2>
      </div>
      <figure className="mt-8 w-3/4 sm:w-full sm:mt-0 sm:col-start-3 sm:col-span-1">
        <img
          className="rounded-full border-r-4 border-t-4 border-yellow-400"
          src="/profile.jpeg"
          alt=""
        />
      </figure>
    </section>
  );
}

export default Intro;
