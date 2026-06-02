/* OmniEarth Project Page Scripts */
(function () {
  "use strict";

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  onReady(function () {
    document.body.classList.add("is-loaded");

    // Make external links safer when opened from GitHub Pages.
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    // Smooth scrolling for same-page anchors.
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // Add reveal animation to major sections.
    var revealItems = document.querySelectorAll(".section, .hero.teaser, footer.footer");
    revealItems.forEach(function (item) {
      item.classList.add("reveal-on-scroll");
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealItems.forEach(function (item) {
        observer.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }

    // Image fallback: useful before you upload static/images/*.png.
    document.querySelectorAll("img").forEach(function (image) {
      image.addEventListener("error", function () {
        var note = document.createElement("div");
        note.className = "image-missing-note";
        note.textContent = "Image not found: " + image.getAttribute("src");
        image.replaceWith(note);
      });
    });

    // Copy BibTeX button.
    var bibtexBlock = document.querySelector("#BibTeX pre");
    if (bibtexBlock) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "copy-bibtex-button";
      button.textContent = "Copy";
      bibtexBlock.appendChild(button);

      button.addEventListener("click", function () {
        var code = bibtexBlock.querySelector("code");
        var text = code ? code.innerText : bibtexBlock.innerText.replace("Copy", "").trim();

        function showCopied() {
          button.textContent = "Copied";
          window.setTimeout(function () {
            button.textContent = "Copy";
          }, 1400);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied).catch(function () {
            fallbackCopy(text, showCopied);
          });
        } else {
          fallbackCopy(text, showCopied);
        }
      });
    }

    // Back-to-top button.
    var topButton = document.createElement("button");
    topButton.type = "button";
    topButton.className = "back-to-top";
    topButton.setAttribute("aria-label", "Back to top");
    topButton.textContent = "↑";
    document.body.appendChild(topButton);

    function toggleTopButton() {
      if (window.scrollY > 520) {
        topButton.classList.add("is-visible");
      } else {
        topButton.classList.remove("is-visible");
      }
    }

    window.addEventListener("scroll", toggleTopButton, { passive: true });
    toggleTopButton();

    topButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  function fallbackCopy(text, callback) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      callback();
    } catch (error) {
      console.warn("Copy failed", error);
    } finally {
      document.body.removeChild(textarea);
    }
  }
})();
