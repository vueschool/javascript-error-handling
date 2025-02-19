const navLinks = [
  {
    label: "Lesson 2 Try/Catch Begin",
    href: "/2-begin",
  },
  {
    label: "Lesson 2 Try/Catch End",
    href: "/2-end",
  },
  {
    label: "Lesson 3 Types of Errors Begin",
    href: "/3-begin",
  },
  {
    label: "Lesson 3 Types of Errors End",
    href: "/3-end",
  },
  {
    label: "Lesson 4 Custom Errors Begin",
    href: "/4-begin",
  },
  {
    label: "Lesson 4 Custom Errors End",
    href: "/4-end",
  },
  {
    label: "Lesson 5 Async Code Errors Begin",
    href: "/5-begin",
  },
  {
    label: "Lesson 5 Async Code Errors End",
    href: "/5-end",
  },
  {
    label: "Lesson 6 Fetch Errors Begin",
    href: "/6-begin",
  },
  {
    label: "Lesson 6 Fetch Errors End",
    href: "/6-end",
  },
  {
    label: "Lesson 7 Re-throwing Errors Begin",
    href: "/7-begin",
  },
  {
    label: "Lesson 7 Re-throwing Errors End",
    href: "/7-end",
  },

];

const navHTML = /*html*/ `
<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">

    <div id="page-content"></div>

    <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">
        JavaScript Error Handling
        </a>
    </div>
    <div class="flex-none">
    <label for="my-drawer-4" class="btn btn-square btn-ghost">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
    </label>
    </div>
    </div>
    
  </div>
  <div class="drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      ${navLinks
        .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
        .join("")}
    </ul>
  </div>
</div>`;

export default function () {
  const nav = document.createElement("div");
  nav.innerHTML = navHTML;
  document.body.prepend(nav);
}
