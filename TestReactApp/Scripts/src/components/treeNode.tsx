import * as React from "react";

export interface ITreeNodeProps
{
    id?: number;
    name: string;
    children?: Array<TreeNode>;
    numberOfChildren?: number;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean; 
    icon?: string;   
}

var style =
{
    width: "5%"
};

export class TreeNode extends React.Component<ITreeNodeProps, {}>
{
    render()
    {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <img src={this.props.icon} style={style} /><a href="#">{this.props.name}</a>
                </li>
            </ul>
        );
    }
}