import * as React from 'react'

interface IProps {}

interface IState {
    counter: number,
}

export default class Counter extends React.Component<IProps, IState> {
    constructor(props: IState) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    addCount = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    removeCount = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>The count isL: {this.state.counter}</h1>
                <button onClick={this.addCount}>+</button>
                <button onClick={this.removeCount}>-</button>
            </div>
        )
    }
}