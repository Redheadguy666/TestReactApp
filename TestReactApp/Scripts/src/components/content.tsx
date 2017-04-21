import * as React from "react";

export interface IContent
{
}

export class Content extends React.Component<IContent, {}>
{
    render()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 col-3">
                        <div id="buildingsTree"></div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 col-4">
                        <div id="equipmentTree"></div>
                    </div>
                </div>
            </div>
        );
    }
}