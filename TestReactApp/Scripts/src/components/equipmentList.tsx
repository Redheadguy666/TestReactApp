import * as React from "react";
import { EquipmentElement } from "./EquipmentElement";

interface IEquipmentListProps
{
    equipment: any[];
}

interface IEquipmentListState
{
    
}

export class EquipmentList extends React.Component<IEquipmentListProps, {}>
{
    props: IEquipmentListProps = {} as any;
    state: IEquipmentListState = {} as any;

    constructor(props: any) {
        super(props);
    }

    render()
    {
        var equipmentProps;
        if (this.props.equipment !== undefined)
        {
            equipmentProps = Array.prototype.slice.call(this.props.equipment);
        }
        var equipment: any[] = equipmentProps ? equipmentProps.map
            ((equipment: any) => <EquipmentElement key={equipment.id} id={equipment.id}
            name={equipment.name} number={equipment.number} />) : null;

        return (

            <div className="container">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center"><h4>Ид</h4></th>
                            <th className="text-center"><h4>Наименование</h4></th>
                            <th className="text-center"><h4>Количество</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment}
                    </tbody>
                </table>
            </div>
        );
        
    }
}