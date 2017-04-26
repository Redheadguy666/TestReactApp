import * as React from "react";
import { TreeNode } from "./TreeNode";

export interface ITreeProps
{

}

export class Tree extends React.Component<ITreeProps, {}>
{
    render()
    {
        return (
            <div>
                <TreeNode id={1} name="Здание 2" icon="/Content/Images/blue-folder.ico" />
            </div>
        ); 
    }
}