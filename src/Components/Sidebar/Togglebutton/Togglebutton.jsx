import { motion } from "framer-motion";

function Togglebutton({ open, setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          d="M 2 4.5 H 21"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 4.5 H 21", rotate: 0 },
            open: { d: "M 2 11.5 H 21", rotate: 45 },
          }}
          animate={open ? "open" : "closed"}
          initial={false}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          transform="translate(0, 0)"
          transformOrigin="center"
        />

        <motion.path
          d="M 2 11.5 H 21"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate={open ? "open" : "closed"}
          initial={false}
          transition={{ duration: 0.2 }}
        />

        <motion.path
          d="M 2 18.5 H 21"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 18.5 H 21", rotate: 0 },
            open: { d: "M 2 11.5 H 21", rotate: -45 },
          }}
          animate={open ? "open" : "closed"}
          initial={false}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          transform="translate(0, 0)"
          transformOrigin="center"
        />
      </svg>
    </button>
  );
}

export default Togglebutton;
