import * as React from "react";
import { EquipmentList } from "./equipmentList";
import { Tree } from "./tree";
import { OperationField } from "./opearationField";

export interface IContentProps
{

}

export class Content extends React.Component<IContentProps, {}>
{
    render()
    {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6 col-3">
                            <Tree />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                            <EquipmentList />
                        </div>
                    </div>
                </div>
                <OperationField />
            </div>

        );
    }
}