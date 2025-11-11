import React from 'react';
import type { Language, Category } from '../types';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  language: Language;
  categories: Category[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ language, categories }) => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.slug} language={language} category={category} />
      ))}
    </div>
  );
};
