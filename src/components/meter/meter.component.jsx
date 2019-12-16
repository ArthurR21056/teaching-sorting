import React from "react";
import "./meter.styles.scss";

const BIGONOTATION = [
    { o: "1" , value: "1" },
    { o: "n" , value: "n" },
    { o: "n^2" , value: "n^2" }
]

class Meter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 121
        }
    }
    getDescription = (bigo) => {
        switch(bigo){
            case "1":
                return "O(1) means that, no matter how much data, it will execute in constant time.";
            case "n":
                return "O(n) runtime grows directly in proportion to n.";
            case "n^2":
                return " O(N2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data";
            default:
                return "You fucked up";
        }
    }
    getColor = (angle) => {
        switch (true) {
            case angle >= 1 && angle <= 60:
                return "#db0b3f";
                break;
            case angle >= 61 && angle <= 120:
                return "#db920b";
                break;
            default:
                return "#2aba11";

        }
    }
    render() {
        const { angle } = this.props;
        const { title } = this.props;
        const { bigo } = this.props;
        const length = (angle / 180) * 156;
        let description = this.getDescription(bigo);
        let color = this.getColor(angle);

        
        return (
            <div className="meter">
                <div className="logo-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="logo" viewBox="0 0 135 65" enableBackground="new 0 0 135 65" data-start="89" data-end="23" id="gauge-id">
                        <g>
                            <circle fill="#ccc" cx="32.3" cy="48.3" r="1.5" />
                            <circle fill="#ccc" cx="39.7" cy="30.3" r="1.5" />
                            <circle fill="#ccc" cx="53.5" cy="16.5" r="1.5" />
                            <circle fill="#ccc" cx="71.6" cy="9" r="1.5" />
                            <circle fill="#ccc" cx="91.1" cy="9" r="1.5" />
                            <circle fill="#ccc" cx="109.1" cy="16.5" r="1.5" />
                            <circle fill="#ccc" cx="122.9" cy="30.3" r="1.5" />
                            <circle fill="#ccc" cx="130.3" cy="48.3" r="1.5" />
                            <circle fill="#aaa" cx="35.1" cy="38.9" r="2.5" />
                            <circle fill="#aaa" cx="46" cy="22.7" r="2.5" />
                            <circle fill="#aaa" cx="62.2" cy="11.9" r="2.5" />
                            <circle fill="#aaa" cx="81.5" cy="8" r="2.5" />
                            <circle fill="#aaa" cx="100.4" cy="11.9" r="2.5" />
                            <circle fill="#aaa" cx="117" cy="22.7" r="2.5" />
                            <circle fill="#aaa" cx="127.5" cy="38.9" r="2.5" />
                            <circle fill="#aaa" cx="131.3" cy="58.1" r="2.5" />
                            <g className="needle" transform={`rotate(` + angle + `, 81.3, 58.1)`}>
                                <line fill="none" stroke="#D95857" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="81.2" y1="58" x2="58" y2="58" />
                                <circle fill="#FFFFFF" stroke={color} strokeWidth="3" strokeMiterlimit="10" cx="81.3" cy="58.1" r="5" />
                            </g>
                            <path className="line2" fill="none" stroke="#bbb" strokeWidth="6" strokeLinecap="round" d="M131.3,58.1c0-27.6-22.4-50-50-50s-50,22.4-50,50" transform="scale(-1,1) translate(-162.7,0)" />
                            <path className="line" strokeDasharray={`${length}, 158`} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" d="M131.3,58.1c0-27.6-22.4-50-50-50s-50,22.4-50,50" transform="scale(-1,1) translate(-162.7,0)" />
                            <g className="fuel_end" fill="#FFFFFF" strokeMiterlimit="10" transform={`rotate(` + angle + `, 81.3, 58.1)`}>
                                <circle stroke={color} strokeWidth="3" cx="31" cy="58" r="6" />
                                <circle stroke="#231F20" cx="31" cy="58" r="2.5" />
                            </g>
                        </g>
                    </svg>
                    <h2 className="title">{title}</h2>
                    <span>{description}</span>
                </div>
            </div>
        );
    }
}
export default Meter;