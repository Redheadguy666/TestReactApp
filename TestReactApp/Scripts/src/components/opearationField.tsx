import * as React from "react";
import { EquipmentModel } from "./OrganisationModel"

interface IOperationFieldProps
{
    contentCallback?: any
}

interface IOperationFieldState
{

}

export class OperationField extends React.Component<IOperationFieldProps, {}>
{
    props: IOperationFieldProps = {} as any;
    state: IOperationFieldState = {} as any;

    constructor(props: any) {
        super(props);
        this.setUpEquipment = this.setUpEquipment.bind(this);
    }

    addEquipment(newEquipment: EquipmentModel)
    {
        $.ajax
        ({
            type: "Post",
            url: "/Data/AddEquipment",
            data: newEquipment,
            dataType: "json",
            success: (response) => {
                this.getEquipmentFromObject(response);
            }
        });   
    }

    getEquipmentFromObject(serverResponse: any)
    {
        var mas : EquipmentModel[] = [];

        serverResponse.buildings.forEach(function (building: any) {
            building.rooms.forEach(function (room: any) {
                room.equipment.forEach(function (eq: EquipmentModel) {
                    mas.push(eq);
                });
            });
        });

        this.props.contentCallback(mas);
    }

    deleteEquipment(equipment: EquipmentModel)
    {
        $.ajax
        ({
            type: "Post",
            url: "/Data/DeleteEquipment",
            data: equipment,
            dataType: "json",
            success: (response) => {
                this.getEquipmentFromObject(response);
            } 
        });
    }

    updateEquipment(equipment: EquipmentModel)
    {
        $.ajax
        ({
            type: "Post",
            url: "/Data/UpdateEquipment",
            data: equipment,
            dataType: "json",
            success: (response) => {
                this.getEquipmentFromObject(response);
            }
        });
    }

    passDataToContent()
    {
        this.props.contentCallback;
    }

    chooseOperation(operation : string, equipment : EquipmentModel)
    {
        switch (operation) {
            case "Add": this.addEquipment(equipment); break;
            case "Delete": this.deleteEquipment(equipment); break;
            case "Update": this.updateEquipment(equipment); break;
        }
    }

    setUpEquipment(operation : string)
    {
        var equipment : EquipmentModel;

        switch (operation) {
            case "Add":
            {
                var newEquipmentRoomId : number = $("#addingNodeRoomId").val();
                var newEquipmentTitle : string = $("#addingNodeName").val();
                var newEquipmentNumber : number = $("#addingNodeNumber").val();

                equipment = {
                    roomId: newEquipmentRoomId,
                    title: newEquipmentTitle,
                    number: newEquipmentNumber
                }
            }
            break;

            case "Delete":
            {
                var deletingEquipmentId : number = $("#deletingNodeId").val();

                equipment = {
                    id: deletingEquipmentId,
                    title: "",
                    number: -1
                }
            }
            break;

            case "Update":
            {
                var updatingEquipmentId : number = $("#updatingNodeId").val();
                var updatingEquipmentTitle : string = $("#updatingNodeTitle").val();
                var updatingEquipmentNumber : number = $("#updatingNodeNumber").val();

                equipment = {
                    id: updatingEquipmentId,
                    title: updatingEquipmentTitle,
                    number: updatingEquipmentNumber
                }
            }
            break;
        }
        this.chooseOperation(operation, equipment);
    }

    render()
    {
        return (
            <div>
                <div className="col-md-3 col-sm-3 col-xs-3 col-3">
                <form>
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">Добавить:</div>
                            <div className="panel-body">
                                    <label htmlFor="addingNodeRoomId">Ид комнаты:</label>
                                    <input type="number" required className="form-control" id="addingNodeRoomId" />
                                    <label htmlFor="addingNodeName">Название:</label>
                                    <input type="text" required className="form-control" id="addingNodeName" />
                                    <label htmlFor="addingNodeNumber">Количество:</label>
                                    <input type="number" required className="form-control" id="addingNodeNumber" />
                                    <button type="button" onClick={() => this.setUpEquipment("Add")} className="btn btn-info">OK</button>
                                </div>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Удалить:</div>
                            <div className="panel-body">
                                <label htmlFor="deletingNodeId">Ид:</label>
                                <input type="number" required className="form-control" id="deletingNodeId" />
                                <button type="button" onClick={() => this.setUpEquipment("Delete")} className="btn btn-info">OK</button>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Изменить:</div>
                        <div className="panel-body">
                            <label htmlFor="updatingNodeId">Название:</label>
                            <input type="number" required className="form-control" id="updatingNodeId" />
                            <label htmlFor="updatingNodeTitle">Название:</label>
                            <input type="text" required className="form-control" id="updatingNodeTitle" />
                            <label htmlFor="updatingNodeNumber">Количество:</label>
                            <input type="number" required className="form-control" id="updatingNodeNumber" />
                            <button type="button" onClick={() => this.setUpEquipment("Update")} className="btn btn-info">OK</button>
                        </div>
                    </div>
                </form>

                    </div>
              </div>
        );
    }
}