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
                "dbo.EquipmentRooms",
                c => new
                    {
                        Room_Id = c.Int(nullable: false),
                        Equipment_Id = c.Int(nullable: false),
                        Equipment_Count = c.Int(nullable: false)

                    })
                .PrimaryKey(t => new { t.Equipment_Id, t.Room_Id })
                .ForeignKey("dbo.Equipments", t => t.Equipment_Id, cascadeDelete: true)
                .ForeignKey("dbo.Rooms", t => t.Room_Id, cascadeDelete: true)
                .Index(t => t.Equipment_Id)
                .Index(t => t.Room_Id);
            
            DropColumn("dbo.Equipments", "Number");
            DropColumn("dbo.Equipments", "RoomId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Equipments", "RoomId", c => c.Int());
            AddColumn("dbo.Equipments", "Number", c => c.Int(nullable: false));
            DropForeignKey("dbo.EquipmentRooms", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.EquipmentRooms", "Equipment_Id", "dbo.Equipments");
            DropIndex("dbo.EquipmentRooms", new[] { "Room_Id" });
            DropIndex("dbo.EquipmentRooms", new[] { "Equipment_Id" });
            DropTable("dbo.EquipmentRooms");
            RenameIndex(table: "dbo.Rooms", name: "IX_Building_Id", newName: "IX_BuildingId");
            RenameColumn(table: "dbo.Rooms", name: "Building_Id", newName: "BuildingId");
            CreateIndex("dbo.Equipments", "RoomId");
            AddForeignKey("dbo.Equipments", "RoomId", "dbo.Rooms", "Id");
        }
    }
}
