import React from 'react';
import type { Language } from '../types';
import { UI_TEXTS } from '../constants';

interface FooterProps {
    language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
    const texts = UI_TEXTS[language];
    return (
        <footer className="bg-bg-cream py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-light">
                <p>{texts.footerText}</p>
            </div>
        </footer>
    );
};
