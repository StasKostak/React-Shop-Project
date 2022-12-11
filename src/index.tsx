import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title: string
    text: string
}

const Title = (props: TitleProps) => {
    return (
        <h1>
            {props.text} {props.title}
        </h1>
    )
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                repellat. Ut harum quidem tempore sint, est error vero impedit
                beatae?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident tenetur aliquam deleniti fugiat.
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Title text="Hello" title="About" />
            <Title text="Hey" title="React.js" />
            <Title text="Hi" title="Bla-bla" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
