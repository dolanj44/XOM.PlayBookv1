using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace XOM.PlayBook.Model
{
    public class QuestionContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
        }

        public static string Equals()
        {
            throw new NotImplementedException();
        }

        public QuestionContext() : base("name=QuestionContext")
        {
        }

        public System.Data.Entity.DbSet<XOM.PlayBook.Model.Question> Questions { get; set; }
    }
}
