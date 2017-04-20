import * as React from "react";

export interface IContent
{
    text: string
}

export class Content extends React.Component<IContent, {}>
{
    render()
    {
        return <div className="content"><p>It's a popular library to build web applications...</p></div>
    }
}