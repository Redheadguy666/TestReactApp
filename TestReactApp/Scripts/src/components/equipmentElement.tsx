import * as React from "react";

interface IEquipmentElementProps
{
    id?: number;
    name?: string;
    number: number;
}

export class EquipmentElement extends React.Component<IEquipmentElementProps, {}>
{
    render()
    {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.number}</td>
            </tr>                
        );
        
    }
}