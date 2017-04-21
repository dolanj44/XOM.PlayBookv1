using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XOM.PlayBook.Data;
using XOM.PlayBook.Model;

namespace XOM.PlayBook.API
{
    public class QuestionCollection
    {

        public Object Load()
        {
            QuestionRepository repo = new QuestionRepository();
            object question = repo.loadJson();
            return (question);
        }
    }
}