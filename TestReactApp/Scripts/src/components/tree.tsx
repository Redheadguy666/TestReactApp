import * as React from "react";
import { TreeNode } from "./treeNode";

export interface ITree
{

}

export class Tree extends React.Component<ITree, {}>
{
    render()
    {
        return (
            <TreeNode name="Здание 1" />
        ); 
    }
}