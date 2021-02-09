using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace ADOWebApplication1
{
    public partial class WebForm4 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string connectionString = new SqlConnectionStringBuilder(ConfigurationManager.ConnectionStrings["learningDBConnection"].ConnectionString).ConnectionString;
            using (SqlConnection cn = new SqlConnection(connectionString))
            {
                //SqlCommand sqlCommand1 = new SqlCommand("SELECT [Department],[DepartmentHead]FROM [tblDepartment] where DepartmentHead like @DepartmentHead", cn);
                //sqlCommand1.Parameters.AddWithValue("@DepartmentHead", TextBox1.Text + '%');
                //SqlCommand sqlCommand1 = new SqlCommand("spFindDepartmentByDepartmentHead", cn);
                SqlDataAdapter dataAdapter = new SqlDataAdapter("spFindDepartmentByDepartmentHead", cn);
                dataAdapter.SelectCommand.CommandType = System.Data.CommandType.StoredProcedure;
                dataAdapter.SelectCommand.Parameters.AddWithValue("@DepartmentHead", TextBox1.Text);
                SqlParameter sqloutputPara = new SqlParameter();
                sqloutputPara.ParameterName = "@id";
                sqloutputPara.SqlDbType = System.Data.SqlDbType.Int;
                sqloutputPara.Direction = System.Data.ParameterDirection.Output;
                DataSet dataset = new DataSet();
                dataAdapter.Fill(dataset);
                //sqlCommand1.Parameters.Add(sqloutputPara);

                GridView1.DataSource = dataset;
                GridView1.DataBind();
            };
        }
    }
}