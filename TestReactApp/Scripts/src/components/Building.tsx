import * as React from "react";
import { Room } from "./Room"

export interface IBuildingProps
{
    id: number;
    name?: string;
    rooms?: Array<any>;
    isActive?: boolean;
    isCollapsed?: boolean;
    isFolder?: boolean; 
    icon?: string;   
}

var style =
{
    width: "5%"
};

export class Building extends React.Component<IBuildingProps, {}>
{
    render()
    {
        var rooms : any = this.props.rooms.map((room : any) => <Room id={room.roomId}
            name={room.name} key={room.id} icon="/Content/Images/blue-folder.ico" />);
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src={this.props.icon} style={style} /><a href="#">{this.props.name}</a>
                    </li>
                    {rooms}
                </ul>
            </div>
        );
    }
}