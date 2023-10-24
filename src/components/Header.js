import React from "react";
import { ReactComponent as Chevron } from "../images/chevron.svg";

const Header = () => {
  return (
    <header className="bg-[#1a1a1a] flex justify-between items-center py-3.5 px-inlinepadding">
      <div>
        <h4 className="text-xtralarge font-semibold text-white uppercase">aniedi udo-obong</h4>
      </div>
      <div className="flex items-center">
        <div className="flex pe-20">
          <p className="text-large font-normal text-white uppercase opacity-50 pe-10">Who is Aniedi?</p>
          <div className="flex items-center">
            <p className="text-large font-normal text-white uppercase opacity-50 pe-2">media</p>
            <Chevron className="opacity-50" />
          </div> 
        </div>

        <button className="uppercase text-white bg-[#030304] bg-opacity-50 border-white border border-opacity-30 px-6 py-2 rounded-3xl tracking-wide text-sm">Contact</button>
      </div>

    </header>
  );
};

export default Header;