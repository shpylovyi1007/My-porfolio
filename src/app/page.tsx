import css from "./page.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Yevhenii Spylovyi</h1>
        <p className={css.text}>Full-stack developer</p>
        <button className={css.button} type="submit">
          Download CV
        </button>
      </div>
      <Image src="/my_image.jpg" alt="My image" width={350} height={400} />
    </div>
  );
};

export default Home;
