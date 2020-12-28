import React from "react";
import "/src/styles/Contacts.scss";
import PropTypes from "prop-types";

const Contacts = (props) => {
    const contacts = props.data;

    return (
        <div className="Contacts">
            {contacts.map(({ title, link }) => {
                return (
                    <a
                        key={title}
                        className="Contacts__Item"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title}
                    </a>
                );
            })}
        </div>
    );
};

Contacts.propTypes = {
    data: PropTypes.array,
};

export default Contacts;
