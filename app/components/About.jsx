import Image from "next/image";

const About = () => {
  return (
    <div className="hero bg-white min-h-screen dark:bg-slate-700" id="home">
      <div className="hero-content text-center">
        <div className="max-w-md md:text-left">
          <h1 className="text-5xl font-bold dark:text-white">
            Learn more about me...
          </h1>
          <p className="py-6 dark:text-white">
            Learn more about my work history and my programing skills.
          </p>

          <a className="btn btn-primary" href="/about">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
