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
        this.setUpNewEquipment = this.setUpNewEquipment.bind(this);
    }

    addEquipment(newEquipment: any) {
        $.ajax
        ({
            type: "Post",
            url: "/Data/AddEquipment",
            data: newEquipment,
            dataType: "json",
            success: (result, status) => {
                alert("OK: " + status);
            }
        });
      
    }

    deleteEquipment(equipment: any)
    {
        $.ajax
        ({
            type: "Post",
            url: "/Data/DeleteEquipment",
            data: equipment.id,
            dataType: "json",
            success: (result, status) => {
                alert("OK: " + status);
            }
        });
    }

    updateEquipment(equipment: any) {
        $.ajax
        ({
            type: "Post",
            url: "/Data/UpdateEquipment",
            data: equipment,
            dataType: "json",
            success: (result, status) => {
                alert("OK: " + status);
            }
        });
    }

    setUpNewEquipment(operation : string)
    {
        switch (operation) {
            case "Add": this.addEquipment(equipment); break;
            case "Delete": this.deleteEquipment(equipment); break;
            case "Update": this.updateEquipment(equipment); break;
        }

        var equipmentRoomId = $("#addingNodeRoomId").val();
        var equipmentTitle = $("#addingNodeName").val();
        var equipmentNumber = $("#addingNodeNumber").val();

        var equipment = {
            roomId: equipmentRoomId,
            title: equipmentTitle,
            number: equipmentNumber
        }     

        
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
                                    <button type="submit" onClick={() => this.setUpNewEquipment("Add")} className="btn btn-info">OK</button>
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
                                <button type="submit" onClick={() => this.setUpNewEquipment("Delete")} className="btn btn-info">OK</button>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Изменить:</div>
                        <div className="panel-body">
                            <label htmlFor="updatingNodeName">Название:</label>
                            <input type="text" required className="form-control" id="updatingNodeName" />
                            <label htmlFor="updatingNodeNumber">Количество:</label>
                            <input type="numbers" required className="form-control" id="updatingNodeNumber" />
                            <button type="submit" onClick={() => this.setUpNewEquipment("Update")} className="btn btn-info">OK</button>
                        </div>
                    </div>
                </form>

                    </div>
              </div>
        );
    }
}