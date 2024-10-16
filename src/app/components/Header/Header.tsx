import Link from "next/link";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.header}>
      <a className={css.logo} href="/">
        Yevhenii Shpylovyi
      </a>
      <nav className={css.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contact</Link>
      </nav>
      <button className={css.button} type="button">
        Contact me
      </button>
    </div>
  );
};

export default Header;
