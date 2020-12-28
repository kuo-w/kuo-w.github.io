import React from "react";
import { Dates } from "./SectionContentTimeRange";
import { Title } from "./SectionContentTitle";
import { Description } from "./SectionContentDescription";

export const SectionContent = ({ content }) => {
    return (
        <div className="SectionContent">
            <h3 className="SectionContent__Header">
                <Title title={content.title} link={content.link} />
                <Dates start={content.start} end={content.end} />
            </h3>
            <h4 className="SectionContent__Subtitle">{content.subtitle}</h4>
            <Description paragraphs={content.description} />
        </div>
    );
};
