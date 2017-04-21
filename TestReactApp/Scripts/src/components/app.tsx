import * as React from "react";
import { Header } from "./header";
import { Content } from "./content";
import { TreeNode } from "./treeNode";

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
                <TreeNode
                    id = {1}
                    name = "Ivan"
                />
                <TreeNode
                    id={2}
                    name="Petr"
                />
                <TreeNode
                    id={3}
                    name="Serega"
                />
            </div>
        );
    }
}