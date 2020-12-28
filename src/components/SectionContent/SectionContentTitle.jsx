import React from "react";
import "/src/styles/SectionContent.scss";

export const Title = ({ link, title }) => {
    if (!link) return <span className="SectionContent__Title">{title}</span>;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="SectionContent__Title"
        >
            {title}
        </a>
    );
};
