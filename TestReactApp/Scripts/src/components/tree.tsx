import * as React from "react";
import { TreeNode } from "./TreeNode";

export interface ITreeProps
{
    //source:
     
}

export class Tree extends React.Component<ITreeProps, {}>
{
    getData()
    {
       let data = $.ajax
       ({
            type: "Get",
            url: "Data/GetData",
            data: "json"
       });

       return data; 
    }

    render()
    {
        return (
            <div>
                <TreeNode id={1} name="Здание 2" icon="/Content/Images/blue-folder.ico" {this.getData()} />
            </div>
        ); 
    }
}