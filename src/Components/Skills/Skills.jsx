import "./Skills.scss";
import { motion, transform } from "framer-motion";

function Skills() {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div className="skills">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <p>
          I craft seamless digital experiences <br />
          through code and design.
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="title">
          <img src="/code.jpeg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Crafting</motion.b>{" "}
            seamless
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>experiences</motion.b>{" "}
            with code, AI.
          </h1>
          <button>
            <a href="#Projects">PROJECTS</a>
          </button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            I build responsive user interfaces using React.js, HTML, SCSS, CSS,
            JS and Bootstrap, with pixel-perfect UI with smooth animations.
          </p>
          <button>
            <a href="https://github.com/aryandas2911">Go</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend & APIs</h2>
          <p>
            I develop scalable backends with MySQL and PostgreSQL. I integrate
            APIs efficiently, ensuring fast and secure data transactions.
          </p>
          <button>
            <a href="https://github.com/aryandas2911">Go</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI & ML</h2>
          <p>
            I explore AI tools and machine learning models to build smart web
            experiences, proficient in Python and libraries.
          </p>
          <button>
            <a href="https://github.com/aryandas2911">Go</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Motion Design</h2>
          <p>
            I use Framer Motion to design clean, intuitive user experiences with
            interactive animations that bring interfaces to life.
          </p>
          <button>
            <a href="https://github.com/aryandas2911">Go</a>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
