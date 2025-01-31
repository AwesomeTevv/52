onload = () => {
  var audio = document.getElementById("bg-music");
  audio.volume = 0.1;

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 5000);

  //   // Load the audio file
  //   audio.load();

  //   // Play the audio after it's loaded
  //   audio.addEventListener("canplaythrough", () => {
  //     audio.play().catch((error) => {
  //       console.error("Error playing audio:", error);
  //     });
  //   });

  //   // Handle manual page reload/refresh
  //   window.addEventListener(
  //     "online",
  //     () => {
  //       audio.play().catch((error) => {
  //         console.error("Error playing audio:", error);
  //       });
  //     },
  //     true
  //   );

  const messageDiv = document.getElementById("message");
  var muscle = String.fromCodePoint(0x1f4aa);
  var heart = String.fromCodePoint(0x2764);
  let message =
    "Thank you for everything that you do" +
    muscle +
    "\nWe really appreciate you " +
    heart;
  messageDiv.textContent = message;
  setTimeout(() => {
    messageDiv.classList.add("fade-in");
  }, 500); // Fade in after 0.5 seconds

  setTimeout(function () {
    // Fade out the current message
    messageDiv.classList.remove("fade-in");
    setTimeout(() => {
      message = "Happy 52nd Birthday, Dad!";
      messageDiv.textContent = message;

      messageDiv.classList.add("fade-in");
    }, 2000); // Delay to allow fade-out to complete
  }, 5000);
};
