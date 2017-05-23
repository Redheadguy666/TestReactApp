import * as React from "react";

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

    addEquipment(newEquipment: any) {
        $.ajax
        ({
            type: "Post",
            url: "/Data/AddEquipment",
            data: newEquipment,
            success: (statusCode) => {
                alert("OK: " + statusCode);
            }
        });
      
    }

    deleteEquipment(equipment: any)
    {
        $.ajax
        ({
            type: "Post",
            url: "/Data/DeleteEquipment",
            data: equipment,
            success: () => {
                alert("OK: ");
            }
        });
    }

    updateEquipment(equipment: any) {
        $.ajax
        ({
            type: "Post",
            url: "/Data/UpdateEquipment",
            data: equipment,
            success: () => {
                alert("OK: ");
            }
        });
    }

    chooseOperation(operation : string, equipment : any)
    {
        switch (operation) {
            case "Add": this.addEquipment(equipment); break;
            case "Delete": this.deleteEquipment(equipment); break;
            case "Update": this.updateEquipment(equipment); break;
        }
    }

    setUpEquipment(operation : string)
    {
        var equipment = {};

        switch (operation) {
            case "Add":
            {
                var newEquipmentRoomId = $("#addingNodeRoomId").val();
                var newEquipmentTitle = $("#addingNodeName").val();
                var newEquipmentNumber = $("#addingNodeNumber").val();

                equipment = {
                    roomId: newEquipmentRoomId,
                    title: newEquipmentTitle,
                    number: newEquipmentNumber
                }
            }
            break;

            case "Delete":
            {
                var deletingEquipmentId = $("#deletingNodeId").val();

                equipment = {
                    id: deletingEquipmentId,
                    title: "",
                    number: -1
                }
            }
            break;

            case "Update":
            {
                var updatingEquipmentId = $("#updatingNodeId").val();
                var updatingEquipmentTitle = $("#updatingNodeTitle").val();
                var updatingEquipmentNumber = $("#updatingNodeNumber").val();

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