import React from "react"
import PropTypes from 'prop-types'

import "./Burger.css"

const BreadTop = ({Prop} ) => {
    console.log(Prop)
    return (
        <div className="bread-top">
        {/* Beans on the top bread */}
        <div className="bean bean1"></div>
        <div className="bean bean2"></div>
        <div className="bean bean3"></div>
        <div className="bean bean7"></div>
        <div className="bean bean8"></div>
        <div className="bean bean9"></div>
        </div>
       )
}

BreadTop.propTypes = {
    Prop: PropTypes.string.isRequired
}

BreadTop.defaultProps = {
    Prop: "BreadTop"
}

export default BreadTop
