import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer gap-y-5 mt-12 footer-center p-8 pb-5 bg-slate-800 text-slate-300 rounded">
        <h2 className="text-5xl">🥧</h2>
        <div>
          <div className="form-control w-80">
            <label className="label mx-auto">
              <span className="label-text">
                🥧 Subscribe to get new service 🥧
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4 flex justify-between space-x-8 text-3xl">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-8 ">
          <div className="flex-1 h-px sm:w-32   bg-gray-400 "></div>
          <p>Copyright © 2022 - All right reserved by Tommy Mia</p>
        </div>
      </footer>
    );
};

export default Footer;