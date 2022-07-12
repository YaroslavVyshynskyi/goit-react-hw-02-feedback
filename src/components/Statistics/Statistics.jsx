import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = () => (
    <div className={css.statistics}>
        <p className={css.statistic_title}>Statistics</p>
        <ul className={css.statistics_list}>
            <li className={css.statistics_item}>
                <span className={css.item_text}>Good:</span>
                <span className={css.item_value}>{this.state.good}</span>
            </li>
            <li className={css.statistics_item}>
                <span className={css.item_text}>Neutral:</span>
                <span className={css.item_value}>{this.state.neutral}</span>
            </li>
            <li className={css.statistics_item}>
                <span className={css.item_text}>Bad:</span>
                <span className={css.item_value}>{this.state.bad}</span>
            </li>
            <li className={css.statistics_item}>
                <span className={css.item_text}>Total:</span>
                <span className={css.item_value}></span>
            </li>
            <li className={css.statistics_item}>
                <span className={css.item_text}>Positive feedback</span>
                <span className={css.item_value}></span>
            </li>
        </ul>
    </div>
);

export default Statistics;