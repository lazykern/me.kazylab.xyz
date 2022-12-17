const applyFun = () => {
  Array.prototype.forEach.call(
    document.getElementsByClassName("medium-zoom-image"),
    function(element) {
      if (element.alt.includes("VeryHardBit")) {
        console.log("Don't zoom in on the TuaAraiMaiRoo icon!");
        element.addEventListener("click", function() {
          var audio = new Audio(
            "https://www.myinstants.com/media/sounds/vine-boom.mp3"
          );
          audio.play();
        });
      }
    }
  );
};

setTimeout(applyFun, 1000);
