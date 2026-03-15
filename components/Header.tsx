'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import { Menu, X, BookOpen } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Startseite' },
    { href: '/gelehrte', label: 'Gelehrte' },
    { href: '/merkliste', label: 'Merkliste' },
    { href: '/ueber', label: 'Über' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link href="/" className="header-logo" id="logo">
                    <BookOpen size={24} className="text-[#c9a84c]" />
                    <span className="header-logo-text">
                        Ijma<span className="text-[#c9a84c]">View</span>
                    </span>
                </Link>

                <nav className="header-nav" aria-label="Hauptnavigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`header-nav-link ${pathname === link.href ? 'active' : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header-search-wrapper">
                    <SearchBar variant="compact" />
                </div>

                <button
                    className="header-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Menü öffnen"
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="mobile-nav"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mobile-nav-inner">
                            <div className="mobile-search-wrapper">
                                <SearchBar variant="compact" />
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`mobile-nav-link ${pathname === link.href ? 'active' : ''
                                        }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
