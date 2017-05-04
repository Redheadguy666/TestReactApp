import * as React from "react";
import { EquipmentList } from "./EquipmentList";
import { Tree } from "./Tree";
import { Building, IBuildingProps } from "./Building";
import { OperationField } from "./OpearationField";

export interface IContentProps
{

}

export interface IContentState
{
    selectedNode: IBuildingProps
    model: any;
}

export class Content extends React.Component<IContentProps, IContentState>
{
    state: IContentState = {} as any;

    constructor(props : any) {
        super(props);
        this.setSelectedNode = this.setSelectedNode.bind(this);
    }

    setSelectedNode(treeNode: IBuildingProps)
    {
        this.setState({
            selectedNode : treeNode
        });
    }

    onButtonClick(event: any) {
        this.setSelectedNode({
            id: 1,
            name: "Some value"
        });
    }

    render()
    {
        return (

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-3">
                            <Tree handle={this.onButtonClick}/>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                            <EquipmentList />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}