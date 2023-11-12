import { useState } from "react";
import { Link } from "react-router-dom";

import { logo, menu, xmark } from "../assets";

import { navTitles } from "../constants/navTitles";

import { mainStyles } from "../styles/mainStyles";
import { DownloadCVButton } from "./DownloadCVButton";

export function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${mainStyles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Enrique&nbsp;
            <span className="sm:block hidden">| De La Concepción</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navTitles.map((title) => (
            // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <li
              key={title.id}
              className={`${
                active === title.name ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer`}
              onClick={() => setActive(title.name)}
            >
              <a href={`#${title.id}`}>
                {title.icon ? (
                  <button type="button" onClick={() => window.open(title.link)}>
                    <img
                      className="w-[32px] h-[32px]"
                      src={title.icon}
                      alt={title.name}
                    />
                  </button>
                ) : (
                  title.name
                )}
              </a>
            </li>
          ))}
          <DownloadCVButton />
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <img
            src={toggle ? xmark : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-md`}
          >
            <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
              {navTitles.map((title) => (
                // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <li
                  key={title.id}
                  className={`${
                    active === title.name ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(title.name);
                  }}
                >
                  <a href={`#${title.id}`}>
                    {title.icon ? (
                      <button
                        type="button"
                        onClick={() => window.open(title.link)}
                      >
                        <img
                          className="w-[32px] h-[32px]"
                          src={title.icon}
                          alt={title.name}
                        />
                      </button>
                    ) : (
                      title.name
                    )}
                  </a>
                </li>
              ))}
              <DownloadCVButton />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
