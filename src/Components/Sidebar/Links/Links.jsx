import { motion } from "framer-motion";

function Links({ open }) {
  const variants = {
    open: {
      transition: { staggerChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const links = ["Homepage", "Skills", "Projects", "Contact"];

  return (
    <motion.div
      className="links"
      variants={variants}
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      {links.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
