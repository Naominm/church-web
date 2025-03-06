import { FaClock } from "react-icons/fa6";
import { IoMail, IoCall } from "react-icons/io5";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      <div className="headerContacts">
        <HeaderContact
          Icon={<FaClock />}
          text="Opening Hours - 10 Am to 6 Pm"
        />
        <HeaderContact Icon={<IoMail />} text="info@church.com" />
        <HeaderContact Icon={<IoCall />} text="+254 71 2345 678" />
      </div>
    </div>
  );
}

function HeaderContact({ Icon, text }) {
  return (
    <div className="headerContact">
      {Icon}
      <p>{text}</p>
    </div>
  );
}

export default Header;
