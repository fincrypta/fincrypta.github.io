<script>
  // Список всех статей
  const allArticles = [
    { url: "Bitkoin-obnovil-maksimum-2025-goda.html", title: "Биткоин обновил максимум 2025 года" },
    { url: "chto_budet_s_bitkoinom_posle_khalvinga.html", title: "Что будет с биткоином после халвинга" },
    { url: "binance_v_2025_godu_rabotaet_li_dlya_rossiyan.html", title: "Binance в 2025 году: работает ли для россиян?" },
    { url: "chto_takoe_defi_i_kak_ono_rabotaet_v_2025_godu.html", title: "Что такое DeFi и как оно работает в 2025 году" },
    { url: "ethereum-vs-solana-kakaya-set-luchshe-v-2025.html", title: "Ethereum vs Solana: какая сеть лучше в 2025?" },
    { url: "kak-kupit-bitkoin-za-rubli-cherez-sberbank-2025.html", title: "Как купить биткоин за рубли через Сбербанк в 2025" },
    { url: "luchshie_bitkoin-koshelki_2025_goda.html", title: "Лучшие биткоин-кошельки 2025 года" },
    { url: "vygoden_li_mayning_bitkoina_v_2025_godu.html", title: "Выгоден ли майнинг биткоина в 2025 году" },
    { url: "ethereum-chto-izmenilos-v-seti-v-2025-godu.html", title: "Ethereum 2.0: что изменилось в сети в 2025 году" },
    { url: "zakon_o_kriptovalyutakh_v_Rossii_v_2025_godu.html", title: "Закон о криптовалютах в России в 2025 году" },
    { url: "kak-nachat-investirovat-v-kriptovalyutu-v-2025-godu.html", title: "Как начать инвестировать в криптовалюту в 2025 году" },
    { url: "kak-khranit-bitcoin-v-2025-koshelki-i-bezopasnost.html", title: "Как хранить биткоин в 2025: кошельки и безопасность" },
	{ url: "top-10-perspektivnykh-altkoinov-dlya-investitsiy.html", title: "Топ-10 перспективных альткоинов для инвестиций" },
	{ url: "kak_kupit_ethereum_za_rubli_v_2025_godu.html", title: "Как купить Ethereum за рубли в 2025 году: пошаговое руководство" },
	{ url: "top-5_nadezhnykh_obmennikov_dlya_pokupki_USDT_v_Rossii.html", title: "Топ-5 надежных обменников для покупки USDT в России" },
	{ url: "Obzor_Bybit_plyusy_i_minusy_dlya_treyderov.html", title: "Обзор Bybit: плюсы и минусы для трейдеров" },
	{ url: "Trust_Wallet_rukovodstvo_dlya_novichkov.html", title: "Trust Wallet: руководство для новичков" }
  ];

  // Определяем текущую страницу
  const currentPage = window.location.pathname.split("/").pop();

  // Убираем текущую статью
  const filtered = allArticles.filter(a => a.url !== currentPage);

  // Перемешиваем массив
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Берем 3 случайные статьи
  const related = shuffle(filtered).slice(0, 3);

  // Выводим список
  const list = document.getElementById("related-list");
  related.forEach(article => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${article.url}">${article.title}</a>`;
    list.appendChild(li);
  });
</script>
