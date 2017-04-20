import * as React from "react";

export interface IHeader
{
    text: string
}

export class Header extends React.Component<IHeader, {}>
{
    render()
    {
        return <div className="header"><h1>Welcome to the React.js!</h1></div>
    }
}