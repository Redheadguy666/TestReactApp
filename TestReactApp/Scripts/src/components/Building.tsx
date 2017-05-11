import * as React from "react";
import { Room } from "./Room"

export interface IBuildingProps
{
    id: number;
    name?: string;
    rooms?: Array<any>;
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
    width: "5%"
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

        var selectedId = this.props.id;


        console.log(this.props.rooms);

        //this.props.handleTree(selectedId);      
    }

    render()
    {
        var rooms : any[] = this.props.rooms.map((room : any) => <Room id={room.roomId}
            name={room.name} key={room.roomId} icon="/Content/Images/blue-folder.ico" />);
        alert(rooms);
        return (
            <div >
                <ul className="list-group">
                    <li className="list-group-item" >
                        <div onClick={() => this.handleClick(this.props.id)}>
                            <img src={this.props.icon} style={style} /><a href="#">{this.props.name}</a>
                        </div>      
                        <ul className="list-group">             
                            {rooms}
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}