
const VechtButton = document.getElementById("VechtButton");

if (_signInManager.IsSignedIn(this.User)) {
    VechtButton.style.display = "btnV";
} else {
    VechtButton.style.display = "none";
}