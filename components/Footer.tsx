import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <BookOpen size={20} className="text-[#c9a84c]" />
                        <span className="footer-logo-text">
                            Ijma<span className="text-[#c9a84c]">View</span>
                        </span>
                    </div>
                    <p className="footer-desc">
                        Islamische Rechtsmeinungen im Überblick – quellenbasiert, neutral, vergleichbar.
                    </p>
                </div>
                <div className="footer-links">
                    <h4 className="footer-links-title">Navigation</h4>
                    <Link href="/" className="footer-link">Startseite</Link>
                    <Link href="/gelehrte" className="footer-link">Gelehrte</Link>
                    <Link href="/merkliste" className="footer-link">Merkliste</Link>
                    <Link href="/ueber" className="footer-link">Über IjmaView</Link>
                </div>
                <div className="footer-note">
                    <p>
                        Erstellt mit dem Anspruch auf Neutralität und Quellenbasierung.
                        IjmaView ist keine Fatwa-Seite und gibt keine eigenen Empfehlungen.
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} IjmaView. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}
