import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.span>

        <motion.div
          className="socials"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {["facebook", "instagram", "youtube", "linkedin"].map((icon) => (
            <motion.a key={icon} href="" variants={iconVariants}>
              <img src={`./${icon}.png`} alt={icon} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
