import Phone from "@assets/icons/phone.svg";
import Email from "@assets/icons/email.svg";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const myContacts = [
  {
    icon: <Email className="text-inherit" />,
    href: "mailto:p.gupalo@audit.lviv.ua",
    text: "p.gupalo@audit.lviv.ua",
  },
  {
    icon: <Phone className="text-inherit" />,
    href: "tel:+0677131644",
    text: "(067) 713 16 44",
  },
];

export const mySocialNetworks = [
  {
    icon: <FaYoutube />,
    href: "",
    text: "Youtube",
  },
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/share/1RJ5zWShFF/?mibextid=wwXIfr",
    text: "Facebook",
  },
  {
    icon: <FaTelegram />,
    href: "https://t.me/PetroGupalo",
    text: "Telegram",
  },
];
