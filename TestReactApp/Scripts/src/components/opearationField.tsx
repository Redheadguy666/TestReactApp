import * as React from "react";

interface IOperationFieldProps
{

}

export class OperationField extends React.Component<IOperationFieldProps, {}>
{
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
                                    <label htmlFor="addingNodeName">Название:</label>
                                    <input type="text" className="form-control" id="addingNodeName" />
                                    <label htmlFor="addingNodeNumber">Количество:</label>
                                    <input type="text" className="form-control" id="addingNodeNameField" />
                                    <button type="submit" className="btn btn-info">OK</button>
                                </div>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Удалить:</div>
                            <div className="panel-body">
                                <label htmlFor="deletingNodeId">Ид:</label>
                                <input type="text" className="form-control" id="deletingNodeId" />
                                <button type="submit" className="btn btn-info">OK</button>
                            </div>
                        </div>
                </form>
                <form>
                    <div className="panel panel-default">
                        <div className="panel-heading">Изменить:</div>
                        <div className="panel-body">
                            <label htmlFor="updatingNodeName">Название:</label>
                            <input type="text" className="form-control" id="updatingNodeName" />
                            <label htmlFor="updatingNodeNumber">Название:</label>
                            <input type="text" className="form-control" id="updatingNodeNumber" />
                            <button type="submit" className="btn btn-info">OK</button>
                        </div>
                    </div>
                </form>

                    </div>
              </div>
        );
    }
}