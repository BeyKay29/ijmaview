'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="page-container">
            <motion.div
                className="about-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className="section-title">Über IjmaView</h1>

                <h2>Vision & Mission</h2>
                <p>
                    IjmaView möchte den Zugang zu den klassischen Meinungsverschiedenheiten
                    der islamischen Rechtswissenschaft (Fiqh) erleichtern. Wir stellen die
                    dokumentierten Positionen der großen Gelehrten und Rechtsschulen
                    strukturiert und vergleichbar dar – quellenbasiert, neutral und ohne
                    eigene Wertung.
                </p>
                <p>
                    Unser Ziel ist es, Muslimen die Vielfalt der gelehrten Meinungen
                    zugänglich zu machen, damit sie sich informiert und eigenständig mit
                    den Argumenten der verschiedenen Rechtsschulen auseinandersetzen können.
                </p>

                <h2>Was IjmaView NICHT ist</h2>
                <p>
                    IjmaView ist ausdrücklich <strong>keine Fatwa-Seite</strong>. Wir geben
                    keine eigenen religiösen Empfehlungen und sprechen keine Urteile aus.
                    Für individuelle religiöse Fragen wende dich bitte an einen
                    qualifizierten Gelehrten deines Vertrauens.
                </p>

                <h2>Methodik</h2>
                <p>
                    Alle dargestellten Gelehrtenmeinungen stammen aus anerkannten
                    Fiqh-Enzyklopädien und vertrauenswürdigen Datenbanken:
                </p>
                <ul>
                    <li>
                        <strong>Al-Mawsu&apos;a al-Fiqhiyya al-Kuwaitiyya</strong> – Die
                        umfassendste rechtsschulübergreifende Fiqh-Enzyklopädie
                    </li>
                    <li>
                        <strong>Bidayat al-Mujtahid</strong> (Ibn Rushd) – Systematische
                        Gegenüberstellung der Gelehrtenmeinungen
                    </li>
                    <li>
                        <strong>Al-Fiqh ala al-Madhahib al-Arba&apos;a</strong> (Al-Jaziri) –
                        Modernes Standardwerk zu allen vier Rechtsschulen
                    </li>
                    <li>
                        <strong>Shamela.ws, IslamQA.info, IslamWeb.net, Dorar.net</strong> –
                        Vertrauenswürdige Online-Datenbanken
                    </li>
                </ul>

                <h2>Grundsätze</h2>
                <ul>
                    <li>
                        Meinungen werden <strong>übernommen, nicht abgeleitet</strong> – wir
                        interpretieren keine Hadithe oder Koranverse eigenständig
                    </li>
                    <li>
                        Beweisketten zeigen, welche Belege die <strong>Gelehrten selbst</strong>{' '}
                        für ihre Positionen angeführt haben
                    </li>
                    <li>
                        Eine Meinung wird nur aufgenommen, wenn sie in mindestens einer
                        anerkannten Quelle dokumentiert ist
                    </li>
                    <li>
                        Im Zweifel wird eine Position <strong>weggelassen</strong> – lieber
                        eine Meinung weniger als eine falsche Zuordnung
                    </li>
                </ul>

                <h2>Geplanter Redaktionsbeirat</h2>
                <p>
                    Wir planen die Einrichtung eines Redaktionsbeirats aus
                    islamwissenschaftlichen Fachleuten, die die Inhalte regelmäßig
                    überprüfen und qualitätssichern. Dies befindet sich derzeit in
                    Vorbereitung.
                </p>

                <h2>Kontakt</h2>
                <p>
                    Für Anmerkungen, Korrekturen oder Fragen erreichst du uns unter:{' '}
                    <a href="mailto:kontakt@ijmaview.de">kontakt@ijmaview.de</a>
                </p>
            </motion.div>
        </div>
    );
}
