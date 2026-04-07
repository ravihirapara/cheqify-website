const BASE_URL = "https://cheqify.app";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(locale: string, items: BreadcrumbItem[]) {
  const breadcrumbs = [
    { name: "Home", path: "" },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}/${locale}${item.path}`,
    })),
  };
}
