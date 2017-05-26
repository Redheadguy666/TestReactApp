interface IBuilding
{
    id: number,
    title: string,
    rooms: IRoom[]
}

interface IRoom
{
    id: number,
    title: string
    equipment: IEquipment[]
}

interface IEquipment
{
    id: number,
    title: string,
    number: number
    roomId: number,
}

export class Building implements IBuilding
{
    id: number;
    title: string;
    rooms: Room[]
}

export class Room implements IRoom
{
    id: number;
    title: string;
    equipment: Equipment[]
}

export class Equipment implements IEquipment
{
    id: number;
    title: string;
    number: number;
    roomId: number;
}