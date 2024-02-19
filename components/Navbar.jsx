"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Icons } from "./Icons";
import { navigation } from "@/config/homepage";
import { Drawer } from "./nav-menu";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(navigation[0].id);

  return (
    <nav className="lg:px-[48px] md:px-[40px] px-5 my-[24px] text-[18px]">
      <div className="lg:flex  md:container lg:container lg:gap-[64px] md:gap-[50px] lg:items-center">
        <div className=" flex items-center justify-between w-auto">
          <Drawer />
          <Link href="/">
            <Icons.logo />
          </Link>
          <Link href="/Search" className=" focus:bg-gray-900 p-2 rounded-full">
          <Icons.search  className="fill-white lg:hidden md:block block" />
          </Link>
        </div>
        <div className="gap-[63px] items-center lg:flex md:hidden  hidden justify-center ">
          {navigation.map((item, index) => (
            <Link key={index} href={item.link}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id ? "" : "hover:text-white/60"
                } relative rounded-full px-3 py-1.5   text-white outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === item.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
