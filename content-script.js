const blockedUrls = [
  "https://www.reddit.com/",
  "https://www.youtube.com/"
];

function normalizePath (p) {
  if (p == null) return "";
  return p.replace(/\/$/, "");
}

function matchPathName (p1, p2) {
  return normalizePath(p1) == normalizePath(p2);
}

function isMatch() {
  const {host, pathname} = window.location;
  return blockedUrls.some((url) => {
    const blockedUrl = new URL(url);
    return (
      host == blockedUrl.host &&
      matchPathName(pathname, blockedUrl.pathname)
    );
  });
}

function main() {
  if (isMatch() && !confirm("Proceed anyways?")) {
    window.close();
  }
}

main();
