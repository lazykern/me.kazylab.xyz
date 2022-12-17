var externals = document.getElementsByClassName("notion-external");
Array.prototype.forEach.call(externals, function(element) {
  if (element.href.startsWith("https://github.com")) {
    console.log(element.childNodes[0].classList.add("invert-on-theme"));
  }
});
