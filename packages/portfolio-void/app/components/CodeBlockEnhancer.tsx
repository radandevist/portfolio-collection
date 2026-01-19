import { useEffect } from "react";

export function CodeBlockEnhancer() {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("[data-rehype-pretty-code-figure]");

    codeBlocks.forEach((block) => {
      if (block.querySelector(".copy-button")) return;

      const pre = block.querySelector("pre");
      if (!pre) return;

      const button = document.createElement("button");
      button.className = "copy-button";
      button.setAttribute("aria-label", "Copy code");
      button.innerHTML = `
        <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;

      button.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        if (!code) return;

        const text = code.innerText;
        await navigator.clipboard.writeText(text);

        const copyIcon = button.querySelector(".copy-icon") as HTMLElement;
        const checkIcon = button.querySelector(".check-icon") as HTMLElement;

        if (copyIcon && checkIcon) {
          copyIcon.style.display = "none";
          checkIcon.style.display = "block";

          setTimeout(() => {
            copyIcon.style.display = "block";
            checkIcon.style.display = "none";
          }, 2000);
        }
      });

      block.appendChild(button);
    });
  }, []);

  return null;
}
