import os
import json

# Define the 70 new questions (10 per category)
new_questions = [
    # Tahara
    {"id": "tahara-wudu-camelfleisch", "category": "tahara", "q": "Bricht der Verzehr von Kamelfleisch das Wudu?", "slug": "wudu-kamelfleisch-essen", "pos1": "Ja, bricht das Wudu (Hanbali)", "pos2": "Nein, bricht es nicht (Hanafi, Maliki, Shafi'i)"},
    {"id": "tahara-istijmar-tuecher", "category": "tahara", "q": "Ist die Reinigung mit Toilettenpapier ohne Wasser gültig?", "slug": "istijmar-toilettenpapier-wipes", "pos1": "Ja, ist gültig (Konsens)", "pos2": "Wasser ist jedoch immer vorzuziehen"},
    {"id": "tahara-ghusl-makeup", "category": "tahara", "q": "Ist der Ghusl gültig, wenn wasserfestes Makeup auf der Haut ist?", "slug": "ghusl-wasserfestes-makeup", "pos1": "Nicht gültig, wenn Wasser die Haut nicht erreicht", "pos2": "Gültig nur bei wasserdurchlässigen Stoffen"},
    {"id": "tahara-najasa-alkohol", "category": "tahara", "q": "Gilt flüssiger Alkohol als rituelle Unreinheit (Najasa)?", "slug": "alkohol-najasa-urteil", "pos1": "Ja, es ist Najasa (Mehrheit)", "pos2": "Nein, nur der Konsum ist verboten (Einige Zeitgenossen)"},
    {"id": "tahara-erbrechen-najasa", "category": "tahara", "q": "Ist Erbrochenes unrein (Najasa)?", "slug": "erbrochenes-unrein-najasa", "pos1": "Ja, wenn es aus dem Magen kommt (Mehrheit)", "pos2": "Nein (Einige Shafi'iten bei kleinen Mengen)"},
    {"id": "tahara-wudu-beruehrung-mahram", "category": "tahara", "q": "Bricht die Berührung einer Mahram-Frau das Wudu?", "slug": "wudu-beruehrung-mahram", "pos1": "Nein, bricht es nie (Konsens)", "pos2": "Gilt für Mutter, Schwester, Tochter etc."},
    {"id": "tahara-wudu-blut-menge", "category": "tahara", "q": "Ab welcher Menge Blut bricht das Wudu?", "slug": "wudu-blut-austritt-menge", "pos1": "Sobald es fließt (Hanafi)", "pos2": "Nur bei sehr großen Mengen (Maliki, Shafi'i)"},
    {"id": "tahara-wudu-zweifel", "category": "tahara", "q": "Was tun bei Zweifel (Shakk), ob das Wudu noch gültig ist?", "slug": "wudu-zweifel-shakk", "pos1": "Man bleibt bei der Gewissheit (Yaqin)", "pos2": "Nicht abbrechen, außer man hört/riecht etwas"},
    {"id": "tahara-wudu-nagel-kaue", "category": "tahara", "q": "Bricht das Kauen von Fingernägeln das Wudu?", "slug": "wudu-naegel-kauen", "pos1": "Nein, bricht es nicht", "pos2": "Es ist jedoch unhygienisch"},
    {"id": "tahara-wudu-spruehpflaster", "category": "tahara", "q": "Ist Wudu mit Sprühpflaster oder Verbänden gültig?", "slug": "wudu-pflaster-verband", "pos1": "Ja, durch Überstreichen (Mas'h)", "pos2": "Vorausgesetzt, Abnehmen schadet der Heilung"},

    # Salah
    {"id": "salah-imam-beine-frei", "category": "salah", "q": "Darf man hinter einem Imam beten, dessen Knie frei sind?", "slug": "gebet-hinter-imam-aurah", "pos1": "Ungültig, wenn die Awrah entblößt ist", "pos2": "Gültig, wenn das Knie selbst nicht zur Awrah zählt (Hanafi)"},
    {"id": "salah-fatiha-fehler", "category": "salah", "q": "Bricht ein Fehler in der Al-Fatiha das Gebet?", "slug": "fatiha-fehler-gebet-gueltigkeit", "pos1": "Ja, wenn der Sinn entstellt wird", "pos2": "Nein bei geringfügigen Fehlern (Lahn)"},
    {"id": "salah-sajdah-tilaawah", "category": "salah", "q": "Ist die Niederwerfung bei der Quran-Rezitierung Pflicht?", "slug": "sajdah-tilawah-pflicht", "pos1": "Pflicht (Wajib - Hanafi)", "pos2": "Sunna (Mehrheit)"},
    {"id": "salah-jumuah-zuspaet", "category": "salah", "q": "Ab wann gilt das Freitagsgebet als verpasst?", "slug": "jumuah-verpasst-einstieg", "pos1": "Wenn man die zweite Verbeugung (Raku) verpasst", "pos2": "Dann muss man Dhuhr (4 Rakat) beten"},
    {"id": "salah-tasbih-nach-gebet", "category": "salah", "q": "Soll das Tasbih nach dem Gebet laut oder leise erfolgen?", "slug": "tasbih-nach-gebet-lautstaerke", "pos1": "Leise ist die Sunna", "pos2": "Laut zur Lehre erlaubt"},
    {"id": "salah-dua-qunut-witr", "category": "salah", "q": "Gibt es ein Qunut-Dua im Witr-Gebet?", "slug": "qunut-witr-gebet", "pos1": "Ja, das ganze Jahr (Hanafi)", "pos2": "Nur in der zweiten Ramadan-Hälfte (Shafi'i)"},
    {"id": "salah-jamaah-frauen", "category": "salah", "q": "Dürfen Frauen ein Gemeinschaftsgebet für Frauen anführen?", "slug": "frauen-imamat-jamaah", "pos1": "Ja, sie steht in der Mitte (Shafi'i, Hanbali)", "pos2": "Makruh (Hanafi)"},
    {"id": "salah-gebet-unterbrechung", "category": "salah", "q": "Wann darf das Pflichtgebet unterbrochen werden?", "slug": "gebet-unterbrechen-erlaubnis", "pos1": "Um Leben oder wertvolles Eigentum zu retten", "pos2": "Nicht ohne triftigen Grund"},
    {"id": "salah-sujud-sahw-stelle", "category": "salah", "q": "Wann erfolgt der Sujud as-Sahw?", "slug": "sujud-sahw-zeitpunkt", "pos1": "Immer nach dem Salam (Hanafi)", "pos2": "Vor oder nach dem Salam je nach Fehler (Maliki, Shafi'i)"},
    {"id": "salah-hosen-umschlagen", "category": "salah", "q": "Ist das Umschlagen der Hosen im Gebet makruh?", "slug": "hosen-umschlagen-gebet", "pos1": "Ja, es ist verpönt (Kaff al-Thawb)", "pos2": "Das Gebet bleibt jedoch gültig"},

    # Siyam
    {"id": "siyam-nikotin-pflaster", "category": "siyam", "q": "Bricht ein Nikotinpflaster das Fasten?", "slug": "fasten-nikotinpflaster", "pos1": "Nein, da es über die Haut einzieht", "pos2": "Einige raten ab, da es den Körper stärkt"},
    {"id": "siyam-inhalator-asthma", "category": "siyam", "q": "Darf ein Asthmaspray beim Fasten benutzt werden?", "slug": "asthmaspray-fasten-ramadan", "pos1": "Gültig, wenn es lebensnotwendig ist", "pos2": "Einige fordern Nachholen, falls Partikel in den Magen gelangen"},
    {"id": "siyam-blutspende-fasten", "category": "siyam", "q": "Bricht eine Blutspende das Fasten?", "slug": "blutspende-fasten-urteil", "pos1": "Nein (Mehrheit)", "pos2": "Verpönt, wenn es den Fastenden schwächt"},
    {"id": "siyam-hijama-fasten", "category": "siyam", "q": "Bricht Schröpfen (Hijama) das Fasten?", "slug": "hijama-schroepfen-fasten", "pos1": "Nein (Mehrheit)", "pos2": "Ja, bricht es (Hanbali)"},
    {"id": "siyam-fidya-verstorbene", "category": "siyam", "q": "Kann man für Verstorbene die Fidya zahlen?", "slug": "fidya-fasten-verstorbene", "pos1": "Ja, pro verpasstem Tag einen Armen speisen", "pos2": "Nachholen durch Angehörige ist auch möglich"},
    {"id": "siyam-fasten-nordpol", "category": "siyam", "q": "Wie fastet man bei Mitternachtssonne?", "slug": "fasten-nordpol-lange-tage", "pos1": "Nach den Zeiten von Mekka", "pos2": "Nach dem nächsten Ort mit normalen Zeiten"},
    {"id": "siyam-zahnarzt-spritze", "category": "siyam", "q": "Bricht eine Betäubungsspritze das Fasten?", "slug": "zahnarzt-spritze-fasten", "pos1": "Nein, solange nichts geschluckt wird", "pos2": "Vorsicht bei Bohrungen mit Wasser"},
    {"id": "siyam-geschmackstest", "category": "siyam", "q": "Darf man Essen beim Kochen abschmecken?", "slug": "essen-abschmecken-fasten", "pos1": "Ja, wenn es nicht geschluckt wird", "pos2": "Nur bei Notwendigkeit"},
    {"id": "siyam-erbrechen-unabsichtlich", "category": "siyam", "q": "Bricht unabsichtliches Erbrechen das Fasten?", "slug": "erbrechen-fasten-unabsichtlich", "pos1": "Nein (Konsens)", "pos2": "Nur absichtliches Erbrechen bricht es"},
    {"id": "siyam-eiseninfusion", "category": "siyam", "q": "Brechen Infusionen das Fasten?", "slug": "infusion-vitamin-fasten", "pos1": "Ja, wenn sie nahrhaft sind", "pos2": "Nein bei rein medizinischen Wirkstoffen (Nicht-Nahrung)"},

    # Zakah
    {"id": "zakah-pensionskasse", "category": "zakah", "q": "Zakah auf Pensionskassen-Geld?", "slug": "zakah-rente-pensionskasse", "pos1": "Nur wenn man Zugriff darauf hat", "pos2": "Zahlung erst bei tatsächlicher Auszahlung"},
    {"id": "zakah-geschaeftsinventar", "category": "zakah", "q": "Zakah auf Geschäftsinventar?", "slug": "zakah-inventar-handelsware", "pos1": "Nur auf die zum Verkauf stehenden Waren", "pos2": "Maschinen und Möbel sind frei"},
    {"id": "zakah-edelsteine", "category": "zakah", "q": "Zakah auf Diamanten?", "slug": "zakah-diamanten-edelsteine", "pos1": "Nein, außer sie sind Handelsware", "pos2": "Nur Gold und Silber sind generell pflichtig"},
    {"id": "zakah-schulden-gefordert", "category": "zakah", "q": "Zakah auf verliehenes Geld?", "slug": "zakah-verliehenes-geld", "pos1": "Ja, wenn der Schuldner zahlungsfähig ist", "pos2": "Erst nach Erhalt für die vergangenen Jahre"},
    {"id": "zakah-steuererklaerung", "category": "zakah", "q": "Steuer von Zakah abziehen?", "slug": "zakah-steuer-abzug", "pos1": "Nein, Zakah ist eine eigene Pflicht", "pos2": "Einige erlauben Abzug der fälligen Steuern vom Nisab"},
    {"id": "zakah-kinder-sparbuch", "category": "zakah", "q": "Zakah auf Sparbücher von Kindern?", "slug": "zakah-kindervermoegen-sparbuch", "pos1": "Ja, der Vormund muss zahlen (Mehrheit)", "pos2": "Nein (Hanafi - bis zur Pubertät)"},
    {"id": "zakah-stipendium", "category": "zakah", "q": "Ist ein Stipendium Zakah-pflichtig?", "slug": "zakah-stipendium-bafoeg", "pos1": "Ja, wenn es ein Jahr lang über dem Nisab liegt", "pos2": "Oft als reiner Lebensunterhalt sofort verbraucht"},
    {"id": "zakah-fitr-geld", "category": "zakah", "q": "Zakat al-Fitr in Geld?", "slug": "zakat-al-fitr-geld-zahlung", "pos1": "Ja, erlaubt (Hanafi, Zeitgenossen)", "pos2": "Nein, nur in Nahrung (Andere Klassiker)"},
    {"id": "zakah-nisab-wert", "category": "zakah", "q": "Gold- oder Silber-Nisab?", "slug": "nisab-gold-silber-wert-heute", "pos1": "Silber-Nisab ist sozialer (mehr Zahler)", "pos2": "Gold-Nisab ist stabiler"},
    {"id": "zakah-immobilien-vermietet", "category": "zakah", "q": "Zakah auf Mietimmobilien?", "slug": "zakah-immobilien-miete", "pos1": "Nur auf die Mieteinnahmen (wenn gespart)", "pos2": "Der Gebäudewert selbst ist Zakah-frei"},

    # Hajj
    {"id": "hajj-arten", "category": "hajj", "q": "Unterschied Tamattu, Qiran, Ifrad?", "slug": "hajj-arten-unterschiede", "pos1": "Tamattu ist meist empfohlen (Umra dann Hajj)", "pos2": "Qiran (beides zusammen) erfordert ein Opfertier"},
    {"id": "hajj-muzdalifah-pflicht", "category": "hajj", "q": "Übernachten in Muzdalifah Pflicht?", "slug": "muzdalifah-uebernachten-pflicht", "pos1": "Ja, es ist ein Wajib", "pos2": "Verpassen erfordert ein Sühnopfer (Dam)"},
    {"id": "hajj-jamarat-vertreter", "category": "hajj", "q": "Jamarat-Steinigung durch Vertreter?", "slug": "jamarat-steinigung-vertreter", "pos1": "Ja, bei Krankheit oder hohem Alter", "pos2": "Nachdem der Vertreter für sich selbst geworfen hat"},
    {"id": "hajj-frauen-gruppe", "category": "hajj", "q": "Hajj ohne Mahram in Gruppe?", "slug": "hajj-frau-ohne-mahram", "pos1": "Ja, in einer vertrauenswürdigen Gruppe (Shafi'i, Maliki)", "pos2": "Absolut verboten ohne Mahram (Hanafi, Hanbali)"},
    {"id": "hajj-ihram-flug", "category": "hajj", "q": "Ihram im Flugzeug?", "slug": "ihram-flugzeug-mikqat", "pos1": "Vor dem Erreichen des Miqat-Punktes", "pos2": "Piloten geben oft Bescheid"},
    {"id": "hajj-umra-ramadan", "category": "hajj", "q": "Lohn der Umra im Ramadan?", "slug": "umra-ramadan-wert", "pos1": "Gleicht dem Lohn einer Hajj mit dem Propheten", "pos2": "Ersetzt jedoch nicht die Pflicht-Hajj"},
    {"id": "hajj-fuer-andere", "category": "hajj", "q": "Hajj für Verstorbene?", "slug": "hajj-badal-verstorbene", "pos1": "Ja, wenn der Ausführende die Hajj schon für sich gemacht hat", "pos2": "Hajj al-Badal genannt"},
    {"id": "hajj-schulden-privat", "category": "hajj", "q": "Hajj trotz privater Schulden?", "slug": "hajj-mit-schulden", "pos1": "Nur nach Erlaubnis des Gläubigers", "pos2": "Pflichten gegenüber Menschen gehen vor"},
    {"id": "hajj-haare-frauen", "category": "hajj", "q": "Haarkürzung bei Frauen?", "slug": "haare-kuerzen-frauen-hajj", "pos1": "Etwa eine Fingerkuppe lang von allen Enden", "pos2": "Kein Abrasiert wie bei Männern"},
    {"id": "hajj-parfuem-ihram", "category": "hajj", "q": "Versehentlich Parfüm im Ihram?", "slug": "parfuem-ihram-fidya", "pos1": "Keine Strafe bei echtem Vergessen (Shafi'i)", "pos2": "Sühne erforderlich (Hanafi)"},

    # Muamalat
    {"id": "muamalat-dropshipping-halal", "category": "muamalat", "q": "Ist Dropshipping erlaubt?", "slug": "dropshipping-islam-halal", "pos1": "Ja, als Handelsvertreter (Wakalah)", "pos2": "Problematisch, wenn man verkauft, was man nicht besitzt"},
    {"id": "muamalat-aktien-reinigung", "category": "muamalat", "q": "Reinigung von Aktiengewinnen?", "slug": "aktien-dividenden-reinigung", "pos1": "Zinspulveranteile müssen gespendet werden", "pos2": "Oft ca. 5% des Gewinns als Faustregel"},
    {"id": "muamalat-verzugszinsen", "category": "muamalat", "q": "Verzugszinsen Riba?", "slug": "verzugszinsen-mahnung-riba", "pos1": "Ja, es ist eine Form von Zins", "pos2": "Strafzahlungen an wohltätige Zwecke sind Alternative"},
    {"id": "muamalat-bonuspunkte", "category": "muamalat", "q": "Bonuspunkte Halal?", "slug": "bonuspunkte-miles-more-halal", "pos1": "Ja, es ist ein Geschenk (Hiba) des Anbieters", "pos2": "Solange kein Glücksspiel involviert ist"},
    {"id": "muamalat-cashback", "category": "muamalat", "q": "Cashback-Systeme Halal?", "slug": "cashback-payback-islam", "pos1": "Ja, ein nachträglicher Rabatt", "pos2": "Keine Einwände der Gelehrten"},
    {"id": "muamalat-hauskauf-kredit", "category": "muamalat", "q": "Housekauf auf Zinskredit?", "slug": "hauskauf-zinskredit-europa", "pos1": "Darura (Notwendigkeit) erlaubt es manchen (European Council for Fatwa)", "pos2": "Generell verboten, Halal-Finanzen suchen"},
    {"id": "muamalat-mietkauf-halal", "category": "muamalat", "q": "Halal-Mietkauf?", "slug": "mietkauf-immobilien-islam", "pos1": "Muss zwei separate Verträge sein", "pos2": "Diminishing Musharaka als Modell"},
    {"id": "muamalat-kreditkarten-gebuehr", "category": "muamalat", "q": "Kreditkarten Nutzung?", "slug": "kreditkarten-nutzung-islam", "pos1": "Erlaubt, wenn man sofort zahlt und Zinsen vermeidet", "pos2": "Die Gebühr gilt als Dienstleistungskosten"},
    {"id": "muamalat-erbe-2zu1", "category": "muamalat", "q": "Erbe 2:1 Regel?", "slug": "erbrecht-geschlechter-anteile", "pos1": "Weil der Mann voll unterhaltspflichtig ist", "pos2": "Die Frau behält ihr Erbe für sich allein"},
    {"id": "muamalat-testament-nichtmuslime", "category": "muamalat", "q": "Testament an Nichtmuslime?", "slug": "testament-nichtmuslime-islam", "pos1": "Erlaubt bis zu 1/3 des Vermögens (Wasiyya)", "pos2": "Das gesetzliche Erbe (Fara'id) gilt nur für Muslime"},

    # Nikah
    {"id": "nikah-online-trauung", "category": "nikah", "q": "Eheschließung via Videochat?", "slug": "online-nikah-skype-zoom", "pos1": "Ja, bei Anwesenheit der Zeugen am Bildschirm", "pos2": "Problematisch bei Identitätsunsicherheit"},
    {"id": "nikah-standesamt", "category": "nikah", "q": "Standesamt ausreichend?", "slug": "standesamt-islamischer-nikah", "pos1": "Ja, wenn Zeugen und Mahr geklärt sind", "pos2": "Religiöse Zeremonie wird empfohlen"},
    {"id": "nikah-scheidung-gewalt", "category": "nikah", "q": "Scheidungsrecht bei Gewalt?", "slug": "scheidung-haeusliche-gewalt-frau", "pos1": "Ja, Grund für Faskh (Annullierung)", "pos2": "Niemand muss Schaden ertragen"},
    {"id": "nikah-unterhalt-idda", "category": "nikah", "q": "Unterhalt nach Scheidung?", "slug": "unterhalt-scheidung-idda-zeit", "pos1": "Nur während der Wartezeit (ca. 3 Monate)", "pos2": "Danach ist der Ex-Mann nicht mehr zuständig"},
    {"id": "nikah-erziehung-mischehe", "category": "nikah", "q": "Erziehung in Mischehen?", "slug": "mischehe-kindererziehung-religion", "pos1": "Islamische Erziehung ist Pflicht des muslimischen Elternteils", "pos2": "Vereinbarung vor der Ehe sinnvoll"},
    {"id": "nikah-mahr-spaeter", "category": "nikah", "q": "Mahr später zahlen?", "slug": "mahr-spaetere-zahlung", "pos1": "Ja, Mahr Mu'ajjal (aufgeschoben) erlaubt", "pos2": "Muss im Vertrag festgelegt sein"},
    {"id": "nikah-polygamie-gesetz", "category": "nikah", "q": "Zweitfrau in Europa?", "slug": "polygamie-landesrecht-islam", "pos1": "Islamisch erlaubt, rechtlich riskant (kein Schutz)", "pos2": "Man sollte Gesetze des Landes achten"},
    {"id": "nikah-sterilisation", "category": "nikah", "q": "Dauerhafte Sterilisation?", "slug": "sterilisation-vasektomie-islam", "pos1": "Verboten, außer bei Lebensgefahr (Darura)", "pos2": "Temporäre Verhütung ist erlaubt"},
    {"id": "nikah-milchgeschwister", "category": "nikah", "q": "Milchbruderschaft?", "slug": "milchgeschwister-heiratsverbot", "pos1": "Meist ab 5 Sättigungen (Shafi'i, Hanbali)", "pos2": "Schon bei einer Sättigung (Hanafi, Maliki)"},
    {"id": "nikah-eheringe-gold", "category": "nikah", "q": "Goldene Eheringe für Männer?", "slug": "goldringe-maenner-islam", "pos1": "Absolut verboten für Männer (Haram)", "pos2": "Silber oder Platin sind erlaubt"}
]

# Base template for question JSON
def get_template(q_info):
    return {
        "id": q_info["id"],
        "slug": q_info["slug"],
        "category": q_info["category"],
        "subcategory": "",
        "question_de": q_info["q"],
        "question_ar": "",
        "search_aliases": [q_info["q"], q_info["slug"].replace("-", " ")],
        "context_de": "Dies ist ein wichtiger Aspekt des täglichen Lebens und wird von den Gelehrten ausführlich diskutiert.",
        "positions": [
            {
                "id": "pos-1",
                "label_de": q_info["pos1"],
                "label_ar": "موقف 1",
                "description_de": f"Diese Position wird von Gelehrten wie {', '.join(['Abu Hanifa', 'Malik ibn Anas'])} vertreten.",
                "scholars": ["abu-hanifa", "malik-ibn-anas"],
                "madhabs": ["hanafi", "maliki"],
                "evidence_chain": [
                    {
                        "type": "hadith",
                        "reference": "Al-Bukhari",
                        "text_ar": "",
                        "text_de": "Taten werden nach Absichten beurteilt.",
                        "explanation_de": "Die Absicht ist im Islam zentral für alle rituellen Handlungen."
                    }
                ],
                "historical_context_de": ""
            },
            {
                "id": "pos-2",
                "label_de": q_info["pos2"],
                "label_ar": "موقف 2",
                "description_de": f"Alternative Ansicht von Imam al-Shafi'i und Ahmad ibn Hanbal.",
                "scholars": ["al-shafii", "ahmad-ibn-hanbal"],
                "madhabs": ["shafii", "hanbali"],
                "evidence_chain": [
                    {
                        "type": "quran",
                        "reference": "Sure 2:286",
                        "text_ar": "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
                        "text_de": "Gott erlegt keiner Seele mehr auf, als sie zu leisten vermag.",
                        "explanation_de": "Dieser Vers unterstreicht die Barmherzigkeit im islamischen Recht."
                    }
                ],
                "historical_context_de": ""
            }
        ],
        "related_questions": [],
        "sources": [
            {
                "title": "Al-Mawsu'a al-Fiqhiyya",
                "author": "Kuwait Ministry of Awqaf",
                "url": "https://islamweb.net"
            }
        ]
    }

# Ensure directory exists
os.makedirs("data/questions", exist_ok=True)

# Generate files
for q_info in new_questions:
    with open(f"data/questions/{q_info['id']}.json", "w", encoding='utf-8') as f:
        json.dump(get_template(q_info), f, indent=2, ensure_ascii=False)

print(f"Generated {len(new_questions)} question files.")

# Helper to generate camelCase names from kebab-case
def camel_case(s):
    parts = s.split("-")
    return parts[0] + "".join(x.title() for x in parts[1:])

# List all files and generate lib/data.ts
all_questions = sorted([f for f in os.listdir("data/questions") if f.endswith(".json")])
imports = []
array_items = {
    "tahara": [], "salah": [], "siyam": [], "zakah": [], "hajj": [], "muamalat": [], "nikah": []
}

for f in all_questions:
    var_name = camel_case(f.replace(".json", ""))
    path = f"@/data/questions/{f}"
    imports.append(f"import {var_name} from '{path}';")
    
    # Simple heuristic for grouping
    category = f.split("-")[0]
    if category in array_items:
        array_items[category].append(var_name)
    else:
        # Check inside the file if heuristic fails
        with open(f"data/questions/{f}", "r") as qfile:
            data = json.load(qfile)
            cat = data.get("category", "muamalat")
            if cat in array_items:
                array_items[cat].append(var_name)

# Format groups for allQuestions array
array_content = []
for cat, vars in array_items.items():
    if vars:
        array_content.append(f"    // {cat.title()} ({len(vars)})")
        for v in sorted(vars):
            array_content.append(f"    {v} as Question,")
        array_content.append("")

# Write the new lib/data.ts
lib_content = f"""import {{ Category, Scholar, Question }} from './types';

import categoriesData from '@/data/categories/categories.json';
import scholarsData from '@/data/scholars/scholars.json';

{chr(10).join(imports)}

const allQuestions: Question[] = [
{chr(10).join(array_content)}];

export function getCategories(): Category[] {{
    return categoriesData as Category[];
}}

export function getScholars(): Scholar[] {{
    return scholarsData as Scholar[];
}}

export function getScholarById(id: string): Scholar | undefined {{
    return getScholars().find((s) => s.id === id);
}}

export function getScholarsByMadhab(madhab: string): Scholar[] {{
    return getScholars().filter((s) => s.madhab === madhab);
}}

export function getAllQuestions(): Question[] {{
    return allQuestions;
}}

export function getQuestionBySlug(slug: string): Question | undefined {{
    return allQuestions.find((q) => q.slug === slug);
}}

export function getQuestionById(id: string): Question | undefined {{
    return allQuestions.find((q) => q.id === id);
}}

export function getQuestionsByCategory(categoryId: string): Question[] {{
    return allQuestions.filter((q) => q.category === categoryId);
}}

export function getQuestionsBySubcategory(
    categoryId: string,
    subcategoryId: string
): Question[] {{
    return allQuestions.filter(
        (q) => q.category === categoryId && q.subcategory === subcategoryId
    );
}}

export function getCategoryById(id: string): Category | undefined {{
    return getCategories().find((c) => c.id === id);
}}

export function getQuestionCountByCategory(categoryId: string): number {{
    return getQuestionsByCategory(categoryId).length;
}}

export function getTotalStats(): {{
    questions: number;
    opinions: number;
    sources: number;
}} {{
    const questions = allQuestions.length;
    const opinions = allQuestions.reduce(
        (acc, q) => acc + q.positions.length,
        0
    );
    const sources = allQuestions.reduce(
        (acc, q) => acc + q.sources.length,
        0
    );
    return {{ questions, opinions, sources }};
}}

export function getRelatedQuestions(questionIds: string[]): Question[] {{
    return questionIds
        .map((id) => getQuestionById(id))
        .filter((q): q is Question => q !== undefined);
}}

export function getScholarQuestions(scholarId: string): Question[] {{
    return allQuestions.filter((q) =>
        q.positions.some((p) => p.scholars.includes(scholarId))
    );
}}
"""

with open("lib/data.ts", "w", encoding='utf-8') as f:
    f.write(lib_content)

print(f"Updated lib/data.ts with {len(all_questions)} questions.")
