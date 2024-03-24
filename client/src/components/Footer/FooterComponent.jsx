import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {FaKaggle} from 'react-icons/fa'
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Logo from "../Logo/Logo";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Logo />
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://yashpotdar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Portfolio
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yash's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/yashpotdar-py"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/yashyogeshpotdar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  Privacy
                </Footer.Link>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:item-center sm:justify-between">
          <Footer.Copyright
            href="https://yashpotdar.netlify.app"
            by="Yash Potdar"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://github.com/yashpotdar-py"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/yashyogeshpotdar/"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.kaggle.com/yashpotdarpy"
              target="_blank"
              rel="noopener noreferrer"
              icon={FaKaggle}
            />
            <Footer.Icon
              href=" https://wa.me/7028712645"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsWhatsapp}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
