using Microsoft.EntityFrameworkCore.Migrations;

namespace SampleWebApiCore.Migrations
{
    public partial class Neww : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "AirlineTable",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AirlineTable",
                keyColumn: "airlineId",
                keyValue: 111,
                column: "Image",
                value: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600");

            migrationBuilder.UpdateData(
                table: "AirlineTable",
                keyColumn: "airlineId",
                keyValue: 112,
                column: "Image",
                value: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "AirlineTable");
        }
    }
}
