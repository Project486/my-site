const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

if (code === "1234") {
  document.getElementById("protected-content").style.display = "block";
} else {
  document.body.innerHTML = "<h1>אין גישה לעמוד הזה</h1>";
}
