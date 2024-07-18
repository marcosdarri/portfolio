"use client";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rdskf38", "template_z8qvcv4", form.current, {
        publicKey: "Y9SbeuNojb7Zc0OWU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setFormData({
      full_name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact h-full flex justify-center" id="contact">
      <div className="">
        <h2 className="text-4xl font-bold p-5 pl-0">Get in contact</h2>
        <form
          ref={form}
          className="flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="full_name"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Full name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Type your message here..."
          ></textarea>

          <button type="submit" className="btn btn-primary w-full max-w-xs">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
