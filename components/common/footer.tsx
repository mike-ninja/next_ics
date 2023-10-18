import Link from "next/link";
import React, { Fragment } from "react";
import { configs, links } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="pt-5 pb-2 lg:pt-8">
      <div className="container flex flex-col">
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-4">
          <div className="flex flex-col">
            <h3
              style={{ fontFamily: "Gabarito" }}
              className="text-lg uppercase text-slate-800/80"
            >
              Contacts
            </h3>
            <span className="text-xs sm:text-sm lg:text-base text-slate-600">
              PHONE:{" "}
              <Link
                href={`tel:${configs.contact.phone}`}
                className="group font-semibold"
              >
                <span className="relative pb-1 ml-1">
                  {configs.contact.phone}
                  <span className="absolute h-1 w-0 left-0 bottom-0 group-hover:w-full group-focus:w-full group-active:scale-95 bg-slate-800 transition-all ease-in-out" />
                </span>
              </Link>
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-slate-600">
              EMAIL:{" "}
              <Link
                href={`mailto:${configs.contact.email}`}
                target="_blank"
                rel="noreferrer"
                className="group font-semibold"
              >
                <span className="relative pb-1 ml-1">
                  {configs.contact.email}
                  <span className="absolute h-1 w-0 left-0 bottom-0 group-hover:w-full group-focus:w-full group-active:scale-95 bg-slate-800 transition-all ease-in-out" />
                </span>
              </Link>
            </span>
            <span className="text-xs sm:text-sm lg:text-base text-slate-600">
              ADDRESS:{" "}
              <span className="px-2 py-1 font-semibold">
                8 Kiwi Court, Hervey Bay QLD, Australia 4655
              </span>
            </span>
          </div>
          <div className="hidden lg:block">
            <span className="w-fit mb-3 flex flex-col gap-1 mx-auto">
              <h2
                style={{ fontFamily: "Bungee Inline" }}
                className="text-lg sm:text-xl w-fit text-slate-800 text-center"
              >
                Indigenous Conference Services
              </h2>
              <span className="inline-flex h-1 bg-slate-800/90 w-3/4 mx-auto" />
            </span>
            <p className="text-sm text-center text-slate-600">
              We acknowledge the Traditional Owners and Custodians of the lands
              on which we work, live, and create. We pay our respects to their
              Elders past, present, and emerging.
            </p>
          </div>
          <div className="flex flex-col text-right">
            <h3
              style={{ fontFamily: "Gabarito" }}
              className="text-lg uppercase text-slate-800/80"
            >
              Links
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2 w-fit ml-auto">
              {links.map((link, index) => (
                <Fragment key={index}>
                  <Link
                    href={link.path}
                    className="group text-slate-700 text-xs sm:text-sm lg:text-base"
                  >
                    <span className="relative pb-1">
                      {link.name}
                      <span className="absolute h-1 w-0 right-0 bottom-0 group-hover:w-full group-focus:w-full group-active:scale-95 bg-slate-800 transition-all ease-in-out" />
                    </span>
                  </Link>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <small className="italic mx-auto lg:text-lg font-thin">
          ©&nbsp;Indigenous&nbsp;Conference&nbsp;Services&nbsp;2023
        </small>
      </div>
    </footer>
  );
}
