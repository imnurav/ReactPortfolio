import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wcv2zsj",
        "template_ar2t253",
        form.current,
        "LiNB3ckx-C8OB4hDu"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kumarvarun9811@gmail.com</h5>
            <a href="mailto:kumarvarun9811@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Varun Kumar</h5>
            <a
              href="https://m.me/varun.kumar9811"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/+919873538514 "
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name "
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
