import * as React from "react";
import { EquipmentList } from "./EquipmentList";
import { Tree } from "./Tree";
import { Building, IBuildingProps } from "./Building";
import { OperationField } from "./OpearationField";
import { EquipmentModel } from "./OrganisationModel"

export interface IContentProps
{

}

export interface IContentState
{
    selectedNode: IBuildingProps
    equipment?: EquipmentModel;
    addingEquipment?: EquipmentModel;
}

export class Content extends React.Component<IContentProps, IContentState>
{
    state: IContentState = {} as any;

    constructor(props : any) {
        super(props);
        this.getEquipment = this.getEquipment.bind(this);
    }

    getEquipment(allEquipment? : EquipmentModel)
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
                            <Tree handle={this.getEquipment} />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                            <EquipmentList equipment={this.state.equipment} />
                            <OperationField contentCallback={this.getEquipment}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}