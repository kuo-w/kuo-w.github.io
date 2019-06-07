import React from "react";
import "./Contacts.scss";
import Resume from "../assets/WilliamKuo_Resume.pdf";

const Contacts = props => {
  const contacts = props.data;

  return (
    <div className="Contacts">
      <div className="Contacts-row">
        {contacts.map(({ title, link }) => {
          return (
            <a
              key={title}
              className="Contact"
              href={title == "Resume" ? Resume : link}
              target="_blank">
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
