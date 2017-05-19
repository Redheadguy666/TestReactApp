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
    equipment?: any;
    addingEquipment?: any;
}

export class Content extends React.Component<IContentProps, IContentState>
{
    state: IContentState = {} as any;

    constructor(props : any) {
        super(props);
    }

    getEquipment(allEquipment : any)
    {
        this.setState({
            equipment: allEquipment
        });
    }


    render()
    {
        return (

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-3">
                            <Tree handle={(allEquipment: any) => this.getEquipment(allEquipment)} />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                            <EquipmentList equipment={this.state.equipment} />
                            <OperationField contentCallback=/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}