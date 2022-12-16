const embedStyles = [
  {
    src: "https://open.spotify.com/embed",
    style: {
      borderRadius: "15px",
    },
  },
];

Array.prototype.slice
  .call(document.getElementsByTagName("iframe"))
  .forEach((iframe) => {
    embedStyles.forEach((embedStyle) => {
      if (iframe.src.startsWith(embedStyle.src)) {
        Object.assign(iframe.style, embedStyle.style);
      }
    });
  });
