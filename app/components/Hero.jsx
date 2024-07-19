const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen dark:bg-slate-800" id="home">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold dark:text-white">
            Welcome to my Portfolio!
          </h1>
          <p className="py-6 dark:text-white">
            Thank you for showing an interest in my portfolio. Click the buttons
            below to download my CV and know more about my projects.
          </p>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/uc?export=download&id=1JEcaQ2oYdBF0bs9AoCqqqcds16o0e6GL"
            target="_blank"
          >
            Download CV
          </a>
          <a className="btn btn-primary ml-2" href="#portfolio">
            Go to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
