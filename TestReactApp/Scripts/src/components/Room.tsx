import * as React from "react";

interface IRoomPropes
{
    id: number;
    name?: string;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean;
    icon?: string;   
}

interface IRoomState
{

}

export class Room extends React.Component<IRoomPropes, IRoomState>
{
    render()
    {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <img src={this.props.icon} style={{width: "5%"}} /><a href="#">{this.props.name}</a>
                </li>
            </ul>
        )
    }
}