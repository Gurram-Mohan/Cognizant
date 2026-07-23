using KafkaConsoleChat.Models;
using KafkaConsoleChat.Services;
using Microsoft.AspNetCore.Mvc;

namespace KafkaConsoleChat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KafkaController : ControllerBase
    {
        private readonly KafkaProducer producer;

        public KafkaController(KafkaProducer producer)
        {
            this.producer = producer;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(ChatMessage chat)
        {
            var result = await producer.SendMessage(chat.Message);

            return Ok(result);
        }
    }
}