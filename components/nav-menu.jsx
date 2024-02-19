'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Icons } from "./Icons"; // Assuming you have an Icons component
import { home } from "@/config/homepage"; // Assuming you have navigation data 
import { usePathname } from "next/navigation";

const variants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export function Drawer() {
  const navigation = home;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleDrawer} className="focus:bg-gray-900 p-2 rounded-full">
        <Icons.menu className="fill-white lg:hidden md:block block" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={toggleDrawer}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                zIndex: 1,
              }}
            />
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.1, 1],
                type: "spring", 
              }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: "319px",
                overflowY: "auto",
                backgroundColor: "#0D0D0D",
                zIndex: 2,
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
              className="px-5 py-[24px] h-full flex flex-col gap-3 items-start justify-start lg:hidden md:block "
            >
              <button onClick={toggleDrawer} className="px-1 mb-5 focus:bg-gray-900 p-2 rounded-full">
                <Icons.close className="fill-white lg:hidden md:block block" />
              </button>
              <div className="flex flex-col gap-3 items-start">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`Link ${
                      pathname === item.link
                        ? "h-[44px] w-[271px] items-center flex bg-white rounded-[100px] text-black fill-black"
                        : "text-white fill-white"
                    }`}
                  >
                    <button
                      onClick={toggleDrawer}
                      style={{
                        WebkitTapHighlightColor: "transparent",
                      }}
                      className="flex flex-row gap-4 items-center px-4"
                    >
                      <span>{item.icon}</span> 
                      <h1>{item.name}</h1> 
                    </button>
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

