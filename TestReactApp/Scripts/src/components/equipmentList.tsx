import * as React from "react";
import { EquipmentElement } from "./equipmentElement";

interface IEquipmentListProps
{
    id?: number;
    name?: string;
}

export class EquipmentList extends React.Component<IEquipmentListProps, {}>
{
    render()
    {
        return (
            <div className="container">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center"><h4>Название оборудования</h4></th>
                            <th className="text-center"><h4>Количество</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <EquipmentElement name="Комната" number={6} />
                        <EquipmentElement name="Кровать" number={10} />
                        <EquipmentElement name="Диван" number={1} />
                        <EquipmentElement name="Котик" number={6} />
                        <EquipmentElement name="Андройд" number={2} />
                    </tbody>
                </table>
            </div>
        );
        
    }
}