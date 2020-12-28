import React from "react";
import "/src/styles/SectionContent.scss";

export const Description = ({ paragraphs }) => {
    if (!paragraphs) return null;

    return (
        <>
            {paragraphs.map((text, i) => {
                return (
                    <p className="SectionContent__Paragraph" key={i}>
                        {text}
                    </p>
                );
            })}
        </>
    );
};
