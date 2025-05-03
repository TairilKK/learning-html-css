(document.querySelector("#scroll-down") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    window.scrollTo({
      top:
        (document.querySelector("#about-me") as HTMLAnchorElement).offsetTop -
        20,
    });
    console.log("Works");
  }
);

(document.querySelector("#toggle-theme") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    document.documentElement.classList.toggle("light-theme");
  }
);

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (prefersLight) {
  document.documentElement.classList.add("light-theme");
}
