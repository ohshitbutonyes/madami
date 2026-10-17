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

// Анатомия: x/y — точка на фото, lx/ly — куда ведёт выноска (в % от ширины/высоты), side — сторона подписи
const ANATOMY = [
  { id: "brows", x: 32.5, y: 11, lx: 4, ly: 5, side: "left", name: "Бровки",
    what: "Рыжие пятна над глазами.", why: "Делают морду выразительной, обязательны для трёхцветного окраса." },
  { id: "muzzle", x: 26, y: 17, lx: 4, ly: 26, side: "left", name: "Морда и проточина",
    what: "Мощная морда с белой полосой на лоб.", why: "Сильные челюсти, плотные губы — слюней немного." },
  { id: "ears", x: 45.7, y: 19.3, lx: 96, ly: 8, side: "right", name: "Уши",
    what: "Треугольные, высоко посажены.", why: "Поднимаются, когда гросс насторожился." },
  { id: "chest", x: 37, y: 46, lx: 4, ly: 48, side: "left", name: "Грудь",
    what: "Широкая, глубокая, с белой манишкой.", why: "Сердце и лёгкие тягловой собаки." },
  { id: "back", x: 62, y: 30, lx: 96, ly: 18, side: "right", name: "Спина",
    what: "Прямая и крепкая.", why: "Держит всю тягу. Щенку до 1,5 лет нельзя прыгать." },
  { id: "coat", x: 58.5, y: 43, lx: 96, ly: 44, side: "right", name: "Шерсть",
    what: "Короткая, с густым подшёрстком.", why: "Для мороза. Жару гросс переносит хуже." },
  { id: "tail", x: 72.9, y: 28.6, lx: 96, ly: 31, side: "right", name: "Хвост",
    what: "Толстый, до скакательных суставов.", why: "Показывает настроение." },
  { id: "tan", x: 33, y: 76, lx: 4, ly: 70, side: "left", name: "Подпал",
    what: "Рыжий цвет между чёрным и белым.", why: "Третий цвет трёхцветного окраса." },
  { id: "paws", x: 50.5, y: 92, lx: 96, ly: 96, side: "right", name: "Лапы",
    what: "Круглые, с белыми «носочками».", why: "Держат 50–70 кг и не скользят." },
  { id: "hind", x: 74.5, y: 55, lx: 96, ly: 62, side: "right", name: "Задние ноги",
    what: "Мощные бёдра.", why: "Толчок и сила, которой гросс тянул повозку." },
];

const GALLERY = ["g03", "g12", "meadow", "g19", "g06", "newborns", "g11", "g20", "ring", "g13", "g25", "g05", "g21", "g24", "g14", "g10", "g04", "g22", "g26", "g27"];

const root = document;
const $ = (s) => root.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Каталог собак
$("#dogsTable").innerHTML = DOGS.map((d) => `<tr>
  <td><span class="name">${esc(d.name)}</span><span class="sub">${esc(d.parents)}</span></td>
  <td class="mono" data-label="Род.">${esc(d.born || "—")}</td>
  <td>${esc(d.titles || "Племенная сука питомника")}</td>
  <td class="mono" data-label="HD/ED">${d.hd ? "A / 0" : "по запросу"}</td>
</tr>`).join("");

$("#malesTable").innerHTML = MALES.map(([n, t]) => `<tr><td class="name">${esc(n)}</td><td class="muted">${esc(t)}</td></tr>`).join("");

$("#registry").innerHTML = LITTERS.map(([date, pair, pups]) =>
  `<tr><td class="mono">${esc(date)}</td><td class="name">${esc(pair)}</td><td class="muted">${esc(pups)}</td></tr>`).join("");

$("#faqList").innerHTML = FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");

$("#gallery-grid").innerHTML = GALLERY.map((g) => `<img src="img/${g}.jpg" alt="Гроссы питомника Из Дома МаДаМи" loading="lazy">`).join("");

// Анатомия: номера на фото, легенда сбоку, выноска к активной части
const line = $("#anatLine"), label = $("#anatLabel"), card = $("#anatCard");
$("#anatDots").innerHTML = ANATOMY.map((a, i) =>
  `<button class="anat-dot" data-part="${a.id}" style="left:${a.x}%;top:${a.y}%" aria-label="${esc(a.name)}">${i + 1}</button>`).join("");
$("#anatLegend").innerHTML = ANATOMY.map((a, i) =>
  `<li><button type="button" data-part="${a.id}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${esc(a.name)}</button></li>`).join("");
const showPart = (id) => {
  const a = ANATOMY.find((p) => p.id === id);
  if (!a) return;
  root.querySelectorAll("[data-part]").forEach((b) => b.classList.toggle("active", b.dataset.part === id));
  line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
  line.setAttribute("x2", a.lx); line.setAttribute("y2", a.ly);
  label.textContent = a.name;
  label.className = `plate-label mono ${a.side}`;
  label.style.left = a.lx + "%"; label.style.top = a.ly + "%";
  card.innerHTML = `<h3>${esc(a.name)}</h3><p>${esc(a.what)}</p><p class="why">${esc(a.why)}</p>`;
};
root.querySelectorAll("[data-part]").forEach((b) => {
  b.addEventListener("mouseenter", () => showPart(b.dataset.part));
  b.addEventListener("focus", () => showPart(b.dataset.part));
  b.addEventListener("click", () => showPart(b.dataset.part));
});
showPart(ANATOMY[0].id);

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
