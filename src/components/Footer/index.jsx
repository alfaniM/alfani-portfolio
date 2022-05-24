/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half">
      <div className="container">
        <div className="copyrights text-center">
          <p>
            © 2022, Made with 💖 by <span></span>
            <a href="#0">M. Aulia Alfani</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
