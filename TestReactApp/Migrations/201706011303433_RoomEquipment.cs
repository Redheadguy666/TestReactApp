namespace TestReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RoomEquipment : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Equipments", "RoomId", "dbo.Rooms");
            DropIndex("dbo.Equipments", new[] { "RoomId" });
            RenameColumn(table: "dbo.Rooms", name: "BuildingId", newName: "Building_Id");
            RenameIndex(table: "dbo.Rooms", name: "IX_BuildingId", newName: "IX_Building_Id");
            CreateTable(
                "dbo.RoomEquipments",
                c => new
                    {
                        RoomId = c.Int(nullable: false),
                        EquipmentId = c.Int(nullable: false),
                        EquipmentNumber = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.RoomId, t.EquipmentId })
                .ForeignKey("dbo.Equipments", t => t.EquipmentId, cascadeDelete: true)
                .ForeignKey("dbo.Rooms", t => t.RoomId, cascadeDelete: true)
                .Index(t => t.RoomId)
                .Index(t => t.EquipmentId);
            
            DropColumn("dbo.Equipments", "Number");
            DropColumn("dbo.Equipments", "RoomId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Equipments", "RoomId", c => c.Int());
            AddColumn("dbo.Equipments", "Number", c => c.Int(nullable: false));
            DropForeignKey("dbo.RoomEquipments", "RoomId", "dbo.Rooms");
            DropForeignKey("dbo.RoomEquipments", "EquipmentId", "dbo.Equipments");
            DropForeignKey("dbo.EquipmentRooms", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.EquipmentRooms", "Equipment_Id", "dbo.Equipments");
            DropIndex("dbo.EquipmentRooms", new[] { "Room_Id" });
            DropIndex("dbo.EquipmentRooms", new[] { "Equipment_Id" });
            DropIndex("dbo.RoomEquipments", new[] { "EquipmentId" });
            DropIndex("dbo.RoomEquipments", new[] { "RoomId" });
            DropTable("dbo.EquipmentRooms");
            DropTable("dbo.RoomEquipments");
            RenameIndex(table: "dbo.Rooms", name: "IX_Building_Id", newName: "IX_BuildingId");
            RenameColumn(table: "dbo.Rooms", name: "Building_Id", newName: "BuildingId");
            CreateIndex("dbo.Equipments", "RoomId");
            AddForeignKey("dbo.Equipments", "RoomId", "dbo.Rooms", "Id");
        }
    }
}
