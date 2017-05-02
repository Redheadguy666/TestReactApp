import * as React from "react";
import { TreeNode } from "./TreeNode";

interface ITreeProps
{

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
        this.getData = this.getData.bind(this);
    }

    componentWillMount()
    {
        this.getData()
    }

    getData() : any
    {
        $.ajax
        ({
            type: "Get",
            data: "json",
            dataType: "json",
            url: "Data/GetData",
            success: (resultData) =>
            {
                this.setState
                ({
                    data : resultData
                })
            }
            });
    }

    render()
    {
        var buildings = this.state.data ? this.state.data.buildings.map((building: any) => <TreeNode id={building.id}
            name={building.title} key={building.id} icon="/Content/Images/blue-folder.ico" c/>) : null;
        return (
            <div>
                {buildings}
            </div>
        ); 
    }
}