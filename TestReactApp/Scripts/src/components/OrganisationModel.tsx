interface IBuilding
{
    id: number,
    title: string,
    rooms: IRoom[]
}

interface IRoom
{
    roomId: number,
    name: string
    equipment: IEquipment[]
}

interface IEquipment
{
    id?: number,
    title?: string,
    number?: number
    roomId?: number,
}

export class BuildingModel implements IBuilding
{
    id: number;
    title: string;
    rooms: IRoom[]
}

export class RoomModel implements IRoom
{
    roomId: number;
    name: string;
    equipment: IEquipment[]
}

export class EquipmentModel implements IEquipment
{
    id?: number;
    title?: string;
    number?: number;
    roomId?: number;
}