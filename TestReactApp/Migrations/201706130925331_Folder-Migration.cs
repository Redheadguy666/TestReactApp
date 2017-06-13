namespace TestReactApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FolderMigration : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Buildings", "IsFolder");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Buildings", "IsFolder", c => c.Boolean(nullable: false));
        }
    }
}
