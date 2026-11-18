(() => {
  "use strict";
  const links = Array.from(document.querySelectorAll(".gallery a"));
  if (!links.length) return;

  const box = document.createElement("div");
  box.className = `lightbox${links.length < 2 ? " single" : ""}`;
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Project photo viewer");
  box.innerHTML =
    '<button class="lb-close" type="button" aria-label="Close photo viewer">×</button>' +
    '<button class="lb-prev" type="button" aria-label="Previous photo">‹</button>' +
    '<figure><img alt=""><figcaption class="lb-caption"></figcaption></figure>' +
    '<button class="lb-next" type="button" aria-label="Next photo">›</button>';
  document.body.appendChild(box);

  const image = box.querySelector("img");
  const caption = box.querySelector(".lb-caption");
  const closeButton = box.querySelector(".lb-close");
  let index = 0;
  let opener = null;

  const show = (nextIndex) => {
    index = (nextIndex + links.length) % links.length;
    const link = links[index];
    const thumb = link.querySelector("img");
    image.src = link.getAttribute("href");
    image.alt = thumb?.alt || "Project photograph";
    caption.textContent = link.dataset.caption || "";
    caption.hidden = !caption.textContent;
  };
  const open = (nextIndex, trigger) => {
    opener = trigger;
    show(nextIndex);
    box.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
  };
  const close = () => {
    box.hidden = true;
    image.removeAttribute("src");
    document.body.style.overflow = "";
    opener?.focus();
  };

  links.forEach((link, i) => link.addEventListener("click", (event) => {
    event.preventDefault();
    open(i, link);
  }));
  closeButton.addEventListener("click", close);
  box.querySelector(".lb-prev").addEventListener("click", () => show(index - 1));
  box.querySelector(".lb-next").addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (event) => { if (event.target === box) close(); });

  document.addEventListener("keydown", (event) => {
    if (box.hidden) return;
    if (event.key === "Escape") close();
    else if (event.key === "ArrowLeft" && links.length > 1) show(index - 1);
    else if (event.key === "ArrowRight" && links.length > 1) show(index + 1);
    else if (event.key === "Tab") {
      const controls = Array.from(box.querySelectorAll("button")).filter((button) => button.offsetParent !== null);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
