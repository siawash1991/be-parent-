import React, { useState } from 'react';
import type { Language } from '../types';
import { UI_TEXTS, CATEGORIES, POPULAR_QUESTIONS } from '../constants';
import { QuestionInput } from './QuestionInput';
import { CategoryGrid } from './CategoryGrid';
import { PopularQuestions } from './PopularQuestions';
// Fix: Import the AI service and response type to make the component functional.
import { getAIAnswer } from '../services/geminiService';
import type { AIResponse } from '../services/geminiService';


interface HomePageProps {
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const texts = UI_TEXTS[language];
  // Fix: Add state for loading, AI response, and errors.
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Fix: Implement the async handler to call the AI service and manage state.
  const handleAskQuestion = async (question: string) => {
    console.log(`Asking question in ${language}: "${question}"`);
    setIsLoading(true);
    setAiResponse(null);
    setError(null);
    try {
      const response = await getAIAnswer(question, language);
      setAiResponse(response);
    } catch (e) {
      setError('Sorry, something went wrong while getting your answer. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-text-dark leading-tight">
          {texts.title}
        </h1>
        <p className="mt-4 text-md md:text-lg text-text-light max-w-2xl mx-auto">
          {texts.subtitle}
        </p>
      </div>

      <div className="mt-8 md:mt-12 max-w-2xl mx-auto">
        <QuestionInput language={language} onAsk={handleAskQuestion} disabled={isLoading} />
      </div>

      {/* Fix: Add a section to display loading, error, or the AI response. */}
      <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
        {isLoading && (
            <div className="flex justify-center items-center p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
                <p className="ms-4 text-text-light">Getting your guidance...</p>
            </div>
        )}
        {error && <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">{error}</div>}
        {aiResponse && (
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-text-dark">✨ Here's your guidance</h2>
            <p className="mt-4 text-text-dark leading-relaxed whitespace-pre-wrap">{aiResponse.answer}</p>
            
            {aiResponse.sources && aiResponse.sources.length > 0 && (
                <>
                    <h3 className="text-xl font-bold text-text-dark mt-6">Sources</h3>
                    <ul className="mt-2 space-y-2">
                        {aiResponse.sources.map(source => (
                        <li key={source.id} className="text-sm">
                            <a href="#" className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                                <span className="text-primary-blue">🔗</span>
                                <span className="ms-2 text-text-light hover:underline">{source.title}</span>
                            </a>
                        </li>
                        ))}
                    </ul>
                </>
            )}

            {aiResponse.relatedQuestions && aiResponse.relatedQuestions.length > 0 && (
                <>
                    <h3 className="text-xl font-bold text-text-dark mt-6">Related Questions</h3>
                    <ul className="mt-2 space-y-2">
                        {aiResponse.relatedQuestions.map((q, i) => (
                        <li key={i}>
                            <a href="#" className="block p-3 bg-gray-50 text-text-dark font-medium rounded-md hover:bg-gray-100 transition-colors">
                            {q}
                            </a>
                        </li>
                        ))}
                    </ul>
                </>
            )}
          </div>
        )}
      </div>

      <div className="mt-16 md:mt-24">
        <h2 className="text-2xl font-bold text-center text-text-dark">{texts.categoriesTitle}</h2>
        <CategoryGrid language={language} categories={CATEGORIES} />
      </div>

      <div className="mt-16 md:mt-24">
        <h2 className="text-2xl font-bold text-center text-text-dark">{texts.popularQuestionsTitle}</h2>
        <PopularQuestions language={language} questions={POPULAR_QUESTIONS} />
      </div>
    </div>
  );
};