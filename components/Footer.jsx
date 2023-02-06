import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Under contruction 👷🏽‍♀️</h1>
      <p className="icons">

      <Link href="https://instagram.com/moni.luv.22?igshid=YzgyMTM2MGM=">
        <button
          type="button"
          className="btn"
        >
          <AiFillInstagram />
        </button>
      </Link>
      </p>
        <span>Moni Luv</span>

      {/* <p>2023 Kelvin Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p> */}
    </div>
  );
};

export default Footer;
