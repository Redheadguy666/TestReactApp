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

export class BuildingModel implements IBuilding
{
    id: number;
    title: string;
    rooms: RoomModel[]
}

export class RoomModel implements IRoom
{
    id: number;
    title: string;
    equipment: EquipmentModel[]
}

export class EquipmentModel implements IEquipment
{
    id: number;
    title: string;
    number: number;
    roomId: number;
}