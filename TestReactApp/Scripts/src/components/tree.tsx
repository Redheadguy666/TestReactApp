import * as React from "react";
import { TreeNode } from "./TreeNode";

interface ITreeProps
{
    nodes : Array<TreeNode>       
}

interface ITreeState
{
    data : any;
}

export class Tree extends React.Component<ITreeProps, ITreeState>
{
    state: ITreeState = {} as any;

    constructor(props : any)
    {
        super(props);
    }

    componentWillMount()
    {
        this.setState
        ({
            data: this.getData()
        });
    }

    getData() : any
    {
        var that = this;

        $.ajax
        ({
            type: "Get",
            data: "json",
            dataType: "json",
            url: "Data/GetData",
            success: function (resultData)
            {
                that.setState
                ({
                    data : resultData
                })
            },
            error: function ()
            {
                return "An error has occured!";
            }
            });
    }

    renderTree()
    {
        let children = 
    }

    render()
    {
        return (
            <div>
                <h3>{this.state.data}</h3>
                <TreeNode id={1} name="Здание 2" icon="/Content/Images/blue-folder.ico" />
            </div>
        ); 
    }
}