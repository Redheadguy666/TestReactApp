import * as React from "react";
import { Room } from "./Room"
import { IRoomModel, IEquipmentModel } from "./OrganisationModel"

export interface IBuildingProps
{
    id: number;
    name?: string;
    rooms?: IRoomModel[];
    isCollapsed?: boolean;
    isFolder?: boolean; 
    icon?: string;   
    handleTree?: any;
    selectedItemCallback: (roomModel:IRoomModel) => void
}

interface IBuildingState
{
    isSelected?: boolean;
}

export class Building extends React.Component<IBuildingProps, {}>
{
    props: IBuildingProps = {} as any;
    state: IBuildingState = {} as any;

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    passSelectedRoom(room : IRoomModel)
    {
        this.props.selectedItemCallback(room);
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
            isSelected: !this.state.isSelected
        });

        this.countEquipmentInBuilding(); 
    }

    countEquipmentInBuilding()
    {
        var allEquipment: IEquipmentModel;
        var equipmentMassive: IEquipmentModel[] = [];

        Array.prototype.forEach.call(this.props.rooms, (room: IRoomModel) => {
            Array.prototype.forEach.call(room.equipment, (equipment: IEquipmentModel) => {
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
        var rooms: JSX.Element[] = this.props.rooms.map((room: IRoomModel) =>
            <Room id={room.roomId} title={room.name} key={room.roomId} equipmentInRoom={room.equipment} buildingCallback={this.props.handleTree}
            selectedItemCallback={(selectedRoom: IRoomModel) => this.passSelectedRoom(selectedRoom)} icon="/Content/Images/blue-folder.ico" />);


        return (
            <div>
                <ul className="list-group">
                    <li>
                        <div onClick={() => this.handleClick(this.props.id)} >
                            <img src={this.props.icon} style={{ width: "2%" }} /><a href="#">{this.props.name}</a>
                        </div>      
                         {rooms}
                    </li>
                </ul>
                <br></br>
            </div>
        );
    }
}