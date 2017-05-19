import * as React from "react";

interface IOperationFieldProps
{
    contentCallback: any
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
    }

    passEquipmentToContent()
    {
        var addingEquipmentRoomId = $("#addingNodeRoomId").val();
        var addingEquipmentTitle = $("#addingNodeName").val();
        var addingEquipmentNumber = $("#addingNodeNumber").val();

        var addingEquipment = {
            roomId: addingEquipmentRoomId,
            title: addingEquipmentTitle,
            number: addingEquipmentNumber
        }

        this.props.contentCallback(addingEquipment);
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
                                    <button type="submit" onClick={this.passEquipmentToContent} className="btn btn-info">OK</button>
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
                                <button type="submit" /*onClick={this.removeEquipment}*/ className="btn btn-info">OK</button>
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
                            <button type="submit" /*onClick={this.editEquipment}*/ className="btn btn-info">OK</button>
                        </div>
                    </div>
                </form>

                    </div>
              </div>
        );
    }
}