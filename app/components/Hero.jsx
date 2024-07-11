import Image from "next/image";
import cv_image from "../../public/cv_image.jpg";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen" id="home">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to my Portfolio!</h1>
          <p className="py-6">
            Thank you for showing an interest in my portfolio. Click the buttons
            below to download my CV and know more about my projects.
          </p>
          <button className="btn btn-primary">Download CV</button>
          <button className="btn btn-primary ml-2">Go to Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
