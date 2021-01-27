

//+ All the classes related to establishing a connection to SQL is defined in System.Data.SqlClient
//+ Data provider for SQL Server - System.Data.SqlClient
//+ DataSet is exists in System.Data namespace
//+ ADO.NET, as a set of classes (Framework), that can be used to interact with data sources like Databases and XML files.
//https://csharp-video-tutorials.blogspot.com/2012/10/what-is-adonet-part-1.html
//https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview
//+ The two main components of ADO.NET for accessing and manipulating data are the .NET Framework data providers and the DataSet.

//! SQL Connection
//* SqlConnection connection = new SqlConnection("data source=.; database=SampleDB; integrated security=SSPI");
//* string ConnectionString = "data source=.; database=SampleDB; user id=MyUserName; password=MyPassword"  //+ for sql server authentication
//* SqlConnection connection = new SqlConnection(connectionString)
//* SqlCommand sqlCommand = new SqlCommand("SELECT [Department],[DepartmentHead]FROM [tblDepartment]", connection);
//* connection.Open();
//* SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
//* GridView1.DataSource = sqlDataReader;
//* GridView1.DataBind();
//+ Integrated Security=true; also works.Integrated Security=true throws an exception when used with the OleDb provider. SSPI is strongly recommend
//+ we can use database or initial catalog
//+ we can use data source  as well as server
//+ for local db we can use "." as well
//* SqlConnectionStringBuilder sqlConnectionStringBuilder = new SqlConnectionStringBuilder(connectionString); //+ we can use SqlConnectionStringBuilder;
//* Label1.Text = "SQL Server: " + sqlConnectionStringBuilder.DataSource; //+ we can set and retrieve values from the object
//* Label2.Text = "Data Base: " + sqlConnectionStringBuilder.InitialCatalog;
//https://csharp-video-tutorials.blogspot.com/2012/10/sqlconnection-in-adonet-part-2.html
//https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/connection-string-syntax
//https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnectionstringbuilder?view=dotnet-plat-ext-5.0
//https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0
//https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection?view=dotnet-plat-ext-5.0