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
      </nav>
      <Link href="/contacts" className={css.button} type="button">
        Contact me
      </Link>
    </div>
  );
};

export default Header;
