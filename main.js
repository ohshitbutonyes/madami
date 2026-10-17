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

const MALES = [
  ["AMOR IZ DOMA MADAMY", "Вице-чемпион мира 2023"],
  ["ARCHI FOR SENNENHUND ROSSII", "Чемпион мира 2016 · интерчемпион"],
  ["RINGO STAR IZ DOMA MADAMY", "Производитель"],
  ["GENRIH IZ DOMA MADAMY", "Производитель"],
  ["SENNENHUND ROSSII SPARTAK", "Производитель"],
  ["BARD NERAWIN FOREVER", "Импорт, Латвия"],
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

// Анатомия: x/y — положение точки на фото (в % от ширины/высоты), r — радиус подсветки
const ANATOMY = [
  { id: "brows", x: 32.5, y: 11, r: 9, name: "Бровки",
    what: "Рыжие пятна над глазами.", why: "Делают морду выразительной, обязательны для трёхцветного окраса." },
  { id: "muzzle", x: 26, y: 17, r: 11, name: "Морда и проточина",
    what: "Мощная морда с белой полосой на лоб.", why: "Сильные челюсти, плотные губы — слюней немного." },
  { id: "ears", x: 45.7, y: 19.3, r: 10, name: "Уши",
    what: "Треугольные, высоко посажены.", why: "Поднимаются, когда гросс насторожился." },
  { id: "chest", x: 37, y: 46, r: 17, name: "Грудь",
    what: "Широкая, глубокая, с белой манишкой.", why: "Сердце и лёгкие тягловой собаки." },
  { id: "back", x: 62, y: 30, r: 16, name: "Спина",
    what: "Прямая и крепкая.", why: "Держит всю тягу. Щенку до 1,5 лет нельзя прыгать." },
  { id: "coat", x: 58.5, y: 43, r: 18, name: "Шерсть",
    what: "Короткая, с густым подшёрстком.", why: "Для мороза. Жару гросс переносит хуже." },
  { id: "tail", x: 72.9, y: 28.6, r: 7, name: "Хвост",
    what: "Толстый, до скакательных суставов.", why: "Показывает настроение." },
  { id: "tan", x: 33, y: 76, r: 11, name: "Подпал",
    what: "Рыжий цвет между чёрным и белым.", why: "Третий цвет трёхцветного окраса." },
  { id: "paws", x: 50.5, y: 92, r: 9, name: "Лапы",
    what: "Круглые, с белыми «носочками».", why: "Держат 50–70 кг и не скользят." },
  { id: "hind", x: 74.5, y: 55, r: 15, name: "Задние ноги",
    what: "Мощные бёдра.", why: "Толчок и сила, которой гросс тянул повозку." },
];

const GALLERY = ["g03", "g12", "meadow", "g19", "g06", "newborns", "g11", "g20", "ring", "g13", "g25", "g05", "g21", "g24", "g14", "g10", "g04", "g22", "g26", "g27"];

const root = document;
const $ = (s) => root.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("#dogsGrid").innerHTML = DOGS.map((d) => `
  <article class="dog reveal">
    <h3>${esc(d.name)}</h3>
    <div class="meta">${d.born ? esc(d.born) + " · " : ""}${esc(d.parents)}</div>
    <div class="titles">${esc(d.titles || "Племенная сука питомника.")}</div>
    <div class="chips">${d.hd ? '<span class="chip">HD-A · ED-0</span>' : '<span class="chip muted">Обследования по запросу</span>'}</div>
  </article>`).join("");

$("#males").innerHTML = `<h3 style="grid-column:1/-1;margin-bottom:6px">Кобели в нашем разведении</h3>` +
  MALES.map(([n, t]) => `<div class="male">${esc(n)}<span>${esc(t)}</span></div>`).join("");

$("#registry").innerHTML = LITTERS.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("");

$("#faqList").innerHTML = FAQ.map(([q, a], i) => `<details${i === 0 ? " open" : ""}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");

$("#gallery-grid").innerHTML = GALLERY.map((g) => `<img src="img/${g}.jpg" alt="Гроссы питомника Из Дома МаДаМи" loading="lazy">`).join("");

// Анатомия
const stage = $("#anatStage"), card = $("#anatCard"), intro = card.innerHTML;
$("#anatDots").innerHTML = ANATOMY.map((a, i) =>
  `<button class="anat-dot" data-part="${a.id}" style="left:${a.x}%;top:${a.y}%" aria-label="${esc(a.name)}">${i + 1}</button>`).join("");
$("#anatChips").innerHTML = ANATOMY.map((a, i) => `<button type="button" data-part="${a.id}">${i + 1}. ${esc(a.name)}</button>`).join("");
let active = null;
const showPart = (id) => {
  if (id === active) return;
  active = id;
  const a = ANATOMY.find((p) => p.id === id);
  root.querySelectorAll("[data-part]").forEach((b) => b.classList.toggle("active", b.dataset.part === id));
  if (!a) { stage.classList.remove("on"); card.innerHTML = intro; return; }
  stage.style.setProperty("--ax", a.x + "%");
  stage.style.setProperty("--ay", a.y + "%");
  stage.style.setProperty("--ar", a.r + "%");
  stage.classList.add("on");
  $("#anatRingLabel").textContent = a.name;
  card.innerHTML = `<span class="anat-num">${ANATOMY.indexOf(a) + 1} из ${ANATOMY.length}</span>
    <h3>${esc(a.name)}</h3><p>${esc(a.what)}</p>
    <p class="why"><b>Зачем</b>${esc(a.why)}</p>`;
  card.classList.remove("swap"); void card.offsetWidth; card.classList.add("swap");
};
root.querySelectorAll("[data-part]").forEach((b) => {
  b.addEventListener("mouseenter", () => showPart(b.dataset.part));
  b.addEventListener("focus", () => showPart(b.dataset.part));
  b.addEventListener("click", () => showPart(b.dataset.part));
});

// Шапка
const header = $("#header");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Мобильное меню
const nav = $("#nav"), burger = $("#burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

// Кнопки с целью — предвыбирают цель в форме
root.querySelectorAll("[data-goal]").forEach((a) => a.addEventListener("click", () => {
  const r = root.querySelector(`input[name="goal"][value="${a.dataset.goal}"]`);
  if (r) r.checked = true;
}));

// Появление при скролле
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
root.querySelectorAll(".reveal").forEach((el) => {
  // Всё, что уже на экране при загрузке, показываем сразу
  if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in");
  else io.observe(el);
});

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
$("#leadForm").addEventListener("submit", (e) => {
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
