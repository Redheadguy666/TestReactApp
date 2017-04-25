import * as React from "react";
import { EquipmentElement } from "./equipmentElement";

interface IEquipmentListProps
{

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
                            <th className="text-center"><h4>Ид</h4></th>
                            <th className="text-center"><h4>Наименование</h4></th>
                            <th className="text-center"><h4>Количество</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <EquipmentElement id={0} name="Комната" number={6} />
                        <EquipmentElement id={1} name="Кровать" number={10} />
                        <EquipmentElement id={2} name="Диван" number={1} />
                        <EquipmentElement id={3} name="Котик" number={6} />
                        <EquipmentElement id={4} name="Андройд" number={2} />
                    </tbody>
                </table>
            </div>
        );
        
    }
}