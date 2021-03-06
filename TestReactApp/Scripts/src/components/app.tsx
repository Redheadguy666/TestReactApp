﻿import * as React from "react";
import { Header } from "./header";
import { Content } from "./content";
import { EquipmentList } from "./equipmentList";

export interface IEquipmentApp
{
}

export class EquipmentApp extends React.Component<IEquipmentApp, {}>
{
    render()
    {
        return (
            <div>
                <Header/>
                <Content />
            </div>
        );
    }
}