using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace ADOWebApplication1
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string learningDBConnection = ConfigurationManager.ConnectionStrings["learningDBConnection"].ConnectionString;
            SqlConnectionStringBuilder sqlConnectionStringBuilder = new SqlConnectionStringBuilder(learningDBConnection);
            using (SqlConnection connection = new SqlConnection(sqlConnectionStringBuilder.ConnectionString))
            {
                SqlDataAdapter dataAdapter = new SqlDataAdapter("SELECT [Department],[DepartmentHead]FROM [tblDepartment]", connection);
                DataSet sqlData = new DataSet();
                dataAdapter.Fill(sqlData);

                GridView1.DataSource = sqlData;
                GridView1.DataBind();
            }
        }
    }
}