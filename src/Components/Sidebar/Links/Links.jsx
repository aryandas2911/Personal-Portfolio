import React from "react";

function Links() {
  const links = [
    "Homepage",
    "Skills",
    "Portfolio1",
    "Portfolio2",
    "Portfolio3",
    "Contact",
  ];

  return (
    <div className="links">
      {links.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default Links;
