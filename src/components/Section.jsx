import React from "react";
import "/src/styles/Section.scss";
import { SectionContent } from "./SectionContent/SectionContent";

const Section = ({ data }) => {
    return (
        <div className="Section">
            <h3 className="Section__Title">{data.section}</h3>
            {data.content.map((content, i) => {
                return <SectionContent content={content} key={i} />;
            })}
        </div>
    );
};

export default Section;
