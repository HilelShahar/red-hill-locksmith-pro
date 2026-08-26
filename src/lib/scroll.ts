/**
 * The router only scrolls to a hash target when the URL actually changes, so
 * links that point at the section you are already on need to scroll manually.
 */
export function smoothScrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
