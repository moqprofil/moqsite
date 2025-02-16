document.getElementById("loginButton").addEventListener("click", login);

<canvas id="myCanvas" width="300" height="300" style="border:1px solid #000;"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Draw the face (circle)
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2, true); // Outer circle
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();

  // Draw the left eye
  ctx.beginPath();
  ctx.arc(110, 120, 10, 0, Math.PI * 2, true); // Left eye
  ctx.fillStyle = "black";
  ctx.fill();

  // Draw the right eye
  ctx.beginPath();
  ctx.arc(190, 120, 10, 0, Math.PI * 2, true); // Right eye
  ctx.fillStyle = "black";
  ctx.fill();

  // Draw the smile
  ctx.beginPath();
  ctx.arc(150, 150, 60, 0, Math.PI, false); // Smile (semi-circle)
  ctx.stroke();
</script>
