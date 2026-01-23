import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://delphinedelapeyriere.fr";

    // List of static routes
    const routes = [
        "",
        "/qui-suis-je",
        "/pour-quoi-faire",
        "/pour-qui",
        "/comment",
        "/combien",
        "/contact",
        "/mentions-legales",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
