import * as React from "react";

interface IProps {
    name: string,
    age: number
}

interface IState {}

export default class HelloPerson extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <h1>Hello {this.props.name} your age is {this.props.age}</h1>
        )
    }
}