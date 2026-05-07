import { MetadataRoute } from "next";

type RouteConfig = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: RouteConfig[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/qui-suis-je", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pour-quoi-faire", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pour-qui", priority: 0.8, changeFrequency: "monthly" },
    { path: "/comment", priority: 0.8, changeFrequency: "monthly" },
    { path: "/combien", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://delphinedelapeyriere.fr";
    const lastModified = new Date();

    return ROUTES.map(({ path, priority, changeFrequency }) => ({
        url: path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}
