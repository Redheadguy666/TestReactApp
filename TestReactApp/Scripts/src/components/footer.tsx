import * as React from "react";

export interface IFooter
{
    text: string;
}

export class Footer extends React.Component<IFooter, {}>
{
    render()
    {
        return <div className="footer"><footer>Orel, 2017</footer></div>
    }
}