// Данные — из материалов питомника (PDF «Из Дома МаДаМи»). Обновлять здесь.
const DOGS = [
  { name: "SHULVI ROZAN ESTAMPA MADAMY", born: "22.10.2009", parents: "о. Zennenhund Rossii Magnat · м. Kim (imp. Slovenia)",
    titles: "Юный чемпион России и Молдовы, чемпион России, Молдовы, Украины, РФЛС, 2 × чемпион РКФ, 3 × CACIB, BIG, BIS J.", hd: true },
  { name: "ROYZ IZ DOMA MADAMY", born: "11.05.2011", parents: "о. Shulvi Rozan Zidan · м. Shulvi Rozan Estampa",
    titles: "Юный чемпион России, чемпион России, чемпион РКФ, лучший представитель породы, BIG-1, BIG-2.", hd: true },
  { name: "TUTTA IZ DOMA MADAMY", born: "26.11.2011", parents: "о. Axle from the Earth’s Axis · м. Shulvi Rozan Estampa",
    titles: "Юный чемпион России, чемпион России, чемпион РКФ, CACIB, BIG, BIS.", hd: true },
  { name: "TIFFANY IZ DOMA MADAMY", born: "26.11.2011", parents: "о. Axle from the Earth’s Axis · м. Shulvi Rozan Estampa",
    titles: "Чемпион России, чемпион РКФ.", hd: true },
  { name: "ESTEL IZ DOMA MADAMY", born: "05.02.2013", parents: "о. Sennenhund Rossii Equador · м. Shulvi Rozan Estampa",
    titles: "Юный чемпион России, чемпион России, чемпион РКФ, кандидат в чемпионы клуба." },
  { name: "SENNENHUND ROSSII TONIKA MADAMI", born: "", parents: "о. Sennenhund Rossii Magnat · м. Dana Smart",
    titles: "Чемпион России, чемпион РКФ. Лучшая сука-юниор «Россия-2014», юный вице-чемпион Европы 2014." },
  { name: "SR SORBONNA MADAMY", born: "08.09.2015", parents: "о. Giorgio Armani from Swiss Star · м. SR Shangri’La", titles: "" },
  { name: "SR SANSHAIN MADAMY", born: "08.09.2015", parents: "о. Giorgio Armani from Swiss Star · м. SR Shangri’La", titles: "" },
];

// photo — файл из img/, если известно, что на снимке именно эта собака
const MALES = [
  { name: "AMOR IZ DOMA MADAMY", titles: "Вице-чемпион мира 2023", photo: "wds-2023.jpg" },
  { name: "ARCHI FOR SENNENHUND ROSSII", titles: "Чемпион мира 2016 · интерчемпион" },
  { name: "RINGO STAR IZ DOMA MADAMY", titles: "Производитель" },
  { name: "GENRIH IZ DOMA MADAMY", titles: "Производитель" },
  { name: "SENNENHUND ROSSII SPARTAK", titles: "Производитель" },
  { name: "BARD NERAWIN FOREVER", titles: "Импорт, Латвия" },
];

const LITTERS = [
  ["21.11.2025", "AMOR × CHILLI PEPPER", "Viva Victoria, Vesna"],
  ["31.08.2024", "GENRIH × CHILLI PEPPER", "Литера «Y»"],
  ["21.11.2022", "AMOR × YURA DE FLER", "Литера «N» — Nicole de Loran, Neiv, Noy, Natella, Nina Ricci"],
  ["25.09.2022", "RINGO STAR × BELANTA", "4 кобеля, 3 суки — Marshal, Maximus, Magnus, Mars, Kalvados"],
  ["01.06.2022", "RINGO STAR × KSAV’IERA", "Щенки проданы"],
  ["09.03.2022", "AMOR × HONDA", "Escobar, Ezhevika"],
  ["27.11.2021", "RINGO STAR × ESHEROLE", "3 кобеля, 4 суки"],
  ["07.03.2021", "SENNENHUND ROSSII SPARTAK × HONDA", "4 суки"],
  ["07.02.2021", "RINGO STAR × KSAV’YERA", "5 кобелей, 8 сук — Yuniti Famaly, Yunika, Yunona, Chellenger, Chicago Bull"],
  ["18.07.2019", "BARD NERAWIN FOREVER × SR SORBONNE", "Marko (Польша), Malifisenta, Lionel Messi"],
];

const FAQ = [
  ["Сколько стоит щенок?", "Зависит от помёта и класса щенка. Назовём цену при первом разговоре."],
  ["Можно ли держать гросса в квартире?", "Можно, если гулять дважды в день в любую погоду."],
  ["Как гросс относится к детям?", "Спокойно и терпеливо. С малышами всё равно нужен присмотр."],
  ["Проверяете ли вы родителей на дисплазию?", "Да. У производителей HD-A и ED-0, заключения отдаём со щенком."],
  ["Когда щенок уезжает домой?", "В два месяца, после осмотра клуба в 45 дней."],
  ["Отправляете в другие города?", "Да, и за границу. Доставку обсуждаем отдельно."],
  ["Сильно линяет?", "Дважды в год заметно, в остальное время умеренно."],
  ["Можно приехать?", "Да, по договорённости. 10 км от Воронежа по М-4."],
];

// Анатомия: черты, по которым узнают гросса. x/y — точка на фото, в % от ширины и высоты
const ANATOMY = [
  { id: "brows", x: 32.5, y: 11, name: "Бровки",
    what: "Рыжие пятна над глазами есть у каждого гросса.", why: "Без них окрас не считается правильным. А ещё ими гросс хмурится и удивляется." },
  { id: "blaze", x: 26, y: 17, name: "Белая проточина",
    what: "Белая полоса от носа на лоб.", why: "Обязательная отметина породы — вместе с белой грудью и белыми лапами." },
  { id: "chest", x: 37, y: 46, name: "Грудь тягача",
    what: "Широкая и глубокая, до локтей.", why: "Гроссы возили тележки с молоком и сыром, выносливость — отсюда." },
  { id: "size", x: 62, y: 30, name: "Самый крупный",
    what: "Кобели — до 72 см в холке, 50–70 кг.", why: "Крупнейший из четырёх швейцарских зенненхундов." },
  { id: "coat", x: 58.5, y: 43, name: "Короткая шерсть",
    what: "Плотная, до 5 см, с густым подшёрстком.", why: "Так гросса отличают от бернского зенненхунда с длинной шерстью." },
  { id: "hind", x: 74.5, y: 55, name: "Задние ноги",
    what: "Широкие мускулистые бёдра.", why: "Гроссы таскали повозки, поэтому задние ноги у них всегда сильные." },
  { id: "tan", x: 33, y: 76, name: "Трёхцветный окрас",
    what: "Чёрный, рыжий и белый.", why: "Рыжий подпал всегда лежит между чёрным и белым — рисунок задан стандартом." },
  { id: "socks", x: 50.5, y: 92, name: "Белые носочки",
    what: "Белое на всех четырёх лапах.", why: "Признак породы: по «носочкам» гросса видно издалека." },
];

const GALLERY = ["g03", "g12", "meadow", "g19", "g06", "newborns", "g11", "g20", "ring", "g13", "g25", "g05", "g21", "g24", "g14", "g10", "g04", "g22", "g26", "g27"];
const PHOTO_DIR = "img/";

const root = document;
const $ = (s) => root.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Наши собаки: лента карточек, по клику — подробности
// Сначала собаки, о которых больше всего известно: дата, родители, титулы, обследования, фото
const richness = (d) => [d.born, d.parents, d.titles && d.titles !== "Производитель", d.hd, d.photo].filter(Boolean).length;
const ALL_DOGS = [
  ...MALES.map((d) => ({ ...d, sex: "Кобель" })),
  ...DOGS.map((d) => ({ ...d, sex: "Сука" })),
].sort((a, b) => richness(b) - richness(a) || (b.titles || "").length - (a.titles || "").length)
 .map((d) => ({ ...d, titles: d.titles || "Племенная сука питомника" }));
const shortName = (n) => n.replace(/ IZ DOMA MADAMY| MADAMY| MADAMI/, "").replace(/^SENNENHUND ROSSII |^SR /, "");
$("#dogStrip").innerHTML = ALL_DOGS.map((d, i) => `<button type="button" class="dog-tile" data-dog="${i}">
  <span class="dog-tile-sex mono">${d.sex}</span><span class="dog-tile-name">${esc(shortName(d.name))}</span></button>`).join("");
const showDog = (i) => {
  const d = ALL_DOGS[i];
  root.querySelectorAll(".dog-tile").forEach((t) => t.classList.toggle("active", t.dataset.dog === String(i)));
  const facts = [
    d.born && ["Родилась", d.born],
    d.parents && ["Родители", d.parents],
    ["Титулы", d.titles],
    d.sex === "Сука" && ["HD / ED", d.hd ? "A / 0" : "по запросу"],
  ].filter(Boolean);
  $("#dogCard").innerHTML = `${d.photo ? `<img src="${PHOTO_DIR}${d.photo}" alt="${esc(d.name)}">` : ""}
    <div><p class="mono">${d.sex}</p><h3>${esc(d.name)}</h3>
    <table class="spec">${facts.map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join("")}</table></div>`;
  $("#dogCard").classList.toggle("has-photo", !!d.photo);
};
$("#dogStrip").addEventListener("click", (e) => { const t = e.target.closest(".dog-tile"); if (t) showDog(+t.dataset.dog); });
showDog(0);

// Полный список собак
$("#dogsTable").innerHTML = DOGS.map((d) => `<tr>
  <td><span class="name">${esc(d.name)}</span><span class="sub">${esc(d.parents)}</span></td>
  <td class="mono" data-label="Род.">${esc(d.born || "—")}</td>
  <td>${esc(d.titles || "Племенная сука питомника")}</td>
  <td class="mono" data-label="HD/ED">${d.hd ? "A / 0" : "по запросу"}</td>
</tr>`).join("");

$("#malesTable").innerHTML = MALES.map((d) => `<tr><td class="name">${esc(d.name)}</td><td class="muted">${esc(d.titles)}</td></tr>`).join("");

$("#registry").innerHTML = LITTERS.map(([date, pair, pups]) =>
  `<tr><td class="mono">${esc(date)}</td><td class="name">${esc(pair)}</td><td class="muted">${esc(pups)}</td></tr>`).join("");

$("#faqList").innerHTML = FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");

// Альбом — полоса на всю ширину, листается кнопками
$("#gallery-grid").innerHTML = GALLERY.map((g) => `<img src="${PHOTO_DIR}${g}.jpg" alt="Гроссы питомника Из Дома МаДаМи" loading="lazy">`).join("");
root.querySelectorAll(".album-btn").forEach((b) => b.addEventListener("click", () => {
  const strip = $("#gallery-grid");
  strip.scrollBy({ left: +b.dataset.dir * strip.clientWidth * 0.8, behavior: "smooth" });
}));

// Анатомия: номера на фото, окно с описанием прямо у точки
const stage = $("#anatStage"), pop = $("#anatPop");
$("#anatDots").innerHTML = ANATOMY.map((a, i) =>
  `<button class="anat-dot" data-part="${a.id}" style="left:${a.x}%;top:${a.y}%" aria-label="${esc(a.name)}">${i + 1}</button>`).join("");
$("#anatLegend").innerHTML = ANATOMY.map((a, i) =>
  `<li><button type="button" data-part="${a.id}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${esc(a.name)}</button></li>`).join("");
const showPart = (id) => {
  const a = ANATOMY.find((p) => p.id === id);
  if (!a) return;
  root.querySelectorAll("[data-part]").forEach((b) => b.classList.toggle("active", b.dataset.part === id));
  pop.innerHTML = `<h3>${esc(a.name)}</h3><p>${esc(a.what)}</p><p class="why">${esc(a.why)}</p>`;
  // Узкий экран: окно — под фото, чтобы не вылезало за край и не закрывало точки
  const docked = stage.clientWidth < 560;
  pop.classList.toggle("docked", docked);
  if (docked) {
    Object.assign(pop.style, { left: "", right: "", width: "", top: "", bottom: "" });
  } else {
    // Широкий: сбоку от точки, со стороны, где больше места; по высоте не выходит за фото
    const right = a.x < 55;
    Object.assign(pop.style, { width: "", bottom: "auto",
      left: right ? `calc(${a.x}% + 22px)` : "auto", right: right ? "auto" : `calc(${100 - a.x}% + 22px)` });
    const h = pop.offsetHeight, H = stage.clientHeight;
    pop.style.top = Math.max(8, Math.min(H - h - 8, (a.y / 100) * H - h / 2)) + "px";
  }
  pop.classList.add("open");
};
root.querySelectorAll("[data-part]").forEach((b) => {
  b.addEventListener("mouseenter", () => showPart(b.dataset.part));
  b.addEventListener("focus", () => showPart(b.dataset.part));
  b.addEventListener("click", () => showPart(b.dataset.part));
});
showPart(ANATOMY[0].id);
addEventListener("resize", () => { const a = root.querySelector(".anat-dot.active"); if (a) showPart(a.dataset.part); });

// На компьютере кнопка звонка ведёт к контактам: tel:-ссылка там сразу запускает звонок через FaceTime или Skype
const heroCall = $("#heroCall");
if (heroCall && matchMedia("(hover: hover) and (pointer: fine)").matches) heroCall.setAttribute("href", "#contact");

// Мобильное меню
const nav = $("#nav"), burger = $("#burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

// Кнопки с целью — предвыбирают цель в форме
root.querySelectorAll("[data-goal]").forEach((a) => a.addEventListener("click", () => {
  // Ищем по всей странице: в Tilda переключатели «Цель» стоят в штатной форме, вне нашего блока
  const r = document.querySelector(`input[name="goal"][value="${a.dataset.goal}"]`);
  if (r) r.checked = true;
}));

// Лайтбокс
const lb = $("#lightbox");
$("#gallery-grid").addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG") return;
  lb.querySelector("img").src = e.target.src;
  lb.classList.add("open");
});
lb.addEventListener("click", () => lb.classList.remove("open"));
addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });

// Форма: бэкенда пока нет — собираем письмо в почтовый клиент
const leadForm = $("#leadForm");
if (leadForm) leadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target.elements;
  const name = f.name.value.trim(), contact = f.contact.value.trim();
  if (!name || !contact) {
    (!name ? f.name : f.contact).focus();
    e.target.reportValidity();
    return;
  }
  const body = [
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    `Цель: ${f.goal.value}`,
    `Сроки: ${f.when.value}`,
    f.msg.value.trim() && `Сообщение: ${f.msg.value.trim()}`,
  ].filter(Boolean).join("\n");
  $("#formOk").style.display = "block";
  location.href = `mailto:lovedog_marishka@mail.ru?subject=${encodeURIComponent("Подбор щенка — заявка с сайта")}&body=${encodeURIComponent(body)}`;
});
