import * as React from "react";

export interface ITreeNode
{
    id?: number;
    name: string;
    children?: Array<TreeNode>;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean; 
    icon?: HTMLImageElement;   
}

export class TreeNode extends React.Component<ITreeNode, {}>
{
    render()
    {
        return (
            <div className="container">
                {this.props.name}
            </div>
        );
    }
}