﻿import * as React from "react";
import { Building } from "./Building";
import { IEquipmentModel, IBuildingModel, IRoomModel, IOrganizationModel } from "./OrganisationModel"

interface ITreeProps
{
    handle?: any;
    selectedItemCallback?: any
}

interface ITreeState
{
    data: any;
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
        this.getData();
    }

    public getData() : any
    {
        $.get("Data/GetData", (resultData) =>
        {
            this.setState
            ({
                data: resultData
            });
        }, "json");

    }

    passSelectedElement(room : IRoomModel)
    {
        this.props.selectedItemCallback(room)

    }

    contentCallback(equipment : IEquipmentModel[])
    {
        this.props.handle(equipment);
    }

    render() {
        var buildings : IBuildingModel[] = this.state.data ? this.state.data.buildings.map
            ((building: IBuildingModel) => <Building id={building.id}
                name={building.title} key={building.id} rooms={building.rooms} selectedItemCallback={(selectedRoom: IRoomModel) => this.passSelectedElement(selectedRoom)} icon="/Content/Images/blue-folder.ico"
                handleTree={(allEquipment: any) => this.contentCallback(allEquipment)} />) : null;
        return (
            <div>
                {buildings}
            </div>
        ); 
    }
}