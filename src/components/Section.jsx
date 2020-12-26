import React from "react";
import "./Section.scss";
import PropTypes from "prop-types";

const Section = (props) => {
  const data = props.data;

  const Title = (b) => {
    if (!b.link) {
      return <>{b.title}</>;
    }

    return (
      <a
        href={b.link}
        target="_blank"
        rel="noopener noreferrer"
        className="Block-title"
      >
        {b.title}
      </a>
    );
  };

  const Dates = (b) => {
    if (!b.start && !b.end) {
      return;
    }

    let text = null;

    if (!b.end) {
      text = <>b.start</>;
    } else {
      text = (
        <>
          {b.start} &#8211; {b.end}
        </>
      );
    }

    return <span className="Block-dates">{text}</span>;
  };

  return (
    <>
      {data && (
        <div
          className="Section"
          style={data.width ? { minWidth: data.width } : {}}
        >
          <div className="Section-content">
            <h2 className="Section-title">{data.section}</h2>
            {data.blocks.map((b, i) => {
              return (
                <div className="Block" key={i}>
                  <h3 className="Block-header">
                    {Title(b)}
                    {Dates(b)}
                  </h3>
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

Section.propTypes = {
  data: PropTypes.object,
};

export default Section;
