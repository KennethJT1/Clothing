import React from "react";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart, CgProductHunt } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="bg-white p-3">
        <div className="w-full flex sm:flex-col justify-between">
          <div className="">
            <p>Best outfit at 100% off</p>
          </div>

          <div className="flex text-blue-400 ml-4">
            <div>
              <a href="tel:+2347000001116">
                <span>
                  <BiPhoneCall />{" "}
                </span>{" "}
                <span>Call Us on +2347000001116</span>
              </a>
            </div>
            <div className="flex">
              <Link>
                <BiPhoneCall size={25} className="mx-4" />
              </Link>
              <Link>
                <CiMail size={25} className="mx-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
