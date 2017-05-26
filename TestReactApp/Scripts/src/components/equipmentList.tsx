import * as React from "react";
import { EquipmentElement } from "./EquipmentElement";
import { EquipmentModel } from "./OrganisationModel"

interface IEquipmentListProps
{
    equipment: EquipmentModel[],
    addingEquipment?: any;
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
        var equipmentProps = this.props.equipment;

        if (this.props.equipment !== undefined)
        {
            //equipmentProps = Array.prototype.slice.call(this.props.equipment);
            //equipmentProps = Object.keys(this.props.equipment).map((key : any) => key)
        }
        var equipment: EquipmentModel[] = equipmentProps ? equipmentProps.map
            ((equipment_: EquipmentModel) => <EquipmentElement key={equipment_.id} id={equipment_.id}
                title={equipment_.title} number={equipment_.number} />) : null;
        console.log(this.props.equipment);

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