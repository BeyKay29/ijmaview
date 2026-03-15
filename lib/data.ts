import { Category, Scholar, Question } from './types';

import categoriesData from '@/data/categories/categories.json';
import scholarsData from '@/data/scholars/scholars.json';

// Tahara (19)
import taharaBeruehrung from '@/data/questions/tahara-beruehrung-wudu.json';
import taharaNagellack from '@/data/questions/tahara-nagellack-gebet.json';
import taharaSocken from '@/data/questions/tahara-socken-ueberstreichen.json';
import taharaKatze from '@/data/questions/tahara-katze-rein.json';
import taharaBlut from '@/data/questions/tahara-blut-wudu.json';
import taharaHund from '@/data/questions/tahara-hund-unrein.json';
import taharaAlkohol from '@/data/questions/tahara-alkohol-parfuem.json';
import taharaKoran from '@/data/questions/tahara-koran-beruehren-wudu.json';
import taharaHaid from '@/data/questions/tahara-haid-gebet-nachholen.json';
import taharaErbrechen from '@/data/questions/tahara-erbrechen-wudu.json';
import taharaSchlaf from '@/data/questions/tahara-schlaf-wudu.json';
import taharaLachen from '@/data/questions/tahara-lachen-wudu.json';
import taharaKhimar from '@/data/questions/tahara-khimar-streichen.json';
import taharaZopf from '@/data/questions/tahara-zopf-ghusl.json';
import taharaTayammum from '@/data/questions/tahara-tayammum-bedingungen.json.json';
import taharaFluessig from '@/data/questions/tahara-fluessigkeiten-unterscheidung.json';
import taharaGhusl from '@/data/questions/tahara-ghusl-pflicht-gruende.json';
import taharaWaschmaschine from '@/data/questions/tahara-waschmaschine-najasa.json';

// Salah (20)
import salahHaende from '@/data/questions/salah-haende-binden.json';
import salahBasmala from '@/data/questions/salah-basmala-fatiha.json';
import salahQunut from '@/data/questions/salah-qunut-fajr.json';
import salahAmin from '@/data/questions/salah-amin-laut-leise.json';
import salahZusammenlegen from '@/data/questions/salah-zusammenlegen-gebete.json';
import salahBart from '@/data/questions/salah-bart-pflicht.json';
import salahWitr from '@/data/questions/salah-witr-gebet.json';
import salahTarawih from '@/data/questions/salah-tarawih-rakat.json';
import salahQadaJahre from '@/data/questions/salah-qada-jahre.json';
import salahFahrzeug from '@/data/questions/salah-fahrzeug-beten.json';
import salahSutrah from '@/data/questions/salah-sutrah-pflicht.json';
import salahSajdah from '@/data/questions/salah-sajdah-sahw.json';
import salahJumuah from '@/data/questions/salah-jumuah-reisende.json';
import salahKleidungMann from '@/data/questions/salah-kleidung-kurz-mann.json';
import salahBaby from '@/data/questions/salah-baby-tragen.json';
import salahFinger from '@/data/questions/salah-finger-tashahhud.json';
import salahDuaGemeinsam from '@/data/questions/salah-dua-gemeinsam.json';
import salahRafAlYadayn from '@/data/questions/salah-raf-al-yadayn.json';
import salahImamSuender from '@/data/questions/salah-imam-suender.json';
import salahKirche from '@/data/questions/salah-kirche-synagoge.json';

// Siyam (12)
import siyamZahnpasta from '@/data/questions/siyam-zahnpasta-fasten.json';
import siyamAugentropfen from '@/data/questions/siyam-augentropfen-fasten.json';
import siyamErbrechen from '@/data/questions/siyam-erbrechen-fasten.json';
import siyamNiyyah from '@/data/questions/siyam-niyyah-fasten.json';
import siyamBlut from '@/data/questions/siyam-blutabnahme-fasten.json';
import siyamReisen from '@/data/questions/siyam-reisen-fasten.json';
import siyamSchwanger from '@/data/questions/siyam-schwangerschaft-fasten.json';
import siyamKuss from '@/data/questions/siyam-kuss-fasten.json';
import siyamSpritze from '@/data/questions/siyam-spritze-fasten.json';
import siyamSchwimmen from '@/data/questions/siyam-schwimmen-fasten.json';
import siyamParfuem from '@/data/questions/siyam-parfuem-fasten.json';
import siyamVergessenEssen from '@/data/questions/siyam-vergessen-essen.json';

// Zakah (5)
import zakahGoldschmuck from '@/data/questions/zakah-goldschmuck-frauen.json';
import zakahSchulden from '@/data/questions/zakah-schulden-abziehen.json';
import zakahMiete from '@/data/questions/zakah-mieteinnahmen.json';
import zakahAktien from '@/data/questions/zakah-aktien-krypto.json';
import zakahFamilie from '@/data/questions/zakah-familie-geben.json';

// Hajj (3)
import hajjUmra from '@/data/questions/hajj-umra-pflicht.json';
import hajjFrauen from '@/data/questions/hajj-frauen-mahram.json';
import hajjSchulden from '@/data/questions/hajj-schulden-hajj.json';

// Muamalat (29)
import muamalatRiba from '@/data/questions/muamalat-riba-bankzins.json';
import muamalatVersicherung from '@/data/questions/muamalat-versicherung-islam.json';
import muamalatMusik from '@/data/questions/muamalat-musik-islam.json';
import muamalatBilder from '@/data/questions/muamalat-bilder-fotos.json';
import muamalatHund from '@/data/questions/muamalat-hund-handel.json';
import muamalatKrypto from '@/data/questions/muamalat-krypto-urteil.json';
import muamalatDropshipping from '@/data/questions/muamalat-dropshipping.json';
import muamalatTattoos from '@/data/questions/muamalat-tattoos.json';
import muamalatHaareFaerben from '@/data/questions/muamalat-haare-faerben.json';
import muamalatSchminke from '@/data/questions/muamalat-schminke-oeffentlichkeit.json';
import muamalatGold from '@/data/questions/muamalat-gold-verkauf.json';
import muamalatOrganspende from '@/data/questions/muamalat-organspende.json';
import muamalatAbtreibung from '@/data/questions/muamalat-abtreibung.json';
import muamalatChirurgie from '@/data/questions/muamalat-plastische-chirurgie.json';
import muamalatAlkoholKochen from '@/data/questions/muamalat-alkohol-kochen.json';
import muamalatGelatine from '@/data/questions/muamalat-gelatine-schwein.json';
import muamalatRauchen from '@/data/questions/muamalat-rauchen-shisha.json';
import muamalatSocialMedia from '@/data/questions/muamalat-social-media.json';
import muamalatMeeresfruechte from '@/data/questions/muamalat-meeresfruechte.json';
import muamalatFleischKitab from '@/data/questions/muamalat-fleisch-kitab.json';
import muamalatAmulette from '@/data/questions/muamalat-amulette-nazar.json';
import muamalatIvf from '@/data/questions/muamalat-ivf-befruchtung.json';
import muamalatLootboxen from '@/data/questions/muamalat-lootboxen.json';
import muamalatErbeNichtmuslime from '@/data/questions/muamalat-erbe-nichtmuslime.json';
import muamalatHundWohnung from '@/data/questions/muamalat-hund-wohnung.json';
import muamalatInsekten from '@/data/questions/muamalat-insekten-essen.json';
import muamalatEuthanasie from '@/data/questions/muamalat-euthanasie.json';
import muamalatBitcoinMining from '@/data/questions/muamalat-bitcoin-mining.json';
import muamalatLeihmutterschaft from '@/data/questions/muamalat-leihmutterschaft.json';
import muamalatZaehneRichten from '@/data/questions/muamalat-zaehne-richten.json';
import muamalatNiqab from '@/data/questions/muamalat-niqab-pflicht.json';
import muamalatAdoption from '@/data/questions/muamalat-adoption-kafala.json';
import muamalatMurabaha from '@/data/questions/muamalat-murabaha-bank.json';
import muamalatWaqf from '@/data/questions/muamalat-waqf-stiftung.json';

// Nikah (13)
import nikahWali from '@/data/questions/nikah-wali-pflicht.json';
import nikahMahr from '@/data/questions/nikah-mahr-hoehe.json';
import nikahKopftuch from '@/data/questions/nikah-kopftuch-pflicht.json';
import nikahHomo from '@/data/questions/nikah-homosexualitaet-urteil.json';
import nikahScheidung from '@/data/questions/nikah-scheidung-dreifach.json';
import nikahArbeit from '@/data/questions/nikah-frau-arbeiten.json';
import nikahHaushalt from '@/data/questions/nikah-haushalt-pflichten.json';
import nikahEhevertrag from '@/data/questions/nikah-ehevertrag-bedingungen.json';
import nikahVerlobung from '@/data/questions/nikah-verlobung-grenzen.json';
import nikahVerhuetung from '@/data/questions/nikah-verhuetung.json';
import nikahKhul from '@/data/questions/nikah-khul-scheidung.json';
import nikahHadhana from '@/data/questions/nikah-hadhana-sorgerecht.json';
import nikahShuhud from '@/data/questions/nikah-shuhud-zeugen.json';

const allQuestions: Question[] = [
    // Tahara (18)
    taharaBeruehrung as Question,
    taharaNagellack as Question,
    taharaSocken as Question,
    taharaKatze as Question,
    taharaBlut as Question,
    taharaHund as Question,
    taharaAlkohol as Question,
    taharaKoran as Question,
    taharaHaid as Question,
    taharaErbrechen as Question,
    taharaSchlaf as Question,
    taharaLachen as Question,
    taharaKhimar as Question,
    taharaZopf as Question,
    taharaTayammum as Question,
    taharaFluessig as Question,
    taharaGhusl as Question,
    taharaWaschmaschine as Question,

    // Salah (20)
    salahHaende as Question,
    salahBasmala as Question,
    salahQunut as Question,
    salahAmin as Question,
    salahZusammenlegen as Question,
    salahBart as Question,
    salahWitr as Question,
    salahTarawih as Question,
    salahQadaJahre as Question,
    salahFahrzeug as Question,
    salahSutrah as Question,
    salahSajdah as Question,
    salahJumuah as Question,
    salahKleidungMann as Question,
    salahBaby as Question,
    salahFinger as Question,
    salahDuaGemeinsam as Question,
    salahRafAlYadayn as Question,
    salahImamSuender as Question,
    salahKirche as Question,

    // Siyam (12)
    siyamZahnpasta as Question,
    siyamAugentropfen as Question,
    siyamErbrechen as Question,
    siyamNiyyah as Question,
    siyamBlut as Question,
    siyamReisen as Question,
    siyamSchwanger as Question,
    siyamKuss as Question,
    siyamSpritze as Question,
    siyamSchwimmen as Question,
    siyamParfuem as Question,
    siyamVergessenEssen as Question,

    // Zakah (5)
    zakahGoldschmuck as Question,
    zakahSchulden as Question,
    zakahMiete as Question,
    zakahAktien as Question,
    zakahFamilie as Question,

    // Hajj (3)
    hajjUmra as Question,
    hajjFrauen as Question,
    hajjSchulden as Question,

    // Muamalat (34)
    muamalatRiba as Question,
    muamalatVersicherung as Question,
    muamalatMusik as Question,
    muamalatBilder as Question,
    muamalatHund as Question,
    muamalatKrypto as Question,
    muamalatDropshipping as Question,
    muamalatTattoos as Question,
    muamalatHaareFaerben as Question,
    muamalatSchminke as Question,
    muamalatGold as Question,
    muamalatOrganspende as Question,
    muamalatAbtreibung as Question,
    muamalatChirurgie as Question,
    muamalatAlkoholKochen as Question,
    muamalatGelatine as Question,
    muamalatRauchen as Question,
    muamalatSocialMedia as Question,
    muamalatMeeresfruechte as Question,
    muamalatFleischKitab as Question,
    muamalatAmulette as Question,
    muamalatIvf as Question,
    muamalatLootboxen as Question,
    muamalatErbeNichtmuslime as Question,
    muamalatHundWohnung as Question,
    muamalatInsekten as Question,
    muamalatEuthanasie as Question,
    muamalatBitcoinMining as Question,
    muamalatLeihmutterschaft as Question,
    muamalatZaehneRichten as Question,
    muamalatNiqab as Question,
    muamalatAdoption as Question,
    muamalatMurabaha as Question,
    muamalatWaqf as Question,

    // Nikah (13)
    nikahWali as Question,
    nikahMahr as Question,
    nikahKopftuch as Question,
    nikahHomo as Question,
    nikahScheidung as Question,
    nikahArbeit as Question,
    nikahHaushalt as Question,
    nikahEhevertrag as Question,
    nikahVerlobung as Question,
    nikahVerhuetung as Question,
    nikahKhul as Question,
    nikahHadhana as Question,
    nikahShuhud as Question,
];

export function getCategories(): Category[] {
    return categoriesData as Category[];
}

export function getScholars(): Scholar[] {
    return scholarsData as Scholar[];
}

export function getScholarById(id: string): Scholar | undefined {
    return getScholars().find((s) => s.id === id);
}

export function getScholarsByMadhab(madhab: string): Scholar[] {
    return getScholars().filter((s) => s.madhab === madhab);
}

export function getAllQuestions(): Question[] {
    return allQuestions;
}

export function getQuestionBySlug(slug: string): Question | undefined {
    return allQuestions.find((q) => q.slug === slug);
}

export function getQuestionById(id: string): Question | undefined {
    return allQuestions.find((q) => q.id === id);
}

export function getQuestionsByCategory(categoryId: string): Question[] {
    return allQuestions.filter((q) => q.category === categoryId);
}

export function getQuestionsBySubcategory(
    categoryId: string,
    subcategoryId: string
): Question[] {
    return allQuestions.filter(
        (q) => q.category === categoryId && q.subcategory === subcategoryId
    );
}

export function getCategoryById(id: string): Category | undefined {
    return getCategories().find((c) => c.id === id);
}

export function getQuestionCountByCategory(categoryId: string): number {
    return getQuestionsByCategory(categoryId).length;
}

export function getTotalStats(): {
    questions: number;
    opinions: number;
    sources: number;
} {
    const questions = allQuestions.length;
    const opinions = allQuestions.reduce(
        (acc, q) => acc + q.positions.length,
        0
    );
    const sources = allQuestions.reduce(
        (acc, q) => acc + q.sources.length,
        0
    );
    return { questions, opinions, sources };
}

export function getRelatedQuestions(questionIds: string[]): Question[] {
    return questionIds
        .map((id) => getQuestionById(id))
        .filter((q): q is Question => q !== undefined);
}

export function getScholarQuestions(scholarId: string): Question[] {
    return allQuestions.filter((q) =>
        q.positions.some((p) => p.scholars.includes(scholarId))
    );
}
