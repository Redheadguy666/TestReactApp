import * as React from "react";
import { IEquipmentModel, IRoomModel } from "./OrganisationModel"

interface IRoomPropes
{
    id: number;
    title?: string;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean;
    icon?: string; 
    equipmentInRoom?: IEquipmentModel[];  
    buildingCallback?: any;
    selectedItemCallback: any
}

interface IRoomState
{
    isSelected?: boolean
}

export class Room extends React.Component<IRoomPropes, IRoomState>
{
    props: IRoomPropes = {} as any;
    state: IRoomState = {} as any;

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState
        ({
            isSelected: !this.state.isSelected
        });

        this.passSelectedRoom();
        this.countEquipmentInRoom();
    }

    passSelectedRoom()
    {
        var room: IRoomModel = 
        {
            roomId: this.props.id,
            name: this.props.title,
            equipment: this.props.equipmentInRoom
        };

        this.props.selectedItemCallback(room);
    }

    countEquipmentInRoom()
    {
        this.props.buildingCallback(this.props.equipmentInRoom);
    }

    render()
    {
        return (
            <div onClick={this.handleClick}>
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src={this.props.icon} style={{ width: "2%" }} /><a href="#">{this.props.title}</a>
                    </li>
                </ul>
            </div> 
        )
    }
}