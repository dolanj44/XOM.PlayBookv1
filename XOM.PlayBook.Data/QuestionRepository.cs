using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using XOM.PlayBook.Model;

namespace XOM.PlayBook.Data
{
    public class QuestionRepository
    {
        public object loadJson() { 
                Question question = new Question();
                question.Id = 1;
                question.Option1 = "How is your DevOps?";
                question.Title = "Tell me about DevOps with some data";

        return question;
      }

    }
}