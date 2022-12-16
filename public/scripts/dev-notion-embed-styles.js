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
};
apply();

setInterval(apply, 3000);
