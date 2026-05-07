type Crumb = {
  name: string;
  url: string;
};

type Props = {
  items: Crumb[];
};

const BASE_URL = "https://delphinedelapeyriere.fr";

export default function BreadcrumbSchema({ items }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
