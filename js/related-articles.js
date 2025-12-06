// Список всех статей
const allArticles = [
  { url: "/blog/articles/Bitkoin-obnovil-maksimum-2025-goda.html", title: "Биткоин обновил максимум 2025 года" },
  { url: "/blog/articles/chto_budet_s_bitkoinom_posle_khalvinga.html", title: "Что будет с биткоином после халвинга" },
  { url: "/blog/articles/binance_v_2025_godu_rabotaet_li_dlya_rossiyan.html", title: "Binance в 2025 году: работает ли для россиян?" },
  { url: "/blog/articles/chto_takoe_defi_i_kak_ono_rabotaet_v_2025_godu.html", title: "Что такое DeFi и как оно работает в 2025 году" },
  { url: "/blog/articles/ethereum-vs-solana-kakaya-set-luchshe-v-2025.html", title: "Ethereum vs Solana: какая сеть лучше в 2025?" },
  { url: "/blog/articles/kak-kupit-bitkoin-za-rubli-cherez-sberbank-2025.html", title: "Как купить биткоин за рубли через Сбербанк в 2025" },
  { url: "/blog/articles/luchshie_bitkoin-koshelki_2025_goda.html", title: "Лучшие биткоин-кошельки 2025 года" },
  { url: "/blog/articles/vygoden_li_mayning_bitkoina_v_2025_godu.html", title: "Выгоден ли майнинг биткоина в 2025 году" },
  { url: "/blog/articles/ethereum-chto-izmenilos-v-seti-v-2025-godu.html", title: "Ethereum 2.0: что изменилось в сети в 2025 году" },
  { url: "/blog/articles/zakon_o_kriptovalyutakh_v_Rossii_v_2025_godu.html", title: "Закон о криптовалютах в России в 2025 году" },
  { url: "/blog/articles/kak-nachat-investirovat-v-kriptovalyutu-v-2025-godu.html", title: "Как начать инвестировать в криптовалюту в 2025 году" },
  { url: "/blog/articles/kak-khranit-bitcoin-v-2025-koshelki-i-bezopasnost.html", title: "Как хранить биткоин в 2025: кошельки и безопасность" },
  { url: "/blog/articles/top-10-perspektivnykh-altkoinov-dlya-investitsiy.html", title: "Топ-10 перспективных альткоинов для инвестиций" },
  { url: "/blog/articles/kak_kupit_ethereum_za_rubli_v_2025_godu.html", title: "Как купить Ethereum за рубли в 2025 году: пошаговое руководство" },
  { url: "/blog/articles/top-5_nadezhnykh_obmennikov_dlya_pokupki_USDT_v_Rossii.html", title: "Топ-5 надежных обменников для покупки USDT в России" },
  { url: "/blog/articles/Obzor_Bybit_plyusy_i_minusy_dlya_treyderov.html", title: "Обзор Bybit: плюсы и минусы для трейдеров" },
  { url: "/blog/articles/Trust_Wallet_rukovodstvo_dlya_novichkov.html", title: "Trust Wallet: руководство для новичков" },
  { url: "/blog/articles/Chto_luchshe_mayning_ili_steyking.html", title: "Что лучше: майнинг или стейкинг?" },
  { url: "/blog/articles/Top-5_DeFi-platform_dlya_passivnogo_dokhoda.html", title: "Топ-5 DeFi-платформ для пассивного дохода" },
  { url: "/blog/articles/Kak_banki_otnosyatsya_k_kriptovalyutam_v_RF.html", title: "Как банки относятся к криптовалютам в РФ" },
  { url: "/blog/articles/Dolgosrochnye_investitsii_v_BTC_i_ETH.html", title: "Долгосрочные инвестиции в BTC и ETH: стратегия HODL" },
  { url: "/blog/articles/Kak_zapusk_ETF_na_bitkoin_povliyal_na_rynok.html", title: "Как запуск ETF на биткоин повлиял на рынок" },
  { url: "/blog/articles/Sravnenie_pokupki_BTC_cherez_P2P_i_birzhu.html", title: "Сравнение покупки BTC через P2P и биржу" },
  { url: "/blog/articles/TON_kak_kupit_i_gde_khranit_v_2025_godu.html", title: "TON: как купить и где хранить в 2025 году" },
  { url: "/blog/articles/Kak_kupit_kriptovalyutu_cherez_Tinkoff_Bank_v_2025_godu.html", title: "Как купить криптовалюту через Тинькофф Банк в 2025 году" },
  { url: "/blog/articles/Kak_proyti_verifikatsiyu_na_OKX_v_2025_godu.html", title: "Как пройти верификацию на OKX в 2025 году" },
  { url: "/blog/articles/Metamask_poshagovaya_instruktsiya_po_nastroike.html", title: "Metamask: пошаговая инструкция по настройке" },
  { url: "/blog/articles/Kak_steikat_Ethereum_i_poluchat_dokhod.html", title: "Как стейкать Ethereum 2.0 и получать доход" },
  { url: "/blog/articles/Kak_zarabotat_na_farminge_likvidnosti.html", title: "Как заработать на фарминге ликвидности" },
  { url: "/blog/articles/Nalogooblozhenie_dokhodov_ot_kriptovalyut.html", title: "Налогообложение доходов от криптовалют" },
  { url: "/blog/articles/Kak_sostavit_kriptoportfel_v_2025.html", title: "Как составить криптопортфель в 2025" },
  { url: "/blog/articles/Rossiya_i_kriptovalyuty_novye_zakony_2025_goda.html", title: "Россия и криптовалюты: новые законы 2025 года" },
  { url: "/blog/articles/Bitkoin_kak_sredstvo_zashchity_ot_inflyatsii_v_Rossii.html", title: "Биткоин как средство защиты от инфляции в России" },
  { url: "/blog/articles/Obzor_Polkadot_i_ego_perspektivy.html", title: "Обзор Polkadot и его перспективы" },
  { url: "/blog/articles/Sravnenie_P2P-platform_Binance_vs_Bybit_vs_OKX.html", title: "Сравнение P2P-платформ: Binance vs Bybit vs OKX" },
  { url: "/blog/articles/TOP-5_birzh_dlya_torgovli_s_rublyami.html", title: "ТОП-5 бирж для торговли с рублями" },
  { url: "/blog/articles/Kholodnye_koshelki_Ledger_i_Trezor_kakoy_vybrat.html", title: "Холодные кошельки Ledger и Trezor: какой выбрать?" }
];

// Определяем текущую страницу
//const currentFile = window.location.pathname.split("/").pop();
// Определяем текущую страницу
const currentPath = window.location.pathname;
const currentFile = currentPath === "/" ? null : currentPath.split("/").pop();

// Исключаем текущую статью
const filtered = currentFile
  ? allArticles.filter(a => !a.url.endsWith(currentFile))
  : allArticles;


// Исключаем текущую статью
//const filtered = allArticles.filter(a => !a.url.endsWith(currentFile));

// Перемешиваем и берём 3 случайных
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
const related = shuffle(filtered).slice(0, 3);

// Выводим в блок
const list = document.getElementById("related-list");
if (list && related.length > 0) {
  related.forEach(article => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${article.url}">${article.title}</a>`;
    list.appendChild(li);
  });
}
