import React from 'react';
import type { Language, PopularQuestion } from '../types';
import { CATEGORIES } from '../constants';

interface PopularQuestionsProps {
  language: Language;
  questions: PopularQuestion[];
}

const colorClasses: { [key: string]: string } = {
    'primary-blue': 'bg-primary-blue',
    'primary-orange': 'bg-primary-orange',
    'primary-pink': 'bg-primary-pink',
    'primary-green': 'bg-primary-green',
    'primary-yellow': 'bg-primary-yellow',
    'primary-cyan': 'bg-primary-cyan',
};

export const PopularQuestions: React.FC<PopularQuestionsProps> = ({ language, questions }) => {
  return (
    <div className="mt-8 max-w-3xl mx-auto space-y-4">
      {questions.map((q) => {
        const category = CATEGORIES.find(c => c.slug === q.categorySlug);
        const accentColor = category ? colorClasses[category.color] : 'bg-gray-400';
        return (
          <a
            key={q.id}
            href="#"
            className="block p-4 bg-white border-s-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ borderLeftColor: `var(--color-${category?.color})` }}
          >
            <p className="text-text-dark font-medium">{q.question[language]}</p>
          </a>
        );
      })}
    </div>
  );
};
