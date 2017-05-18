﻿import * as React from "react";
import { Room } from "./Room"

export interface IBuildingProps
{
    id: number;
    name?: string;
    rooms?: any[];
    isCollapsed?: boolean;
    isFolder?: boolean; 
    icon?: string;   
    handleTree?: any;
}

interface IBuildingState
{
    isSelected?: boolean;
}

var style =
{
    width: "2%"
};

export class Building extends React.Component<IBuildingProps, {}>
{
    props: IBuildingProps = {} as any;
    state: IBuildingState = {} as any;

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount()
    {
        this.setState
        ({
            isSelected: false
        })
    }

    handleClick(buildingId : number): any
    {
        this.setState
        ({
            isSelected: true
        });

        this.countEquipmentInBuilding(); 
    }

    countEquipmentInBuilding()
    {
        var allEquipment: any = {};
        var equipmentMassive: any = [];

        Array.prototype.forEach.call(this.props.rooms, (room: any) => {
            Array.prototype.forEach.call(room.equipment, (equipment: any) => {
                var eq = {
                    id: equipment.id,
                    title: equipment.title,
                    number: equipment.number
                };
                equipmentMassive.push(eq);
            });
        });

        this.props.handleTree(equipmentMassive);
    }

    render()
    {
        var rooms : any[] = this.props.rooms.map((room : any) => <Room id={room.roomId}
            name={room.name} key={room.roomId} equipmentInRoom={room.equipment} buildingCallback={this.props.handleTree} icon="/Content/Images/blue-folder.ico" />);
        return (
            <div >
                <ul className="list-group">
                    <li className="list-group-item" >
                        <div onClick={() => this.handleClick(this.props.id)}>
                            <img src={this.props.icon} style={style} /><a href="#">{this.props.name}</a>
                        </div>      
                         {rooms}
                    </li>
                </ul>
            </div>
        );
    }
}