import * as React from "react";
import { TreeNode } from "./treeNode";

export interface ITreeProps
{

}

export class Tree extends React.Component<ITreeProps, {}>
{
    render()
    {
        return (
            <div>
                <TreeNode name="Здание 2" icon="/Content/Images/blue-folder.ico"/>
                <TreeNode name="Здание 3" icon="/Content/Images/blue-folder.ico"/>
                <TreeNode name="Здание 4" icon="/Content/Images/blue-folder.ico"/>
                <TreeNode name="Здание 5" icon="/Content/Images/blue-folder.ico"/>
            </div>
        ); 
    }
}