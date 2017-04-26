import * as React from "react";
import { EquipmentList } from "./EquipmentList";
import { Tree } from "./Tree";
import { TreeNode, ITreeNodeProps } from "./TreeNode";
import { OperationField } from "./OpearationField";

export interface IContentProps
{

}

export interface IContentState
{
    selectedNode: ITreeNodeProps
    model: any;
    intValue: number;
}

export class Content extends React.Component<IContentProps, IContentState>
{
    constructor(props : any) {
        super(props);
        this.setSelectedNode = this.setSelectedNode.bind(this);

        //this.setState({
        //    model: {
        //        treeItems: [{
        //            id: 1,
        //            name: "Здание 1",
        //            treeItems: [{
        //                id: 1,
        //                name: "Комната 1",
        //                treeItems: [],
        //                equipment: [{
        //                    name: "Свитч",
        //                    quantity: 5
        //                }]
        //            }],
        //            equipment: []
        //        }]
        //    }
        //});

        this.setState({
            intValue: -1
        });
    }

    setSelectedNode(treeNode: ITreeNodeProps)
    {
        this.setState({
            selectedNode : treeNode
        }, () => console.log(this.state.model));
    }

    setIntegerValue(intV: number)
    {
        this.setState({
            intValue: intV
        }, () => console.log(this.state.intValue));
    }

    //onButtonClick(event: any) {
    //    this.setIntegerValue({
    //        intValue : 666
    //    });
    //}


    //onButtonClick(event: any) {
    //    this.setSelectedNode({
    //        id: 1
    //    });
    //}

    render()
    {
        return (
            <div>{this.state.intValue}</div>
            //<div>
            //    {this.state.model}
            //</div>



            //<div>
            //    <div classname="container-fluid">
            //        <div classname="row">
            //            <div classname="col-md-6 col-sm-6 col-xs-6 col-3">
            //                <Tree />
            //            </div>
            //            <div classname="col-md-6 col-sm-6 col-xs-6 col-4">
            //                <EquipmentList />
            //            </div>
            //        </div>
            //    </div>
            //    <OperationField />
            //</div>
        );
    }
}