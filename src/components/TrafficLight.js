import React, {Component} from 'react';
import './TrafficLight.css';
import classnames from 'classnames';
const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component{
    render(){
        let { color } = this.props;
        let redLClassName = classnames('bulb', 'red', {
            'active': color === RED
        });
        let yellowLClassName = classnames('bulb', 'yellow', {
            'active': color === YELLOW
        });
        let greenLClassName = classnames('bulb', 'green', {
            'active': color === GREEN
        });

        return(
            <div className="TrafficLight">
                <div className={redLClassName}></div>
                <div className={yellowLClassName}></div>
                <div className={greenLClassName}></div>
            </div>
        )
    }
}

export default TrafficLight;