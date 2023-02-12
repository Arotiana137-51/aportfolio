import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {

pageInfo: PageInfo;
};

export default function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi , I am Arot†ana",
      " I can't wait to work with you",
      " <I code with passion></I>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles></BackgroundCircles>
      <Image
        className="relative rounded-full  mx-auto object-cover"
        height={128}
        width={128}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="arotiana"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-teal-400 pb-2 tracking-wide">
          {pageInfo?.role}
          
        </h2>
        <h1 className="text-5xl  lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link  href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link  href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link  href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link  href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
