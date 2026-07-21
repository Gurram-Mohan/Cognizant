using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FirstWebApi.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            string logPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "ExceptionLog.txt");

            File.AppendAllText(
                logPath,
                $"[{DateTime.Now}] {context.Exception}\n\n");

            context.Result = new ObjectResult(new
            {
                Message = "Internal Server Error",
                Error = context.Exception.Message
            })
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };

            context.ExceptionHandled = true;
        }
    }
}