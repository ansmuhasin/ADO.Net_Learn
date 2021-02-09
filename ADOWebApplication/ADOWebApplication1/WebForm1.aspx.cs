using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;

namespace ADOWebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string learningDBConnection = ConfigurationManager.ConnectionStrings["learningDBConnection"].ConnectionString;
            string connectionString = "server = (local); database = Learning_DB; integrated security = true";
            SqlConnectionStringBuilder sqlConnectionStringBuilder = new SqlConnectionStringBuilder(learningDBConnection);
            using (SqlConnection connection = new SqlConnection(sqlConnectionStringBuilder.ConnectionString))
            {
                SqlCommand sqlCommand = new SqlCommand("SELECT [Department],[DepartmentHead]FROM [tblDepartment]", connection);
                connection.Open();
                SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
                GridView1.DataSource = sqlDataReader;
                GridView1.DataBind();
            }
            Label1.Text = "SQL Server: " + sqlConnectionStringBuilder.DataSource;
            Label2.Text = "Data Base: " + sqlConnectionStringBuilder.InitialCatalog;
        }
    }
}