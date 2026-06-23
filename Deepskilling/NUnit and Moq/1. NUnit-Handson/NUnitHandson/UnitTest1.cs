namespace NUnitHandson
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new Calculator();
        }

        [TearDown]
        public void Cleanup()
        {
            calculator = null;
        }

        [Test]
        [TestCase(10, 20, 30)]
        [TestCase(5, 15, 20)]
        [TestCase(100, 200, 300)]
        public void TestAddition(int a, int b, int expected)
        {
            int actual = calculator.Add(a, b);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}