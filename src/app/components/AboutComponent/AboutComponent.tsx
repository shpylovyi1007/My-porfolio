import Image from "next/image";
import css from "./AboutComponent.module.scss";

const AboutComponent = () => {
  return (
    <div className={css.container}>
      <Image src="/images.jpg" alt="" width={500} height={500} />
      <p className={css.text}>
        I am a junior web developer with a well developed logic, ability and
        willingness to learn quickly. I have experience working as a Team Lead
        in a team on courses. Also, I have excellent knowledge and practical
        experience with HTML, CSS, SCSS, JavaScript, Typescript, React, Redux,
        Next.js and Node.js.
      </p>
    </div>
  );
};

export default AboutComponent;
