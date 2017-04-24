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
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="addingNode">Добавить:</label>
                        <input type="text" className="form-control" id="addingNodeName" />
                        <button className="btn btn-default">OK</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="delitingNode">Удалить:</label>
                        <input type="text" className="form-control" id="delitingNodeName" />
                        <button className="btn btn-default">OK</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="updatingNode">Изменить:</label>
                        <input type="text" className="form-control" id="updatingNodeName" />
                        <label htmlFor="nodeInfo">Новое значение:</label>
                        <input type="text" className="form-control" id="nodeInfo" />
                        <button className="btn btn-default">OK</button>
                    </div>
                </form>
            </div>
        );
    }
}