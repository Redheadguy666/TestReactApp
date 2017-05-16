import * as React from "react";
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
                    name: equipment.title,
                    number: equipment.number
                };
                equipmentMassive.push(eq);
            });
        });

        this.props.handleTree(equipmentMassive);
    }

    countEquipmentInRoom()
    {
        var roomEquipment: any = [];

        var room = this.props.rooms[this.props.id];
        alert(this.props.id);
        console.log(room);

        Array.prototype.forEach.call(room.equipment, (equipment: any) => {
            var eq = {
                name: equipment.title,
                number: equipment.number
            };
            roomEquipment.push(eq);
        });

    }

    render()
    {
        var rooms : any[] = this.props.rooms.map((room : any) => <Room id={room.roomId}
            name={room.name} key={room.roomId} icon="/Content/Images/blue-folder.ico" />);
        return (
            <div >
                <ul className="list-group">
                    <li className="list-group-item" >
                        <div onClick={() => this.handleClick(this.props.id)}>
                            <img src={this.props.icon} style={style} /><a href="#">{this.props.name}</a>
                        </div>      
                        <div onClick={() => this.countEquipmentInRoom()}>
                            <ul className="list-group">             
                                {rooms}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}