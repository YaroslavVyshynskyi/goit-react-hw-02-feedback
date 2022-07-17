import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ title, children }) => { 
    return (
        <>
            <p className={css.section_title}>{title}</p>
            {children}
        </>    
    );    
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;