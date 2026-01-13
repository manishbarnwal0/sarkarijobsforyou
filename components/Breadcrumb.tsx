import React from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  navigate: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, navigate }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.path ? `${window.location.origin}${item.path}` : undefined
    }))
  };

  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ol className="flex flex-wrap items-center text-sm text-gray-500 font-medium">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {item.path ? (
              <a
                href={item.path}
                onClick={navigate}
                className="hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 truncate max-w-[200px] md:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};