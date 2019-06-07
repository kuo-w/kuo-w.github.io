import React from "react";
import "./Section.scss";

const Section = props => {
  const data = props.data;

  return (
    <>
      {data && (
        <div className="Section">
          <div className="Section-content">
            <h3 className="Section-title">{data.section}</h3>
            {data.blocks.map((b, i) => {
              return (
                <div className="Block" key={i}>
                  <h2 className="Block-header">
                    {!b.link ? (
                      <>{b.title}</>
                    ) : (
                      <a href={b.link} target="_blank" className="Block-title">
                        {b.title}
                      </a>
                    )}
                    {b.semesters && (
                      <span className="Block-semesters">
                        {b.semesters && b.semesters.join(" ")}
                      </span>
                    )}
                  </h2>
                  <h4 className="Block-subtitle">{b.subtitle}</h4>
                  {b.description &&
                    b.description.map((d, i) => {
                      return (
                        <p className="Block-description" key={i}>
                          {d}
                        </p>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Section;
