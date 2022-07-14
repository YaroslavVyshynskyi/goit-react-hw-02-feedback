import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedBackOptions = (
    options = { good, neutral, bad },
    onLeaveFeedback = { handleGoodFb, handleNeutralFb, handleBadFb }) => {
    return (
        <div className={css.feedback_options}>
            <button type="button" className={css.options_btn}
                onClick={handleGoodFb}>{good}</button>
            <button type="button" className={css.options_btn}
                onClick={handleNeutralFb}>{neutral}</button>
            <button type="button" className={css.options_btn}
                onClick={handleBadFb}>{bad}</button>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default FeedBackOptions;