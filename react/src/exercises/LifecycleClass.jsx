import React from "react";

export class LifecycleClass extends React.Component {

    constructor() {
        super();
        this.state = {
            tick: 0
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                tick: this.state.tick + 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h3>Lifecycle (class)</h3>
                <p>You've been on this page for {this.state.tick} seconds</p>
            </div>
        );
    }
}
