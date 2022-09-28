using Microsoft.EntityFrameworkCore.Migrations;

namespace SampleWebApiCore.Migrations
{
    public partial class MyDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AirlineTable",
                columns: table => new
                {
                    airlineId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Destination = table.Column<string>(nullable: true),
                    Fare = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AirlineTable", x => x.airlineId);
                });

            migrationBuilder.InsertData(
                table: "AirlineTable",
                columns: new[] { "airlineId", "Destination", "Fare", "Name" },
                values: new object[] { 111, "Mysore", 2500, "Air India" });

            migrationBuilder.InsertData(
                table: "AirlineTable",
                columns: new[] { "airlineId", "Destination", "Fare", "Name" },
                values: new object[] { 112, "Bangalore", 3500, "India" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AirlineTable");
        }
    }
}
