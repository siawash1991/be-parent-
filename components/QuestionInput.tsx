import React, { useState } from 'react';
import type { Language } from '../types';
import { UI_TEXTS } from '../constants';

// Fix: Add a disabled prop to prevent input during AI response generation.
interface QuestionInputProps {
  language: Language;
  onAsk: (question: string) => void;
  disabled?: boolean;
}

export const QuestionInput: React.FC<QuestionInputProps> = ({ language, onAsk, disabled = false }) => {
  const [question, setQuestion] = useState('');
  const texts = UI_TEXTS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !disabled) {
      onAsk(question.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder={texts.inputPlaceholder}
        className="w-full p-4 pe-32 md:pe-40 text-base border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition resize-none disabled:bg-gray-100"
        rows={3}
        disabled={disabled}
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 end-3 flex items-center justify-center bg-primary-orange hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg shadow hover:shadow-md transition-all disabled:bg-gray-400"
        disabled={!question.trim() || disabled}
      >
        <span>{texts.buttonText}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ms-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </form>
  );
};