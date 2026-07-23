# 🚀 Exercise 6 – Apache Kafka Integration with ASP.NET Core Web API

## 🎯 Objective

The objective of this exercise is to integrate **Apache Kafka** with an **ASP.NET Core Web API** application to implement asynchronous message publishing and consumption using the **Confluent.Kafka** library.

---

# 🛠 Technologies Used

* 💻 C#
* 🌐 ASP.NET Core Web API (.NET 8)
* 📨 Apache Kafka 3.9.2
* 🗂 Apache ZooKeeper
* 📦 Confluent.Kafka 2.15.0
* 📖 Swagger UI
* 🧰 Visual Studio 2022
* ☕ Java JDK 21

---

# 📋 Software Requirements

* ✅ Visual Studio 2022
* ✅ .NET 8 SDK
* ✅ Java JDK 21
* ✅ Apache Kafka 3.9.2
* ✅ Windows Command Prompt

---

# 📁 Project Structure

```text
KafkaConsoleChat
│
├── Controllers
│   ├── KafkaController.cs
│   └── WeatherForecastController.cs
│
├── Models
│   └── ChatMessage.cs
│
├── Services
│   └── KafkaProducer.cs
│
├── Program.cs
├── appsettings.json
└── KafkaConsoleChat.csproj
```

---

# 📦 NuGet Package Installed

* 📌 Confluent.Kafka (2.15.0)

---

# ⚙️ Steps Performed

### ✅ Step 1

Downloaded and extracted **Apache Kafka 3.9.2**.

### ✅ Step 2

Started **ZooKeeper Server** successfully.

### ✅ Step 3

Started the **Kafka Broker** successfully.

### ✅ Step 4

Created a Kafka Topic named:

```text
ChatTopic
```

using:

```cmd
bin\windows\kafka-topics.bat --create --topic ChatTopic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```

### ✅ Step 5

Verified successful topic creation.

### ✅ Step 6

Created an **ASP.NET Core Web API** project.

### ✅ Step 7

Installed the **Confluent.Kafka** NuGet package.

### ✅ Step 8

Implemented a **Kafka Producer Service** using `ProducerBuilder`.

### ✅ Step 9

Created a REST API endpoint:

```text
POST /api/Kafka
```

to publish messages to Kafka.

### ✅ Step 10

Executed the API through **Swagger UI**.

Sample Request:

```json
{
  "message": "Hello Kafka"
}
```

### ✅ Step 11

Received a successful response from the API.

### ✅ Step 12

Started the Kafka Consumer using:

```cmd
bin\windows\kafka-console-consumer.bat --topic ChatTopic --from-beginning --bootstrap-server localhost:9092
```

### ✅ Step 13

Verified that all published messages were successfully consumed.

---

# 📸 Outputs

## 🖼 Output-1

✅ ZooKeeper Server Started Successfully

---

## 🖼 Output-2

✅ Kafka Broker Started Successfully

---

## 🖼 Output-3

✅ Kafka Topic Created Successfully

Topic Name:

```text
ChatTopic
```

---

## 🖼 Output-4

✅ Kafka Producer Published Messages Successfully

---

## 🖼 Output-5

✅ Kafka Consumer Received Console Messages Successfully

---

## 🖼 Output-6

✅ Swagger API Published Message Successfully

**Response**

```text
200 OK

Message sent successfully to ChatTopic[0]@0
```

---

## 🖼 Output-7

✅ Kafka Consumer Successfully Received API Messages

Example Output:

```text
Hello Kafka
This is my first Kafka message.
Cognizant Deep Skilling Exercise 6
Hello Kafka
```

---

# 🎉 Result

Successfully integrated **Apache Kafka** with an **ASP.NET Core Web API** application. Messages were published through a REST API endpoint and successfully consumed using the Kafka Console Consumer, demonstrating reliable asynchronous communication.

---

# ✅ Conclusion

This exercise successfully demonstrated the integration of **Apache Kafka** with **ASP.NET Core Web API** using the **Confluent.Kafka** library.

The application was able to:

* ✅ Publish messages to Kafka topics
* ✅ Consume messages from Kafka topics
* ✅ Verify end-to-end communication using Swagger UI and Kafka Console Consumer

This implementation showcases the use of **Apache Kafka as a distributed messaging platform** for building scalable and event-driven applications.

