import React from 'react';
import './Timer.css';

const Timer = (props) => {

    return (
            <div className="ui one column center aligned page grid">
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">{props.counter}</div>
                        </div>
                        <div className="ui bottom attached button" onClick={() => props.incrementCounterOnClick(props.counter)}>
                            <i className="add icon" ></i>
                        </div>
                        <div className="ui bottom attached button" onClick={() => props.decrementCounterOnClick(props.counter)}>
                            <i className="minus icon"></i>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Timer;