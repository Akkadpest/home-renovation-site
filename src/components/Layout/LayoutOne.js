import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import TopNavOne from "../Header/TopNav/TopNavOne";
import MenuOne from "../Header/Menu/MenuOne";
import FooterOne from "../Footer/FooterOne";

export default function LayoutOne(props) {
  return (
    <>
      <header id="header" className="header relative z-[2]">
        <TopNavOne />
        <div className="header_main sm:h-25 h-20 bg-white">
          <div className="container flex items-center justify-between h-full">
            <h1>
              <Link href="/" className="logo flex items-center gap-3">
                <Image width={1000} height={1000} src="/images/o&n-renovation.png" className="flex-shrink-0 w-10" alt="logo" />
                <strong className="heading4">O & N Renovation</strong>
              </Link>
            </h1>
            <ul className="header_info flex items-center xl:gap-15 gap-5">
              <li>
                <Link href="tel:+1555678888" className="flex items-center gap-3 group">
                  <span
                    className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 border-2 border-orange duration-400 group-hover:bg-orange group-hover:text-white">
                    <Icon.PhoneCall className="sm:text-3xl text-2xl" />
                  </span>
                  <div className="max-lg:hidden">
                    <span className="text-variant1">Call Us Now:</span>
                    <strong className="heading6 block mt-0.5">055-614-3885</strong>
                  </div>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Link href="mailto:hi.avitex@gmail.com" className="flex items-center gap-3 group">
                  <span
                    className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 border-2 border-orange duration-400 group-hover:bg-orange group-hover:text-white">
                    <Icon.Envelope className="sm:text-3xl text-2xl" />
                  </span>
                  <div className="max-lg:hidden">
                    <span className="text-variant1">Email Address</span>
                    <strong className="heading6 block mt-0.5">info@renovation.ae</strong>
                  </div>
                </Link>
              </li>
              <li className="max-sm:hidden">
                <Link href="/pages/book-appointment" className="btn">Request an estimate</Link>
              </li>
            </ul>
          </div>
        </div>
        <MenuOne />
      </header>
      {props.children}
      <FooterOne color={'orange'} />
    </>
  );
}
