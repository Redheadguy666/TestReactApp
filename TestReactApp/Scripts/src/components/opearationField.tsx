import * as React from "react";
import { EquipmentModel } from "./OrganisationModel"

interface IOperationFieldProps
{
    contentCallback?: any
    selectedItem?: any
    currentRoomEquipment?: EquipmentModel[]
}

interface IOperationFieldState
{
    deletingId: string;
    updatingId: string;
    updatingTitle: string;
    updatingNumber: string
    addingEquipmentTitle: string;
    addingEquipmentNumber: string;
}

export class OperationField extends React.Component<IOperationFieldProps, {}>
{
    props: IOperationFieldProps = {} as any;
    state: IOperationFieldState = {} as any;

    constructor(props: any) {
        super(props);
        this.setUpEquipment = this.setUpEquipment.bind(this);
        this.getEquipmentFromObject = this.getEquipmentFromObject.bind(this);
        this.handleSelectChanged = this.handleSelectChanged.bind(this);
        this.handleAddingNodeTitle = this.handleAddingNodeTitle.bind(this);
        this.handleAddingNodeNumber = this.handleAddingNodeNumber.bind(this);
        this.handleUpdatingSelectChange = this.handleUpdatingSelectChange.bind(this);
    }

    addEquipment(newEquipment: EquipmentModel)
    {
        $.post("/Data/AddEquipment", newEquipment, (response) =>
        {
            this.getEquipmentFromObject(response);
        }, "json");
    }

    getEquipmentFromObject(serverResponse: any)
    {
        var mas: EquipmentModel[] = [];
        var that = this;

        serverResponse.buildings.forEach(function (building: any) {
            building.rooms.forEach(function (room: any) {
                room.equipment.forEach(function (eq: EquipmentModel) {
                    if (room.roomId == that.props.selectedItem.roomId)
                        mas.push(eq);
                });
            });
        });

        this.props.contentCallback(mas);
    }

    deleteEquipment(equipment: EquipmentModel)
    {
        $.post("/Data/DeleteEquipment", equipment, (response) => {
            this.getEquipmentFromObject(response);
        }, "json");
    }

    updateEquipment(equipment: EquipmentModel)
    {
        $.post("/Data/UpdateEquipment", equipment, (response) => {
            this.getEquipmentFromObject(response);
        }, "json");

    }

    passDataToContent()
    {
        this.props.contentCallback;
    }

    handleSelectChanged(event: any)
    {
        this.setState({
            deletingId: event.target.value
        });
    }

    handleAddingNodeTitle(event: any)
    {
        this.setState({
            addingEquipmentTitle: event.target.value
        });
    }

    handleAddingNodeNumber(event: any)
    {
        this.setState({
            addingEquipmentNumber: event.target.value
        });
    }

    handleUpdatingSelectChange(event: any) {
        this.setState({
            updatingId: event.target.value
        })
    }

    handleUpdatingTitle(event: any)
    {
        this.setState({
            updatingTitle: event.target.value
        });
    }

    handleUpdatingNumber(event: any) {
        this.setState({
            updatingNumber: event.target.value
        })
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
        var equipment: any;
        var that = this;

        switch (operation) {
            case "Add":
            {
                var newEquipmentRoomId : number = that.props.selectedItem.roomId;

                equipment = {
                    roomId: newEquipmentRoomId,
                    title: this.state.addingEquipmentTitle,
                    number: Number(this.state.addingEquipmentNumber)
                }
            }
            break;

            case "Delete":
            {
                equipment = {
                    id: Number(this.state.deletingId)
                }
            }
            break;

            case "Update":
            {
                var updatingEquipmentId : number = Number(this.state.updatingId);
                var updatingEquipmentTitle : string = this.state.updatingTitle;
                var updatingEquipmentNumber : number = Number(this.state.updatingNumber);

                equipment = {
                    id: updatingEquipmentId,
                    title: updatingEquipmentTitle,
                    number: updatingEquipmentNumber,
                    roomId: this.props.selectedItem.roomId
                }
            }
            break;
        }
        this.chooseOperation(operation, equipment);
    }

    render()
    {

        var roomTitle: string = this.props.selectedItem !== undefined ? this.props.selectedItem.name
            : "";
        var roomEquipment: JSX.Element[] = this.props.currentRoomEquipment !== undefined ?
            this.props.currentRoomEquipment.map((eq) => <option key={eq.id} value={eq.id}>{eq.id}) {eq.title}</option>)
                : null;

        return (
            <div>
                <div className="col-md-3 col-sm-3 col-xs-3 col-3">
                <form>
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">Добавить:</div>
                            <div className="panel-body">
                                    <label htmlFor="addingNodeRoomId">Добавление в...</label>
                                    <input type="text" readOnly value={roomTitle} className="form-control" id="addingRoomName" />
                                    <label htmlFor="addingNodeName">Название:</label>
                                    <input type="text" required value={this.state.addingEquipmentTitle} onChange={this.handleAddingNodeTitle} className="form-control" id="addingNodeName" />
                                    <label htmlFor="addingNodeNumber">Количество:</label>
                                    <input type="number" required value={this.state.addingEquipmentNumber} onChange={this.handleAddingNodeNumber} className="form-control" id="addingNodeNumber" />
                                    <button type="button" onClick={() => this.setUpEquipment("Add")} className="btn btn-info">OK</button>
                                </div>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Удалить:</div>
                            <div className="panel-body">
                                <div className="dropdown">
                                    <div className="form-group">
                                        <label htmlFor="currentEquipmentList">Выбрать оборудование</label>
                                        <select value={this.state.deletingId} className="form-control" onChange={this.handleSelectChanged}>
                                            {roomEquipment}
                                        </select>
                                    </div>
                                </div>
                                <button type="button" onClick={() => this.setUpEquipment("Delete")} className="btn btn-info">OK</button>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Изменить:</div>
                        <div className="panel-body">
                            <select value={this.state.deletingId} className="form-control" onChange={this.handleUpdatingSelectChange}>
                                {roomEquipment}
                            </select>
                            <label htmlFor="updatingNodeTitle">Название:</label>
                            <input type="text" value={this.state.updatingTitle} onChange={(e) => this.handleUpdatingTitle(e)} required className="form-control" id="updatingNodeTitle" />
                            <label htmlFor="updatingNodeNumber">Количество:</label>
                            <input type="number" value={this.state.updatingNumber} onChange={(e) => this.handleUpdatingNumber(e)} required className="form-control" id="updatingNodeNumber" />
                            <button type="button" onClick={() => this.setUpEquipment("Update")} className="btn btn-info">OK</button>
                        </div>
                    </div>
                </form>

                    </div>
              </div>
        );
    }
}