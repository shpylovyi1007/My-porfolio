import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SignupForm from "../Form/Form";
import css from "./ContactsComponent.module.scss";

const ContactsComponent = () => {
  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        <h1>Let&#39;s Connect</h1>
        <p className={css.text}>
          I&#39;m currently looking for new opportutinies, my inbox is always
          open. Whether you have a question or just want to say hi, I&#39;ll try
          my best to get back to you.
        </p>
        <ul className={css.list}>
          <li>
            <a
              href="https://www.linkedin.com/in/yevhenii-shpylovyi/"
              target="_blank"
            >
              <FaLinkedin className={css.icon} />
            </a>
          </li>
          <li>
            <a href="https://t.me/Yevhenii_Shpylovyi" target="_blank">
              <FaTelegram className={css.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_shpylovyi_1007/profilecard/?igsh=MXV5MmJhYXRha2lsNw=="
              target="_blank"
            >
              <FaInstagramSquare className={css.icon} />
            </a>
          </li>
        </ul>
      </div>
      <SignupForm />
    </div>
  );
};

export default ContactsComponent;
