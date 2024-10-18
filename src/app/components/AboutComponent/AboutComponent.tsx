import Image from "next/image";
import css from "./AboutComponent.module.scss";

const AboutComponent = () => {
  return (
    <div className={css.container}>
      <Image src="/images.jpg" alt="" width={500} height={500} />
      <div>
        <p className={css.text}>
          I am a junior web developer with a well developed logic, ability and
          willingness to learn quickly. I have experience working as a Team Lead
          in a team on courses.
        </p>
        <h2 className={css.title}>My tech skills</h2>
        <ul>
          <li>
            <p>HTML</p>
          </li>
          <li>
            <p>CSS</p>
          </li>
          <li>
            <p>SCSS</p>
          </li>
          <li>
            <p>JavaScript</p>
          </li>
          <li>
            <p>TypeScript</p>
          </li>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>React Router</p>
          </li>
          <li>
            <p>Redux</p>
          </li>
          <li>
            <p>Redux Tookit</p>
          </li>
          <li>
            <p>Next.js</p>
          </li>
          <li>
            <p>Node.js</p>
          </li>
          <li>
            <p>Express.js</p>
          </li>
          <li>
            <p>Mongo DB</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutComponent;
