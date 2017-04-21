import * as React from "react";

export interface ITreeNode
{
    id: number;
    name: string;
    children?: Array<TreeNode>;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean;
    
}

export class TreeNode extends React.Component<ITreeNode, {}>
{
    render()
    {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th><h3>Свойства Node:</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>{this.props.id}</td></tr>
                        <tr><td>{this.props.name}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}