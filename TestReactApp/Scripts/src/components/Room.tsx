import * as React from "react";
import { RoomModel } from "./OrganisationModel"

interface IRoomPropes
{
    id: number;
    name?: string;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean;
    icon?: string; 
    equipmentInRoom?: RoomModel[];  
    buildingCallback?: any;
}

interface IRoomState
{

}

export class Room extends React.Component<IRoomPropes, IRoomState>
{
    countEquipmentInRoom()
    {
        this.props.buildingCallback(this.props.equipmentInRoom);
    }

    render()
    {
        return (
            <div onClick={() => this.countEquipmentInRoom()}>
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src={this.props.icon} style={{ width: "2%" }} /><a href="#">{this.props.name}</a>
                    </li>
                </ul>
            </div>
               
        )
    }
}