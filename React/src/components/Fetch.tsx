import * as React from 'react'

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IProps {}

interface IState {
    posts: IPost[]
}

export default class Fetch extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentWillMount(): void {
        this.fetchPosts();
    }

    fetchPosts(): void {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data: IPost[]) => this.setState({ posts: data }))
            .catch((error) => console.log(error))
    }

    render(): React.ReactNode {
        return (
            <table>
                <tr>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
                {
                    this.state.posts.map(post => (
                        <tr>
                            <td>{ post.userId }</td>
                            <td>{ post.id }</td>
                            <td>{ post.title }</td>
                            <td>{ post.body }</td>
                        </tr>
                    ))
                }
            </table>
        )
    }
}