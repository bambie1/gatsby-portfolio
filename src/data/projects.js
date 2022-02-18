import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import TextLink from "../components/TextLink";

export const projects = [
  {
    id: 1,
    title: "SoPlugged",
    subTitle: "FREE Platform for buying black!",
    description: (
      <>
        <p>
          Working with entrepreneurs has always been a passion of mine. And,
          with SoPlugged, I got to build a platform to help black entrepreneurs
          showcase their businesses, and increase their visibility.
        </p>
        <p>
          I built it with one of my preferred frameworks: Next.js (with
          Typescript), and hosted on Vercel. Algolia search is also used to make
          the search experience very user-friendly
        </p>
        <p className="mb-7">
          It's 100% FREE to enlist your business, or to find a business. So,
          check it out if you're a black entrepreneur, or looking to{" "}
          <b>#buy-black</b>
          🙂
        </p>
      </>
    ),
    url: "https://www.soplugged.com/",
    image: (
      <StaticImage
        src="../images/soplugged-mock.png"
        alt="SoPlugged screenshot"
        placeholder="blurred"
        objectFit="contain"
        width={313}
        height={325}
      />
    ),
  },
  {
    id: 2,
    title: "LST Center",
    subTitle: "Website for Ottawa church",
    description: (
      <>
        <p>
          This is a website for my local church. We were missing a very reliable
          digital presence for some time, and as a developer, I took on the task
          of creating this.
        </p>
        <p>
          I opted for WordPress as my weapon of choice since the site was going
          to be maintained and updated by non-developers (different ways to
          solve a problem). Given the huge demand for ways to donate online in
          recent yearsr, I also added an embedded{" "}
          <TextLink href="https://kweeve.com/">Kweeve</TextLink> form to make it
          easy for members to give wherever they are
        </p>
        <p className="mb-7">
          If you happen to be in Ottawa on Sunday, and are looking for a place
          of worship, we'd love to welcome you!
        </p>
      </>
    ),
    url: "https://www.livingspringtabernacle.org/",
    image: (
      <StaticImage
        src="../images/lst-mobile.png"
        alt="LST screenshot"
        placeholder="blurred"
        width={400}
        height={410}
      />
    ),
  },
];
