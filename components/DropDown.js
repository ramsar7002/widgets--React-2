import React, {useEffect, useState, useRef} from 'react'

const DropDown = ({options, selected, onSelectedChange})=>{
    const renderedOptions = options.map(option=>{
        return (
        <div key={option.value} className="item"
        onClick={()=> onSelectedChange(option)}
        >
            {option.label}
        </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label className ="label">Select a Color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected?selected.label: 'Choose Color'}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown;