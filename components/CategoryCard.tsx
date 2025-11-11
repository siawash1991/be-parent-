import React from 'react';
import type { Language, Category } from '../types';

interface CategoryCardProps {
  language: Language;
  category: Category;
}

const colorClasses: { [key: string]: string } = {
    'primary-blue': 'bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-blue',
    'primary-orange': 'bg-primary-orange/20 hover:bg-primary-orange/30 text-primary-orange',
    'primary-pink': 'bg-primary-pink/20 hover:bg-primary-pink/30 text-primary-pink',
    'primary-green': 'bg-primary-green/20 hover:bg-primary-green/30 text-primary-green',
    'primary-yellow': 'bg-primary-yellow/20 hover:bg-primary-yellow/30 text-primary-yellow',
    'primary-cyan': 'bg-primary-cyan/20 hover:bg-primary-cyan/30 text-primary-cyan',
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ language, category }) => {
  const bgColorClass = colorClasses[category.color] || 'bg-gray-200';
  
  return (
    <a href="#" className={`group flex flex-col items-center justify-center p-4 text-center rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${bgColorClass}`}>
      <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">{category.emoji}</div>
      <h3 className="font-semibold text-sm md:text-base text-text-dark">{category.name[language]}</h3>
    </a>
  );
};
