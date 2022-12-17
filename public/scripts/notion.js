const embedStyles = [
  {
    src: "https://open.spotify.com/embed",
    style: {
      borderRadius: "15px",
    },
  },
];
const apply = () => {
  Array.prototype.slice
    .call(document.getElementsByTagName("iframe"))
    .forEach((iframe) => {
      embedStyles.forEach((embedStyle) => {
        if (iframe.src.startsWith(embedStyle.src)) {
          Object.assign(iframe.style, embedStyle.style);
        }
      });
    });
  var externals = document.getElementsByClassName("notion-external");
  Array.prototype.forEach.call(externals, function(element) {
    if (element.href.startsWith("https://github.com")) {
      console.log(element.childNodes[0].classList.add("invert-on-theme"));
    }
  });
};

apply();

setInterval(apply, 3000);
