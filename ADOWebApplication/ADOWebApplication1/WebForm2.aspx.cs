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
    public partial class WebForm2 : System.Web.UI.Page
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
                SqlCommand sqlCommand1 = new SqlCommand("spFindDepartmentByDepartmentHead", cn);
                sqlCommand1.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand1.Parameters.AddWithValue("@DepartmentHead", TextBox1.Text);
                SqlParameter sqloutputPara = new SqlParameter();
                sqloutputPara.ParameterName = "@id";
                sqloutputPara.SqlDbType = System.Data.SqlDbType.Int;
                sqloutputPara.Direction = System.Data.ParameterDirection.Output;
                sqlCommand1.Parameters.Add(sqloutputPara);
                cn.Open();
                GridView1.DataSource = sqlCommand1.ExecuteReader();
                GridView1.DataBind();
            };
        }
    }
}