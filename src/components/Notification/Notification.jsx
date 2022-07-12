import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
    alert(
        message
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;