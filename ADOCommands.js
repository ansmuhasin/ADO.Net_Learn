

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

//! Adding connection string in web.config
//* <connectionStrings>
//*     <add name="learningDBConnection" connectionString="server= MSIGL65; database = Learning_DB; Integrated Security = SSPI"
//*          providerName="System.Data.SqlClient"/>
//* </connectionStrings>
//* string learningDBConnection = ConfigurationManager.ConnectionStrings["learningDBConnection"].ConnectionString;
//https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/connection-strings-and-configuration-files

//! SQL Command
//+ SqlCommand class is used to prepare an SQL statement or StoredProcedure that we want to execute on a SQL Server database.
//+ ExecuteReader - Use when the T-SQL statement returns more than a single value. For example, if the query returns rows of data.
//+ ExecuteNonQuery - Use when you want to perform an Insert, Update or Delete operation
//+ ExecuteScalar - Use when the query returns a single(scalar) value. For example, queries that return the total number of rows in a table.
//* SqlCommand cmd = new SqlCommand("Select Count(Id) from tblProductInventory", connection);
//*   int TotalRows = (int)cmd.ExecuteScalar();
//* cmd.CommandText = "update tblProductInventory set QuantityAvailable = 101 where Id = 101";
//* rowsAffected = cmd.ExecuteNonQuery();
//https://docs.microsoft.com/en-us/dotnet/api/microsoft.data.sqlclient.sqlcommand.parameters?view=sqlclient-dotnet-core-2.1
//https://csharp-video-tutorials.blogspot.com/2012/10/sqlcommand-in-adonet-part-4.html

//%SQL Injuction
//https://csharp-video-tutorials.blogspot.com/2012/10/sql-injection-tutorial-part-5.html

//* SqlCommand sqlCommand1 = new SqlCommand("SELECT [Department],[DepartmentHead]FROM [tblDepartment] where DepartmentHead like @DepartmentHead", cn);
//* sqlCommand1.Parameters.AddWithValue("@DepartmentHead", TextBox1.Text + '%');

//* SqlCommand sqlCommand1 = new SqlCommand("spFindDepartmentByDepartmentHead", cn);
//* sqlCommand1.CommandType = System.Data.CommandType.StoredProcedure;
//https://csharp-video-tutorials.blogspot.com/2012/10/sql-injection-prevention-part-6.html
//* Create Procedure spAddEmployee
//* @Name nvarchar(50),
//* @Gender nvarchar(20),
//* @Salary int,
//* @EmployeeId int Out
//* as

//* SqlParameter sqloutputPara = new SqlParameter();
//* sqloutputPara.ParameterName = "@id";
//* sqloutputPara.SqlDbType = System.Data.SqlDbType.Int;
//* sqloutputPara.Direction = System.Data.ParameterDirection.Output;
//* sqlCommand1.Parameters.Add(outPutParameter);
//* string value = sqloutputPara.Value;    // After execution

//! SQL DataReader
//+ Read data in most efficient manner, good for reading huge set of data
//+ forward read only and cannot read the previous, read only(cannot write anything)
//+ connection oriented. need a open connection to read
//+ SqlDataReader cannot be initialised using new. no constructor
//+ executeReader method of command object will create a DqlDataReader.
//+ It is better to create  sql data reader inside a using block so that it will be created properly.
//* using(SqlDataReader sqlDataReader = sqlCommand.ExecuteReader())
//* {
//* }

//* using (SqlDataReader reader = command.ExecuteReader())
//*     {
//*         // Create the DataTable and columns. This will 
//*         // be used as the datasource for the GridView
//*         DataTable sourceTable = new DataTable();
//*         sourceTable.Columns.Add("ID");
//*         sourceTable.Columns.Add("Name");
//*         sourceTable.Columns.Add("Price");
//*         sourceTable.Columns.Add("DiscountedPrice");
//* 
//*         while (reader.Read())
//*         {
//*             //Calculate the 10% discounted price
//*             int OriginalPrice = Convert.ToInt32(reader["UnitPrice"]);
//*             double DiscountedPrice = OriginalPrice * 0.9;
//* 
//*             // Populate datatable column values from the SqlDataReader
//*             DataRow datarow = sourceTable.NewRow();
//*             datarow["ID"] = reader["ProductId"];
//*             datarow["Name"] = reader["ProductName"];
//*             datarow["Price"] = OriginalPrice;
//*             datarow["DiscountedPrice"] = DiscountedPrice;
//* 
//*             //Add the DataRow to the DataTable
//*             sourceTable.Rows.Add(datarow);
//*         }
//*     };
//https://csharp-video-tutorials.blogspot.com/2012/10/sqldatareader-object-in-adonet-part-8.html
//% If we have multiple result set in the SqlDataReader, we need to tell to fetch the next one, or it will only have one
//*SqlCommand command = new SqlCommand("select * from tblProductInventory; select * from tblProductCategories", connection);
//*    using (SqlDataReader reader = command.ExecuteReader())
//*    {
//*        ProductsGridView.DataSource = reader;
//*        ProductsGridView.DataBind();
//*
//*        while (reader.NextResult())
//*        {
//*            CategoriesGridView.DataSource = reader;
//*            CategoriesGridView.DataBind();
//*        }
//*     }
//https://csharp-video-tutorials.blogspot.com/2012/10/sqldatareader-object-nextresult-method.html
//! SQL DATA Adapter
//* SqlDataAdapter dataAdapter = new SqlDataAdapter("SELECT [Department],[DepartmentHead]FROM [tblDepartment]", connection);
//* DataSet sqlData = new DataSet();
//* dataAdapter.Fill(sqlData);
//+ SqlDataAdapter and DataSet provides us with disconnected data access model.
//% For SP
//*SqlDataAdapter dataAdapter = new SqlDataAdapter("spFindDepartmentByDepartmentHead", cn);
//*dataAdapter.SelectCommand.CommandType = System.Data.CommandType.StoredProcedure;
//*dataAdapter.SelectCommand.Parameters.AddWithValue("@DepartmentHead", TextBox1.Text);
//*DataSet dataset = new DataSet();
//*dataAdapter.Fill(dataset);
//https://csharp-video-tutorials.blogspot.com/2012/10/sqldataadapter-in-adonet-part-10.html
//% If we have 2 different table output
//+ we can use Tables property
//* GridViewProducts.DataSource = dataset.Tables[0];
//* GridViewProducts.DataBind();
//* GridViewCategories.DataSource = dataset.Tables[1];
//* GridViewCategories.DataBind();
//https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldataadapter?view=dotnet-plat-ext-5.0

//! SqlCommand Builder
//+ SqlCommandBuilder automatically generates INSERT, UPDATE and DELETE sql statements based on the SELECT statement for a single table.
//https://csharp-video-tutorials.blogspot.com/2013/10/part-13-what-is-sqlcommandbuilder.html
//https://csharp-video-tutorials.blogspot.com/2013/10/part-14-sqlcommandbuilder-update-not.html
//https://csharp-video-tutorials.blogspot.com/2013/10/part-15-disconnected-data-access-in.html

//+ When AcceptChanges() is invoked RowState property of each DataRow changes. Added and Modified rows become Unchanged, and Deleted rows are removed.
//+ When RejectChanges() is invoked RowState property of each DataRow changes. Added rows are removed. Modified and Deleted rows becomes Unchanged.
//https://csharp-video-tutorials.blogspot.com/2013/10/part-16-datasetrejectchanges-and.html
//! Strongly typed datasets - skipped
//https://csharp-video-tutorials.blogspot.com/2013/10/part-17-strongly-typed-datasets.html

//! Transaction
//* string cs = ConfigurationManager.ConnectionStrings["CS"].ConnectionString;
//* using (SqlConnection con = new SqlConnection(cs))
//* {
//*     con.Open();
//*     // Begin a transaction. The connection needs to be open before we begin a transaction
//*     SqlTransaction transaction = con.BeginTransaction();
//*     try
//*     {
//*         // Associate the first update command with the transaction
//*         SqlCommand cmd = new SqlCommand("Update Accounts set Balance = Balance - 10 where AccountNumber = 'A1'", con, transaction);
//*         cmd.ExecuteNonQuery();
//*         // Associate the second update command with the transaction
//*         cmd = new SqlCommand("Update Accounts set Balance = Balance + 10 where AccountNumber = 'A2'", con, transaction);
//*         cmd.ExecuteNonQuery();
//*         // If all goes well commit the transaction
//*         transaction.Commit();
//*         lblMessage.ForeColor = System.Drawing.Color.Green;
//*         lblMessage.Text = "Transaction committed";
//*     }
//*     catch
//*     {
//*         // If anything goes wrong, rollback the transaction
//*         transaction.Rollback();
//*         lblMessage.ForeColor = System.Drawing.Color.Red;
//*         lblMessage.Text = "Transaction rolled back";
//*     }
//* }
