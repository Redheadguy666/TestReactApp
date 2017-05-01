import * as React from "react";
import { TreeNode } from "./TreeNode";

interface ITreeProps
{
    //source:     
}

interface ITreeState
{
    class: string;
    label: string;
}

export class Tree extends React.Component<ITreeProps, ITreeState>
{
    constructor(props : any)
    {
        super(props);
        this.press = this.press.bind(this);
    }

    componentDidMount()
    {
        this.setState
            ({
                class: "Нажми",
                label: "на меня"
            });
    }

    press()
    {
        var className = (this.state.class === "Нажми") ? "on"
            : "off";
        this.setState({ class: className });
    }

    render()
    {
        return (
            <div>
                <button onClick={this.press} className={this.state.class}>
                    {this.state.label}
                </button>
                <TreeNode id={1} name="Здание 2" icon="/Content/Images/blue-folder.ico" />
            </div>
        ); 
    }
}