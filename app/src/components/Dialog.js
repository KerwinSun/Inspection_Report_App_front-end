import React, {Component} from "react";

class Dialog extends Component {
    render() {
        return (
            <div>
                <button>x</button>

                <div>{this.props.children} </div>
            </div>

        );
    }

}

export default Dialog;