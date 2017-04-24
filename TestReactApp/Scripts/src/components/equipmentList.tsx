import * as React from "react";

interface IEquipmentList
{
    id?: number;
    name?: string;
}

export class EquipmentList extends React.Component<IEquipmentList, {}>
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
                        <tr><td>gdfs</td></tr>
                    </tbody>
                </table>
            </div>
        );
        
    }
}