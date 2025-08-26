export default function sitemap() {
  const base = "https://localhost";
  return [
    "",
    "/about",
    "/skills",
    "/projects",
    "/achievements",
    "/contact",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
} 