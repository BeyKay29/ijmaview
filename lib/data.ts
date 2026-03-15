import { Category, Scholar, Question } from './types';

import categoriesData from '@/data/categories/categories.json';
import scholarsData from '@/data/scholars/scholars.json';

import hajjArten from '@/data/questions/hajj-arten.json';
import hajjFrauenGruppe from '@/data/questions/hajj-frauen-gruppe.json';
import hajjFrauenMahram from '@/data/questions/hajj-frauen-mahram.json';
import hajjFuerAndere from '@/data/questions/hajj-fuer-andere.json';
import hajjHaareFrauen from '@/data/questions/hajj-haare-frauen.json';
import hajjIhramFlug from '@/data/questions/hajj-ihram-flug.json';
import hajjJamaratVertreter from '@/data/questions/hajj-jamarat-vertreter.json';
import hajjMuzdalifahPflicht from '@/data/questions/hajj-muzdalifah-pflicht.json';
import hajjParfuemIhram from '@/data/questions/hajj-parfuem-ihram.json';
import hajjSchuldenHajj from '@/data/questions/hajj-schulden-hajj.json';
import hajjSchuldenPrivat from '@/data/questions/hajj-schulden-privat.json';
import hajjUmraPflicht from '@/data/questions/hajj-umra-pflicht.json';
import hajjUmraRamadan from '@/data/questions/hajj-umra-ramadan.json';
import muamalatAbtreibung from '@/data/questions/muamalat-abtreibung.json';
import muamalatAdoptionKafala from '@/data/questions/muamalat-adoption-kafala.json';
import muamalatAktienReinigung from '@/data/questions/muamalat-aktien-reinigung.json';
import muamalatAktienhandel from '@/data/questions/muamalat-aktienhandel.json';
import muamalatAlkoholKochen from '@/data/questions/muamalat-alkohol-kochen.json';
import muamalatAmuletteNazar from '@/data/questions/muamalat-amulette-nazar.json';
import muamalatAugenbraueZupfen from '@/data/questions/muamalat-augenbraue-zupfen.json';
import muamalatBilderFotos from '@/data/questions/muamalat-bilder-fotos.json';
import muamalatBitcoinMining from '@/data/questions/muamalat-bitcoin-mining.json';
import muamalatBonuspunkte from '@/data/questions/muamalat-bonuspunkte.json';
import muamalatCashback from '@/data/questions/muamalat-cashback.json';
import muamalatDropshippingHalal from '@/data/questions/muamalat-dropshipping-halal.json';
import muamalatDropshipping from '@/data/questions/muamalat-dropshipping.json';
import muamalatErbe2Zu1 from '@/data/questions/muamalat-erbe-2zu1.json';
import muamalatErbeNichtmuslime from '@/data/questions/muamalat-erbe-nichtmuslime.json';
import muamalatEuthanasie from '@/data/questions/muamalat-euthanasie.json';
import muamalatFleischKitab from '@/data/questions/muamalat-fleisch-kitab.json';
import muamalatFrauenFriedhof from '@/data/questions/muamalat-frauen-friedhof.json';
import muamalatGelatineSchwein from '@/data/questions/muamalat-gelatine-schwein.json';
import muamalatGoldSeideMann from '@/data/questions/muamalat-gold-seide-mann.json';
import muamalatGoldVerkauf from '@/data/questions/muamalat-gold-verkauf.json';
import muamalatGoldkaufOnline from '@/data/questions/muamalat-goldkauf-online.json';
import muamalatHaareExtensions from '@/data/questions/muamalat-haare-extensions.json';
import muamalatHaareFaerben from '@/data/questions/muamalat-haare-faerben.json';
import muamalatHauskaufKredit from '@/data/questions/muamalat-hauskauf-kredit.json';
import muamalatHundHandel from '@/data/questions/muamalat-hund-handel.json';
import muamalatHundSpeichel from '@/data/questions/muamalat-hund-speichel.json';
import muamalatHundWohnung from '@/data/questions/muamalat-hund-wohnung.json';
import muamalatInsektenEssen from '@/data/questions/muamalat-insekten-essen.json';
import muamalatIsbalKnoechel from '@/data/questions/muamalat-isbal-knoechel.json';
import muamalatIvfBefruchtung from '@/data/questions/muamalat-ivf-befruchtung.json';
import muamalatKreditkartenGebuehr from '@/data/questions/muamalat-kreditkarten-gebuehr.json';
import muamalatKryptowaehrungHalal from '@/data/questions/muamalat-kryptowaehrung-halal.json';
import muamalatLeihmutterschaft from '@/data/questions/muamalat-leihmutterschaft.json';
import muamalatLootboxen from '@/data/questions/muamalat-lootboxen.json';
import muamalatMeeresfruechte from '@/data/questions/muamalat-meeresfruechte.json';
import muamalatMietkaufHalal from '@/data/questions/muamalat-mietkauf-halal.json';
import muamalatMurabahaBank from '@/data/questions/muamalat-murabaha-bank.json';
import muamalatMusikIslam from '@/data/questions/muamalat-musik-islam.json';
import muamalatNiqabPflicht from '@/data/questions/muamalat-niqab-pflicht.json';
import muamalatOrganspendeUrteil from '@/data/questions/muamalat-organspende-urteil.json';
import muamalatParfuemAlkohol from '@/data/questions/muamalat-parfuem-alkohol.json';
import muamalatPlastischeChirurgie from '@/data/questions/muamalat-plastische-chirurgie.json';
import muamalatRauchenShisha from '@/data/questions/muamalat-rauchen-shisha.json';
import muamalatRibaBankzins from '@/data/questions/muamalat-riba-bankzins.json';
import muamalatSchminkeOeffentlichkeit from '@/data/questions/muamalat-schminke-oeffentlichkeit.json';
import muamalatSocialMedia from '@/data/questions/muamalat-social-media.json';
import muamalatTattoosIslam from '@/data/questions/muamalat-tattoos-islam.json';
import muamalatTestamentNichtmuslime from '@/data/questions/muamalat-testament-nichtmuslime.json';
import muamalatVersicherung from '@/data/questions/muamalat-versicherung.json';
import muamalatVerzugszinsen from '@/data/questions/muamalat-verzugszinsen.json';
import muamalatWaqfStiftung from '@/data/questions/muamalat-waqf-stiftung.json';
import muamalatZaehneRichten from '@/data/questions/muamalat-zaehne-richten.json';
import nikahEheringeGold from '@/data/questions/nikah-eheringe-gold.json';
import nikahEhevertragBedingungen from '@/data/questions/nikah-ehevertrag-bedingungen.json';
import nikahErziehungMischehe from '@/data/questions/nikah-erziehung-mischehe.json';
import nikahFrauArbeiten from '@/data/questions/nikah-frau-arbeiten.json';
import nikahHadhanaSorgerecht from '@/data/questions/nikah-hadhana-sorgerecht.json';
import nikahHaushaltPflichten from '@/data/questions/nikah-haushalt-pflichten.json';
import nikahHomosexualitaetUrteil from '@/data/questions/nikah-homosexualitaet-urteil.json';
import nikahKhulScheidung from '@/data/questions/nikah-khul-scheidung.json';
import nikahKopftuchPflicht from '@/data/questions/nikah-kopftuch-pflicht.json';
import nikahMahrHoehe from '@/data/questions/nikah-mahr-hoehe.json';
import nikahMahrSpaeter from '@/data/questions/nikah-mahr-spaeter.json';
import nikahMilchgeschwister from '@/data/questions/nikah-milchgeschwister.json';
import nikahMutahUrteil from '@/data/questions/nikah-mutah-urteil.json';
import nikahOnlineTrauung from '@/data/questions/nikah-online-trauung.json';
import nikahPolygamieGesetz from '@/data/questions/nikah-polygamie-gesetz.json';
import nikahScheidungDreifach from '@/data/questions/nikah-scheidung-dreifach.json';
import nikahScheidungGewalt from '@/data/questions/nikah-scheidung-gewalt.json';
import nikahShuhudZeugen from '@/data/questions/nikah-shuhud-zeugen.json';
import nikahStandesamt from '@/data/questions/nikah-standesamt.json';
import nikahSterilisation from '@/data/questions/nikah-sterilisation.json';
import nikahUnterhaltIdda from '@/data/questions/nikah-unterhalt-idda.json';
import nikahVerhuetung from '@/data/questions/nikah-verhuetung.json';
import nikahVerlobungGrenzen from '@/data/questions/nikah-verlobung-grenzen.json';
import nikahWaliPflicht from '@/data/questions/nikah-wali-pflicht.json';
import salahAminLautLeise from '@/data/questions/salah-amin-laut-leise.json';
import salahBabyTragen from '@/data/questions/salah-baby-tragen.json';
import salahBartPflicht from '@/data/questions/salah-bart-pflicht.json';
import salahBasmalaFatiha from '@/data/questions/salah-basmala-fatiha.json';
import salahDuaGemeinsam from '@/data/questions/salah-dua-gemeinsam.json';
import salahDuaQunutWitr from '@/data/questions/salah-dua-qunut-witr.json';
import salahFahrzeugBeten from '@/data/questions/salah-fahrzeug-beten.json';
import salahFatihaFehler from '@/data/questions/salah-fatiha-fehler.json';
import salahFingerTashahhud from '@/data/questions/salah-finger-tashahhud.json';
import salahGebetUnterbrechung from '@/data/questions/salah-gebet-unterbrechung.json';
import salahHaendeBinden from '@/data/questions/salah-haende-binden.json';
import salahHosenUmschlagen from '@/data/questions/salah-hosen-umschlagen.json';
import salahImamBeineFrei from '@/data/questions/salah-imam-beine-frei.json';
import salahImamSuender from '@/data/questions/salah-imam-suender.json';
import salahJamaahFrauen from '@/data/questions/salah-jamaah-frauen.json';
import salahJumuahReisende from '@/data/questions/salah-jumuah-reisende.json';
import salahJumuahZuspaet from '@/data/questions/salah-jumuah-zuspaet.json';
import salahKircheSynagoge from '@/data/questions/salah-kirche-synagoge.json';
import salahKleidungKurzMann from '@/data/questions/salah-kleidung-kurz-mann.json';
import salahQadaJahre from '@/data/questions/salah-qada-jahre.json';
import salahQunutFajr from '@/data/questions/salah-qunut-fajr.json';
import salahRafAlYadayn from '@/data/questions/salah-raf-al-yadayn.json';
import salahSajdahSahw from '@/data/questions/salah-sajdah-sahw.json';
import salahSajdahTilaawah from '@/data/questions/salah-sajdah-tilaawah.json';
import salahSujudSahwStelle from '@/data/questions/salah-sujud-sahw-stelle.json';
import salahSutrahPflicht from '@/data/questions/salah-sutrah-pflicht.json';
import salahTarawihRakat from '@/data/questions/salah-tarawih-rakat.json';
import salahTasbihNachGebet from '@/data/questions/salah-tasbih-nach-gebet.json';
import salahWitrGebet from '@/data/questions/salah-witr-gebet.json';
import salahZusammenlegenGebete from '@/data/questions/salah-zusammenlegen-gebete.json';
import siyamAshuraArafa from '@/data/questions/siyam-ashura-arafa.json';
import siyamAugentropfenFasten from '@/data/questions/siyam-augentropfen-fasten.json';
import siyamBlutabnahmeFasten from '@/data/questions/siyam-blutabnahme-fasten.json';
import siyamBlutspendeFasten from '@/data/questions/siyam-blutspende-fasten.json';
import siyamEiseninfusion from '@/data/questions/siyam-eiseninfusion.json';
import siyamErbrechenFasten from '@/data/questions/siyam-erbrechen-fasten.json';
import siyamErbrechenUnabsichtlich from '@/data/questions/siyam-erbrechen-unabsichtlich.json';
import siyamFastenNordpol from '@/data/questions/siyam-fasten-nordpol.json';
import siyamFidyaVerstorbene from '@/data/questions/siyam-fidya-verstorbene.json';
import siyamGeschmackstest from '@/data/questions/siyam-geschmackstest.json';
import siyamHijamaFasten from '@/data/questions/siyam-hijama-fasten.json';
import siyamInhalatorAsthma from '@/data/questions/siyam-inhalator-asthma.json';
import siyamKussFasten from '@/data/questions/siyam-kuss-fasten.json';
import siyamNikotinPflaster from '@/data/questions/siyam-nikotin-pflaster.json';
import siyamNiyyahFasten from '@/data/questions/siyam-niyyah-fasten.json';
import siyamParfuemFasten from '@/data/questions/siyam-parfuem-fasten.json';
import siyamReisenFasten from '@/data/questions/siyam-reisen-fasten.json';
import siyamSchwangerschaftFasten from '@/data/questions/siyam-schwangerschaft-fasten.json';
import siyamSchwimmenFasten from '@/data/questions/siyam-schwimmen-fasten.json';
import siyamSpritzeFasten from '@/data/questions/siyam-spritze-fasten.json';
import siyamVergessenEssen from '@/data/questions/siyam-vergessen-essen.json';
import siyamZahnarztSpritze from '@/data/questions/siyam-zahnarzt-spritze.json';
import siyamZahnpastaFasten from '@/data/questions/siyam-zahnpasta-fasten.json';
import taharaAlkoholParfuem from '@/data/questions/tahara-alkohol-parfuem.json';
import taharaBeruehrungWudu from '@/data/questions/tahara-beruehrung-wudu.json';
import taharaBlutWudu from '@/data/questions/tahara-blut-wudu.json';
import taharaErbrechenNajasa from '@/data/questions/tahara-erbrechen-najasa.json';
import taharaErbrechenWudu from '@/data/questions/tahara-erbrechen-wudu.json';
import taharaFluessigkeitenUnterscheidung from '@/data/questions/tahara-fluessigkeiten-unterscheidung.json';
import taharaGhuslMakeup from '@/data/questions/tahara-ghusl-makeup.json';
import taharaGhuslPflichtGruende from '@/data/questions/tahara-ghusl-pflicht-gruende.json';
import taharaHaidGebetNachholen from '@/data/questions/tahara-haid-gebet-nachholen.json';
import taharaHundUnrein from '@/data/questions/tahara-hund-unrein.json';
import taharaIstijmarTuecher from '@/data/questions/tahara-istijmar-tuecher.json';
import taharaKatzeRein from '@/data/questions/tahara-katze-rein.json';
import taharaKhimarStreichen from '@/data/questions/tahara-khimar-streichen.json';
import taharaKoranBeruehrenWudu from '@/data/questions/tahara-koran-beruehren-wudu.json';
import taharaLachenWudu from '@/data/questions/tahara-lachen-wudu.json';
import taharaNagellackGebet from '@/data/questions/tahara-nagellack-gebet.json';
import taharaNajasaAlkohol from '@/data/questions/tahara-najasa-alkohol.json';
import taharaSchlafWudu from '@/data/questions/tahara-schlaf-wudu.json';
import taharaSockenUeberstreichen from '@/data/questions/tahara-socken-ueberstreichen.json';
import taharaTayammumBedingungen from '@/data/questions/tahara-tayammum-bedingungen.json';
import taharaWaschmaschineNajasa from '@/data/questions/tahara-waschmaschine-najasa.json';
import taharaWuduBeruehrungMahram from '@/data/questions/tahara-wudu-beruehrung-mahram.json';
import taharaWuduBlutMenge from '@/data/questions/tahara-wudu-blut-menge.json';
import taharaWuduCamelfleisch from '@/data/questions/tahara-wudu-camelfleisch.json';
import taharaWuduNagelKaue from '@/data/questions/tahara-wudu-nagel-kaue.json';
import taharaWuduSpruehpflaster from '@/data/questions/tahara-wudu-spruehpflaster.json';
import taharaWuduZweifel from '@/data/questions/tahara-wudu-zweifel.json';
import taharaZopfGhusl from '@/data/questions/tahara-zopf-ghusl.json';
import zakahAktienKrypto from '@/data/questions/zakah-aktien-krypto.json';
import zakahEdelsteine from '@/data/questions/zakah-edelsteine.json';
import zakahFamilieGeben from '@/data/questions/zakah-familie-geben.json';
import zakahFitrGeld from '@/data/questions/zakah-fitr-geld.json';
import zakahGeschaeftsinventar from '@/data/questions/zakah-geschaeftsinventar.json';
import zakahGoldschmuckFrauen from '@/data/questions/zakah-goldschmuck-frauen.json';
import zakahImmobilienVermietet from '@/data/questions/zakah-immobilien-vermietet.json';
import zakahKinderSparbuch from '@/data/questions/zakah-kinder-sparbuch.json';
import zakahMieteinnahmen from '@/data/questions/zakah-mieteinnahmen.json';
import zakahNisabWert from '@/data/questions/zakah-nisab-wert.json';
import zakahPensionskasse from '@/data/questions/zakah-pensionskasse.json';
import zakahSchuldenAbziehen from '@/data/questions/zakah-schulden-abziehen.json';
import zakahSchuldenGefordert from '@/data/questions/zakah-schulden-gefordert.json';
import zakahSteuererklaerung from '@/data/questions/zakah-steuererklaerung.json';
import zakahStipendium from '@/data/questions/zakah-stipendium.json';

const allQuestions: Question[] = [
    // Tahara (28)
    taharaAlkoholParfuem as Question,
    taharaBeruehrungWudu as Question,
    taharaBlutWudu as Question,
    taharaErbrechenNajasa as Question,
    taharaErbrechenWudu as Question,
    taharaFluessigkeitenUnterscheidung as Question,
    taharaGhuslMakeup as Question,
    taharaGhuslPflichtGruende as Question,
    taharaHaidGebetNachholen as Question,
    taharaHundUnrein as Question,
    taharaIstijmarTuecher as Question,
    taharaKatzeRein as Question,
    taharaKhimarStreichen as Question,
    taharaKoranBeruehrenWudu as Question,
    taharaLachenWudu as Question,
    taharaNagellackGebet as Question,
    taharaNajasaAlkohol as Question,
    taharaSchlafWudu as Question,
    taharaSockenUeberstreichen as Question,
    taharaTayammumBedingungen as Question,
    taharaWaschmaschineNajasa as Question,
    taharaWuduBeruehrungMahram as Question,
    taharaWuduBlutMenge as Question,
    taharaWuduCamelfleisch as Question,
    taharaWuduNagelKaue as Question,
    taharaWuduSpruehpflaster as Question,
    taharaWuduZweifel as Question,
    taharaZopfGhusl as Question,

    // Salah (30)
    salahAminLautLeise as Question,
    salahBabyTragen as Question,
    salahBartPflicht as Question,
    salahBasmalaFatiha as Question,
    salahDuaGemeinsam as Question,
    salahDuaQunutWitr as Question,
    salahFahrzeugBeten as Question,
    salahFatihaFehler as Question,
    salahFingerTashahhud as Question,
    salahGebetUnterbrechung as Question,
    salahHaendeBinden as Question,
    salahHosenUmschlagen as Question,
    salahImamBeineFrei as Question,
    salahImamSuender as Question,
    salahJamaahFrauen as Question,
    salahJumuahReisende as Question,
    salahJumuahZuspaet as Question,
    salahKircheSynagoge as Question,
    salahKleidungKurzMann as Question,
    salahQadaJahre as Question,
    salahQunutFajr as Question,
    salahRafAlYadayn as Question,
    salahSajdahSahw as Question,
    salahSajdahTilaawah as Question,
    salahSujudSahwStelle as Question,
    salahSutrahPflicht as Question,
    salahTarawihRakat as Question,
    salahTasbihNachGebet as Question,
    salahWitrGebet as Question,
    salahZusammenlegenGebete as Question,

    // Siyam (23)
    siyamAshuraArafa as Question,
    siyamAugentropfenFasten as Question,
    siyamBlutabnahmeFasten as Question,
    siyamBlutspendeFasten as Question,
    siyamEiseninfusion as Question,
    siyamErbrechenFasten as Question,
    siyamErbrechenUnabsichtlich as Question,
    siyamFastenNordpol as Question,
    siyamFidyaVerstorbene as Question,
    siyamGeschmackstest as Question,
    siyamHijamaFasten as Question,
    siyamInhalatorAsthma as Question,
    siyamKussFasten as Question,
    siyamNikotinPflaster as Question,
    siyamNiyyahFasten as Question,
    siyamParfuemFasten as Question,
    siyamReisenFasten as Question,
    siyamSchwangerschaftFasten as Question,
    siyamSchwimmenFasten as Question,
    siyamSpritzeFasten as Question,
    siyamVergessenEssen as Question,
    siyamZahnarztSpritze as Question,
    siyamZahnpastaFasten as Question,

    // Zakah (15)
    zakahAktienKrypto as Question,
    zakahEdelsteine as Question,
    zakahFamilieGeben as Question,
    zakahFitrGeld as Question,
    zakahGeschaeftsinventar as Question,
    zakahGoldschmuckFrauen as Question,
    zakahImmobilienVermietet as Question,
    zakahKinderSparbuch as Question,
    zakahMieteinnahmen as Question,
    zakahNisabWert as Question,
    zakahPensionskasse as Question,
    zakahSchuldenAbziehen as Question,
    zakahSchuldenGefordert as Question,
    zakahSteuererklaerung as Question,
    zakahStipendium as Question,

    // Hajj (13)
    hajjArten as Question,
    hajjFrauenGruppe as Question,
    hajjFrauenMahram as Question,
    hajjFuerAndere as Question,
    hajjHaareFrauen as Question,
    hajjIhramFlug as Question,
    hajjJamaratVertreter as Question,
    hajjMuzdalifahPflicht as Question,
    hajjParfuemIhram as Question,
    hajjSchuldenHajj as Question,
    hajjSchuldenPrivat as Question,
    hajjUmraPflicht as Question,
    hajjUmraRamadan as Question,

    // Muamalat (53)
    muamalatAbtreibung as Question,
    muamalatAdoptionKafala as Question,
    muamalatAktienReinigung as Question,
    muamalatAktienhandel as Question,
    muamalatAlkoholKochen as Question,
    muamalatAmuletteNazar as Question,
    muamalatAugenbraueZupfen as Question,
    muamalatBilderFotos as Question,
    muamalatBitcoinMining as Question,
    muamalatBonuspunkte as Question,
    muamalatCashback as Question,
    muamalatDropshipping as Question,
    muamalatDropshippingHalal as Question,
    muamalatErbe2Zu1 as Question,
    muamalatErbeNichtmuslime as Question,
    muamalatEuthanasie as Question,
    muamalatFleischKitab as Question,
    muamalatFrauenFriedhof as Question,
    muamalatGelatineSchwein as Question,
    muamalatGoldSeideMann as Question,
    muamalatGoldVerkauf as Question,
    muamalatGoldkaufOnline as Question,
    muamalatHaareExtensions as Question,
    muamalatHaareFaerben as Question,
    muamalatHauskaufKredit as Question,
    muamalatHundHandel as Question,
    muamalatHundSpeichel as Question,
    muamalatHundWohnung as Question,
    muamalatInsektenEssen as Question,
    muamalatIsbalKnoechel as Question,
    muamalatIvfBefruchtung as Question,
    muamalatKreditkartenGebuehr as Question,
    muamalatKryptowaehrungHalal as Question,
    muamalatLeihmutterschaft as Question,
    muamalatLootboxen as Question,
    muamalatMeeresfruechte as Question,
    muamalatMietkaufHalal as Question,
    muamalatMurabahaBank as Question,
    muamalatMusikIslam as Question,
    muamalatNiqabPflicht as Question,
    muamalatOrganspendeUrteil as Question,
    muamalatParfuemAlkohol as Question,
    muamalatPlastischeChirurgie as Question,
    muamalatRauchenShisha as Question,
    muamalatRibaBankzins as Question,
    muamalatSchminkeOeffentlichkeit as Question,
    muamalatSocialMedia as Question,
    muamalatTattoosIslam as Question,
    muamalatTestamentNichtmuslime as Question,
    muamalatVersicherung as Question,
    muamalatVerzugszinsen as Question,
    muamalatWaqfStiftung as Question,
    muamalatZaehneRichten as Question,

    // Nikah (24)
    nikahEheringeGold as Question,
    nikahEhevertragBedingungen as Question,
    nikahErziehungMischehe as Question,
    nikahFrauArbeiten as Question,
    nikahHadhanaSorgerecht as Question,
    nikahHaushaltPflichten as Question,
    nikahHomosexualitaetUrteil as Question,
    nikahKhulScheidung as Question,
    nikahKopftuchPflicht as Question,
    nikahMahrHoehe as Question,
    nikahMahrSpaeter as Question,
    nikahMilchgeschwister as Question,
    nikahMutahUrteil as Question,
    nikahOnlineTrauung as Question,
    nikahPolygamieGesetz as Question,
    nikahScheidungDreifach as Question,
    nikahScheidungGewalt as Question,
    nikahShuhudZeugen as Question,
    nikahStandesamt as Question,
    nikahSterilisation as Question,
    nikahUnterhaltIdda as Question,
    nikahVerhuetung as Question,
    nikahVerlobungGrenzen as Question,
    nikahWaliPflicht as Question,
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
