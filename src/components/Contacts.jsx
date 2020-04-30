import React from "react";
import "./Contacts.scss";
import PropTypes from "prop-types";

const Contacts = (props) => {
  const contacts = props.data;

  return (
    <div className="Contacts">
      <div className="Contacts-row">
        {contacts.map(({ title, link }) => {
          return (
            <a
              key={title}
              className="Contact"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

Contacts.propTypes = {
  data: PropTypes.array,
};

export default Contacts;
