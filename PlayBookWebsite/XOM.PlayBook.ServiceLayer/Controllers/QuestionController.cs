using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using XOM.PlayBook.API;
using XOM.PlayBook.Model;

namespace XOM.PlayBook.ServiceLayer.Controllers
{
    public class QuestionController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            //Question question = new Question();
            //question.Id = 1;
            //question.Option1 = "How is your DevOps?";
            //question.Title = "Tell me about DevOps";
            try
            {
                QuestionCollection questions = new QuestionCollection();
                Object question = questions.Load();
                return Ok(question);
            }
            catch (Exception)
            {
                return BadRequest("Error retrieving Questions. Please try again later or contact your system administrator.");
            }
        }
    }
}
