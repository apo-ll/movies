'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-[70px] py-[30px] text-[14px] ">
      <div className="flex container gap-[64px] items-center justify-center">
        <div className="flex gap-[63px] items-center max-w-[1300px]  ">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`Link ${
                pathname === item.link
                  ? "text-black bg-white px-[16px] py-[6px] rounded-[100px] font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Search",
    link: "/Search",
  },
  {
    name: "Movies",
    link: "/Movies",
  },
  {
    name: "Shows",
    link: "/Shows",
  },

  {
    name: "Library",
    link: "/Library",
  },
];
