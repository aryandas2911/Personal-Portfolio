import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "MediVault",
    img: "/MediVault.png",
    desc: "A secure digital wallet for managing and sharing medical records. Built with React, Supabase, and Tailwind CSS using Bolt AI — designed for patients to control, update, and share health data with ease.",
    link: "https://github.com/aryandas2911/MediVault",
  },
  {
    id: 2,
    title: "RePlate",
    img: "/RePlate.png",
    desc: "Developed at BVP-HEX 2024, RePlate connects restaurants with charities to reduce food waste. Using JS, HTML, and CSS, the platform provides real-time data to optimize food donations and pick-ups. This hackathon project taught me valuable skills in development, teamwork, and creating impactful solutions.",
    link: "https://github.com/aryandas2911/RePlate",
  },
  {
    id: 3,
    title: "SwasthSetu",
    img: "/SwasthSetu.png",
    desc: "Developed at HackWie 3.0, SwasthSetu is a healthcare platform using a crowdsourced volunteering model to connect underserved communities with essential medical services, built with HTML, CSS and JavaScript.",
    link: "https://github.com/aryandas2911/SwasthSetu",
  },
  {
    id: 4,
    title: "GradientFlow",
    img: "/GradientFlow.png",
    desc: "A sleek React-based gradient generator that lets you preview, copy, and apply beautiful multi-color linear gradients with a minimal UI.",
    link: "https://github.com/aryandas2911/GradientFlow",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
