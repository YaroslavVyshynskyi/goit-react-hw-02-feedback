import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";
// import Statistics from "../Statistics/Statistics"
import FeedBackOptions from "../FeedbackOptions/FeedbackOptions";

class Section extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    handleGoodFb = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    };

    handleNeutralFb = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    };

    handleBadFb = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    };

    render() {
        return (
            <section className={css.section}>
                <p className={css.section_title}>Title</p>
                {/* <FeedBackOptions /> */}
                <div className={css.feedback_options}>
                    <button type="button" className={css.options_btn} onClick={ this.handleGoodFb }>Good</button>
                    <button type="button" className={css.options_btn} onClick={ this.handleNeutralFb }>Neutral</button>
                    <button type="button" className={css.options_btn} onClick={ this.handleBadFb }>Bad</button>
                </div>

                {/* <Statistics /> */}
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
            </section>
        );
    };
};

export default Section;