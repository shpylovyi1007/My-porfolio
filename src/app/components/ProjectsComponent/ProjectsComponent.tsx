import Image from "next/image";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import css from "./ProjectsComponent.module.scss";

const ProjectsComponent = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>My Projects</h1>
      <ul>
        <li className={css.item}>
          <div>
            <h2>Book contacts</h2>
            <p className={css.text}>
              This is a web application that allows users to add new contacts,
              view existing ones, edit them, delete them, and search for
              contacts using the built-in search function.
              <b /> Technologies used: React, Redux, Redux Toolkit.
            </p>
          </div>

          <div className={css.project}>
            <Image
              className={css.img}
              src="/book-contacts.png"
              priority
              alt=""
              width={600}
              height={400}
            />
            <div className={css.containerLink}>
              <a
                className={css.link}
                href="https://github.com/shpylovyi1007/goit-react-hw-08"
                target="_blank"
              >
                <AiOutlineCode className={css.icon} />
              </a>
              <a
                className={css.link}
                href="https://goit-react-hw-08-brown-sigma.vercel.app/"
                target="_blank"
              >
                <AiOutlineLink className={css.icon} />
              </a>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <div>
            <h2>Search your image</h2>
            <p className={css.text}>
              It is a web application that allows you to search for any images
              by keywords. It is made using pagination and a modal window in
              which users can view a large version of the images.
              <b /> Technologies used: React, Formik, Axios.
            </p>
          </div>

          <div className={css.project}>
            <Image
              className={css.img}
              src="/search-img.png"
              alt=""
              width={600}
              height={400}
            />
            <div className={css.containerLink}>
              <a
                className={css.link}
                href="https://github.com/shpylovyi1007/goit-react-hw-04"
                target="_blank"
              >
                <AiOutlineCode className={css.icon} />
              </a>
              <a
                className={css.link}
                href="https://goit-react-hw-04-iota-three.vercel.app/"
                target="_blank"
              >
                <AiOutlineLink className={css.icon} />
              </a>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <div>
            <h2>Green Harvest</h2>
            <p className={css.text}>
              Team project, where we gained extensive experience in teamwork and
              conflict resolution during the merger of branches. Role in the
              team: Team Lead. The project offers the consumer a list of the
              most popular organic vegetables and a description of the benefits
              and advantages of using them.
              <b /> Technologies used: HTML, CSS, SCSS, JavaScript.
            </p>
          </div>

          <div className={css.project}>
            <Image
              className={css.img}
              src="/green-harvest.png"
              alt=""
              width={600}
              height={400}
            />
            <div className={css.containerLink}>
              <a
                className={css.link}
                href="https://github.com/shpylovyi1007/team-project-Office_Olympians"
                target="_blank"
              >
                <AiOutlineCode className={css.icon} />
              </a>
              <a
                className={css.link}
                href="https://shpylovyi1007.github.io/team-project-Office_Olympians/"
                target="_blank"
              >
                <AiOutlineLink className={css.icon} />
              </a>
            </div>
          </div>
        </li>
        <li className={css.item}>
          <div>
            <h2>Discover Your Dream Property</h2>
            <p className={css.text}>
              An individual multi-page project with adaptation for mobile
              devices, which presents to the consumer a company that helps to
              choose the real estate of your dreams.
              <b /> Technologies used: HTML, CSS, JavaScript.
            </p>
          </div>

          <div className={css.project}>
            <Image
              className={css.img}
              src="/discover.png"
              alt=""
              width={600}
              height={400}
            />
            <div className={css.containerLink}>
              <a
                className={css.link}
                href="https://github.com/shpylovyi1007/Discover-Your-Dream-Property"
                target="_blank"
              >
                <AiOutlineCode className={css.icon} />
              </a>
              <a
                className={css.link}
                href="https://shpylovyi1007.github.io/Discover-Your-Dream-Property/"
                target="_blank"
              >
                <AiOutlineLink className={css.icon} />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsComponent;
