import React from "react";
import "/src/styles/SectionContent.scss";

export const Dates = ({ start, end }) => {
    if (!start && !end) return null;

    let text = !end ? start : `${start} — ${end}`;
    return <span className="SectionContent__TimeRange">{text}</span>;
};
