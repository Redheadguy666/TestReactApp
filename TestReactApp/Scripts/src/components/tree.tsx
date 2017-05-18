import * as React from "react";
import { Building } from "./Building";

interface ITreeProps
{
    handle?: any
}

interface ITreeState
{
    data: any;
    selectedItem: any
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
                });
            }
            });

    }

    contentCallback(equipment : any)
    {
        this.props.handle(equipment);
    }


    render() {
        var buildings = this.state.data ? this.state.data.buildings.map
            ((building: any) => <Building id={building.id}
                name={building.title} key={building.id} rooms={building.rooms} icon="/Content/Images/blue-folder.ico" handleTree={(allEquipment : any) => this.contentCallback(allEquipment)}/>) : null;
        return (
            <div>
                {buildings}
            </div>
        ); 
    }
}