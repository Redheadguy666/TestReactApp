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
}

export class Content extends React.Component<IContentProps, IContentState>
{
    state: IContentState = {} as any;

    constructor(props : any) {
        super(props);
        this.setSelectedNode = this.setSelectedNode.bind(this);
    }

    componentDidMount() {
        this.setState({
            model: {
                treeItems: [{
                    id: 1,
                    name: "Здание 1",
                    treeItems: [{
                        id: 2,
                        name: "Комната 1",
                        treeItems: [],
                        equipment: [{
                            name: "Свитч",
                            quantity: 5
                        }]
                    }],
                    equipment: []
                }]
            }
        });
    }

    setSelectedNode(treeNode: ITreeNodeProps)
    {
        this.setState({
            selectedNode : treeNode
        }, () => console.log(this.state.model));
    }

    onButtonClick(event: any) {
        this.setSelectedNode({
            id: 1,
            name: "Some value"
        });
    }

    render()
    {
        console.log(this.state);
        return (

            //<div>
            //    {this.state.selectedNode.name}
            //</div>

            //<div>
            //    <button onClick={this.onButtonClick.bind(this)}>Click me</button>

            //</div>

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-3">
                            <Tree />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                            <EquipmentList />
                        </div>
                    </div>
                </div>
                <OperationField />
            </div>
        );
    }
}