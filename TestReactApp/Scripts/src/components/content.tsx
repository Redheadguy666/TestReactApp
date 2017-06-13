import * as React from "react";
import { EquipmentList } from "./EquipmentList";
import { Tree } from "./Tree";
import { Building, IBuildingProps } from "./Building";
import { OperationField } from "./OpearationField";
import { IEquipmentModel, IRoomModel } from "./OrganisationModel"

export interface IContentProps
{

}

export interface IContentState
{
    selectedItem?: any
    equipment?: IEquipmentModel[];
}

export class Content extends React.Component<IContentProps, IContentState>
{
    state: IContentState = {} as any;

    constructor(props : any) {
        super(props);
        this.getEquipment = this.getEquipment.bind(this);
        this.setSelectedItem = this.setSelectedItem.bind(this);
    }

    getEquipment(allEquipment? : IEquipmentModel[])
    {
        this.setState({
            equipment: allEquipment
        });
    }

    setSelectedItem(room : IRoomModel)
    {
        this.setState
        ({
            selectedItem: room
        });
    }

    render()
    {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-3">
                            <Tree handle={this.getEquipment} selectedItemCallback={this.setSelectedItem} />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                            <EquipmentList equipment={this.state.equipment} />
                            <OperationField selectedItem={this.state.selectedItem} currentRoomEquipment={this.state.equipment} contentCallback={this.getEquipment}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}