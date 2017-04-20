import * as React from "react";

export interface IForm
{
    text: string
}

export class Form extends React.Component<IForm, {}>
{
    render()
    {
        return (
            <div className="form">
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                </form>
            </div>
        );
    }
}
