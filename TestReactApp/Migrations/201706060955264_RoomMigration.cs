namespace TestReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RoomMigration : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Rooms", name: "Building_Id", newName: "BuildingId");
            RenameIndex(table: "dbo.Rooms", name: "IX_Building_Id", newName: "IX_BuildingId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Rooms", name: "IX_BuildingId", newName: "IX_Building_Id");
            RenameColumn(table: "dbo.Rooms", name: "BuildingId", newName: "Building_Id");
        }
    }
}
