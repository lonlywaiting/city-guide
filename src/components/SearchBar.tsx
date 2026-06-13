import { useState } from 'react';

interface City {
  id: string;
  name: string;
  nameEn: string;
  country: string;
}

interface Props {
  cities: City[];
  locale: string;
  placeholder: string;
}

export default function SearchBar({ cities, locale }: Props) {
  const [showAll, setShowAll] = useState(false);

  const displayCities = showAll ? cities : cities.slice(0, 10);

  return (
    <div className="w-full">
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'flex-start'
      }}>
        {displayCities.map((city) => (
          <a
            key={city.id}
            href={`/${locale}/cities/${city.id}`}
            style={{
              padding: '8px 18px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            className="hover:bg-white hover:border-gray-300 hover:shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-750"
          >
            {locale === 'en' ? city.nameEn : city.name}
          </a>
        ))}
      </div>

      {cities.length > 10 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: '8px 24px',
              fontSize: '0.875rem',
              color: '#6b7280',
              background: 'transparent',
              border: '1px solid #e5e7eb',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
            className="hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
          >
            {showAll ? (locale === 'en' ? 'Show Less ↑' : '收起 ↑') : (locale === 'en' ? 'Show More ↓' : '查看更多 ↓')}
          </button>
        </div>
      )}
    </div>
  );
}
