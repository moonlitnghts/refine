(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const header = $("header");
  const toggle = $("menuToggle");
  const nav = $("navigation");

  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const setMenu = (open) => {
    if (!nav || !toggle) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    toggle.textContent = open ? "×" : "☰";
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("click", (event) => {
      if (nav.classList.contains("open") && !nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) setMenu(false);
    }, { passive: true });
  }

  const revealItems = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const year = $("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = $("contactForm");
  if (!form) return;
  const note = $("formNote");
  const success = $("formSuccess");
  const button = form.querySelector('button[type="submit"]');
  const email = form.dataset.email || "brandon@lmaccustoms.com";
  const setNote = (message, isError = false) => {
    if (!note) return;
    note.textContent = message;
    note.classList.toggle("error", isError);
  };
  const openMailApp = (data) => {
    const subject = `Website inquiry: ${data.get("project") || "New project"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Project: ${data.get("project") || ""}`,
      "",
      "Project details:",
      data.get("details") || "(Not provided)"
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    const endpoint = form.getAttribute("action") || "";
    if (!endpoint || endpoint.includes("REPLACE_WITH")) {
      setNote("Your email app will open with the inquiry ready to send.");
      openMailApp(data);
      return;
    }

    if (button) button.disabled = true;
    form.setAttribute("aria-busy", "true");
    setNote("Sending your inquiry…");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new URLSearchParams(data)
      });
      if (!response.ok) throw new Error("The form service did not accept the request.");
      const result = await response.json();
      if (!result || result.ok !== true) throw new Error(result?.error || "Submit failed");
      form.reset();
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus();
      }
    } catch (error) {
      console.error("LMAC inquiry form:", error);
      setNote(`We couldn't confirm that your message was sent. Please email ${email} or call (207) 583-7516.`, true);
      if (button) button.disabled = false;
    } finally {
      form.removeAttribute("aria-busy");
    }
  });
})();
