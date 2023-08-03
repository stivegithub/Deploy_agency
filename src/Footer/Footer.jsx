import React from "react";
import { Link } from "react-router-dom";
import {
  LocationOn,
  Facebook,
  Public,
  Instagram,
  Copyright,
  PhoneIphone,
} from "@mui/icons-material";
export default function Footer() {
  return (
    <>
      <div className=" flex justify-between p-2 ">
        <div> Profiter de la fomation actuelle.</div>
        <div className="">
          <button className=" px-3 py-2 focus:bg-blue-400 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-400">
            <Link to="/training">Strategie d'influence</Link>
          </button>
          <div className=" relative right-2 bottom-3 animate-ping p-1 bg-green-400 h-4 w-4 inline-block  rounded-full"></div>
        </div>
      </div>
      <div className=" py-3 px-2  bg-blue-400 ">
        <div className=" text-white pb-2">
          {" "}
          <Public />
          <span className=" text-green-50">Nos reseaux</span>
        </div>
        <div className="flex justify-between">
          <div className=" flex  gap-2 items-center  ">
            <div className=" text-blue-600  bg-white rounded-2 p-1 ">
              <a href="https://www.facebook.com/loic.tekeu.75">
                <Facebook />
              </a>
            </div>
            <div className="  text-red-600 bg-white rounded-2 p-1">
              {" "}
              <a
                href="https://instagram.com/boost._237?igshid=ZGUzMzM3NWJiOQ==
.
651835363"
              >
                {" "}
                <Instagram />
              </a>
            </div>
            <div className="  text-black bg-white rounded-2 p-1">
              {" "}
              <a href="tel: 6 51 83 53 63">
                {" "}
                <PhoneIphone />
              </a>
            </div>
          </div>
          <div className=" flex flex-row gap-1">
            <LocationOn />{" "}
            <div className=" text-gray-100 text-[16px]">yaounde , cameroun</div>
          </div>
        </div>
      </div>
      <div></div>
      <div className=" bg-white text-center text-black pt-2 px-0 ">
        <div>
          designed by{" "}
          <a
            href="http://digitalway.eno.cm"
            className=" text-decoration-none text-blue-400"
          >
            digital way cameroun
          </a>
        </div>
        <div className=" bg-black text-white px-1">
          <Copyright />
          2023
        </div>
      </div>
    </>
  );
}
