import React from "react";
import "./Aboutus.css";
import title from "../../../assets/Images/aboutus_title.png";

export default function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="Aboutus_0">
        <div className="aboutus_box">
          <img src={title} className="title" alt="About Us Title" />
        </div>
        <div className="Aboutus_box2">
          <p id="writings">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, risus at vehicula dapibus, odio nulla volutpat nunc, non
            tempus metus elit eu velit. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nulla venenatis nisl ipsum, tempor
            sollicitudin magna commodo vitae. Pellentesque commodo finibus
            venenatis. Phasellus quis lacus tellus. Etiam in leo accumsan,
            tincidunt sem sit amet, imperdiet velit. Integer vitae blandit quam,
            ac tincidunt metus. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </div>
  );
}
