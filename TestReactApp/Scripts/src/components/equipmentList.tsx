import * as React from "react";
import { EquipmentElement } from "./EquipmentElement";
import { EquipmentModel } from "./OrganisationModel"

interface IEquipmentListProps
{
    equipment: EquipmentModel[],
    addingEquipment?: EquipmentModel;
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
        var equipment: JSX.Element[] = equipmentProps ? equipmentProps.map
            ((equipment_: EquipmentModel) => <EquipmentElement key={equipment_.id} id={equipment_.id}
                title={equipment_.title} number={equipment_.number} />) : null;

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