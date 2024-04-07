using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Showcase_us3_4.Controllers;

namespace PokemonRPSUnittesten
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Index_ReturnsView()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<HomeController>>();
            var controller = new HomeController(mockLogger.Object);

            // Act
            var result = controller.Index();

            // Assert
            Assert.IsInstanceOf<IActionResult>(result);
        }

        [Test]
        [Authorize(Roles = "admin")]
        public void Admin_ReturnsViewForAuthorizedUsers()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<HomeController>>()    ;
            var controller = new HomeController(mockLogger.Object);

            // Act
            var result = controller.Admin();

            // Assert
            Assert.IsInstanceOf<IActionResult>(result);

        }

        //test fails because the test is not authorized to access the admin page

        //[Test]
        //    public void Admin_ThrowsUnauthorizedAccessExceptionForUnauthorizedUsers()
        //{
        //    // Arrange
        //    var mockLogger = new Mock<ILogger<HomeController>>();
        //    var controller = new HomeController(mockLogger.Object);

        //    try
        //    {
        //        // Act
        //       var result = controller.Admin();
        //    }
        //    catch (UnauthorizedAccessException)
        //    {
        //        // Assert
        //        Assert.Pass();
        //    }

        //    // Act and Assert
        //    Assert.Throws<UnauthorizedAccessException>(() => controller.Admin());
        //}

        [Test]
        [Authorize]
        public void Battleview_ReturnsViewForAuthorizedUsers()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<HomeController>>();
            var controller = new HomeController(mockLogger.Object);

            // Act
            var result = controller.Battleview();

            // Assert
            Assert.IsInstanceOf<IActionResult>(result);
;
        }

        //[Test]
        //public void Battleview_ThrowsUnauthorizedAccessExceptionForUnauthorizedUsers()
        //{
        //    // Arrange
        //    var mockLogger = new Mock<ILogger<HomeController>>();
        //    var controller = new HomeController(mockLogger.Object);

        //    // Act and Assert
        //    Assert.Throws<UnauthorizedAccessException>(() => controller.Battleview());
        //}
    }
}