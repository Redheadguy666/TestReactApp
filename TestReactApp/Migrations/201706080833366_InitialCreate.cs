namespace TestReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Buildings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        IsFolder = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        BuildingId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Buildings", t => t.BuildingId)
                .Index(t => t.BuildingId);
            
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
            
            CreateTable(
                "dbo.Equipments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RoomEquipments", "RoomId", "dbo.Rooms");
            DropForeignKey("dbo.RoomEquipments", "EquipmentId", "dbo.Equipments");
            DropForeignKey("dbo.Rooms", "BuildingId", "dbo.Buildings");
            DropIndex("dbo.RoomEquipments", new[] { "EquipmentId" });
            DropIndex("dbo.RoomEquipments", new[] { "RoomId" });
            DropIndex("dbo.Rooms", new[] { "BuildingId" });
            DropTable("dbo.Equipments");
            DropTable("dbo.RoomEquipments");
            DropTable("dbo.Rooms");
            DropTable("dbo.Buildings");
        }
    }
}
