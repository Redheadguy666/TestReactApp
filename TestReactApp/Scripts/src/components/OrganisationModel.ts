export interface IBuildingModel
{
    id: number,
    title: string,
    rooms: IRoomModel[]
}

export interface IRoomModel
{
    roomId: number,
    name: string
    equipment: IEquipmentModel[]
}

export interface IEquipmentModel
{
    id?: number,
    title?: string,
    number?: number
    roomId?: number,
}

export interface IOrganizationModel
{
    buildings: IBuildingModel[]
}