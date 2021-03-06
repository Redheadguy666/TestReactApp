﻿import * as React from "react";

interface IEquipmentElementProps
{
    id: number;
    title?: string;
    number: number;
}

export class EquipmentElement extends React.Component<IEquipmentElementProps, {}>
{
    render()
    {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td className="text-center">{this.props.title}</td>
                <td>{this.props.number}</td>
            </tr>                
        );
        
    }
}