import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

const FeedBackOptions = ({options, onLeaveFeedback}) => (
    <div className={css.feedback_options}>
        <button type="button" className={css.options_btn} onClick={this.handleGoodFb}>Good</button>
        <button type="button" className={css.options_btn} onClick={this.handleNeutralFb}>Neutral</button>
        <button type="button" className={css.options_btn} onClick={this.handleBadFb}>Bad</button>
    </div>
);

export default FeedBackOptions;