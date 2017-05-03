import * as React from "react";
import { Room } from "./Room"

export interface IBuildingProps
{
    id: number;
    name?: string;
    rooms?: Array<any>;
    selected?: boolean;
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
    props: IBuildingProps = {} as any;

    constructor(props: any) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello(): any
    {
        alert("Hello!");
    }


    render()
    {
        var rooms : any = this.props.rooms.map((room : any) => <Room id={room.roomId}
            name={room.name} key={room.id} icon="/Content/Images/blue-folder.ico" />);
        return (
            <div >
                <ul className="list-group">
                    <li className="list-group-item">
                        <img src={this.props.icon} style={style} /><a onClick={this.sayHello()} href="#">{this.props.name}</a>
                        {rooms}
                    </li>

                </ul>
            </div>
        );
    }
}