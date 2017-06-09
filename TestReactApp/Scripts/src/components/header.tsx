import * as React from "react";

export interface IHeader
{
    
}

export class Header extends React.Component<IHeader, {}>
{
    render()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h4 className="text-center">Работа с оборудованием</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6 col-1">
                        <h4 className="text-center">Здания</h4>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 col-2">
                        <h4 className="text-center">Оборудование</h4>
                    </div>
                </div>
            </div>
        ); 
    }
}