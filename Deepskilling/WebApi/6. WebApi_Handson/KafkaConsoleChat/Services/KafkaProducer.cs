using Confluent.Kafka;

namespace KafkaConsoleChat.Services
{
    public class KafkaProducer
    {
        private readonly ProducerConfig config;

        public KafkaProducer()
        {
            config = new ProducerConfig
            {
                BootstrapServers = "localhost:9092"
            };
        }

        public async Task<string> SendMessage(string message)
        {
            using var producer = new ProducerBuilder<Null, string>(config).Build();

            var result = await producer.ProduceAsync(
                "ChatTopic",
                new Message<Null, string>
                {
                    Value = message
                });

            return $"Message sent successfully to {result.TopicPartitionOffset}";
        }
    }
}