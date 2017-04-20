import * as React from "react";
import { Header } from "./header";
import { Content } from "./content";
import { Form } from "./form";
import { Footer } from "./footer";

export interface IApp
{
    text: string;
}

export class App extends React.Component<IApp, {}>
{
    render()
    {
        return (
            <div>
                <Header text="" />
                <Content text="" />
                <Form text=""/>
                <Footer text="" />
            </div>
        );
    }
}