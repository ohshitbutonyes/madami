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
  ["Сколько стоит щенок?", "Стоимость зависит от помёта и перспектив конкретного щенка — выставочный класс и домашний компаньон стоят по-разному. Мы называем цену при разговоре, честно и сразу, вместе с тем, что в неё входит."],
  ["Можно ли держать гросса в квартире?", "Да. Гросс спокоен в доме и не суетится — но ему нужны две полноценные прогулки в день в любую погоду. Если вы к этому готовы, квартира не помеха. Если собака будет одна по двенадцать часов, порода вам не подходит."],
  ["Как гросс относится к детям и другим животным?", "Порода спокойная и терпеливая, внимательная к детям, уверенно ведёт себя с другими животными. Зенненхундов не зря называют швейцарскими семейными собаками. При этом это крупная собака — первое время с маленькими детьми нужен присмотр взрослых."],
  ["Что такое дисплазия и проверяете ли вы производителей?", "Дисплазия — наследственное нарушение развития тазобедренных (HD) и локтевых (ED) суставов, к которому склонны крупные породы. Все наши производители обследованы; HD-A и ED-0 означают, что признаков дисплазии нет. Результаты передаём вместе со щенком."],
  ["Когда щенок может уехать в новый дом?", "С двух месяцев — после обязательного актирования в 45 дней. Щенок уезжает привитым по возрасту, с клеймом и документами."],
  ["Отправляете ли вы щенков в другие города и страны?", "Да. Наши собаки уезжали в разные регионы России и за границу — в частности, в Польшу. Чипирование и документы для вывоза оформляем по договорённости, условия доставки обсуждаем индивидуально."],
  ["Сильно ли линяет гросс?", "Шерсть двойная, с плотным подшёрстком. Дважды в год идёт заметная линька — в это время собаку нужно чаще вычёсывать."],
  ["Чем кормить щенка?", "С собой даём привычный корм на первые дни и памятку по выращиванию. Рацион и нагрузку по возрасту подробно обсуждаем — и дальше консультируем по мере роста."],
  ["Можно ли приехать и познакомиться с собаками?", "Да, по предварительной договорённости. Питомник в 10 км от Воронежа, по трассе М-4 в сторону Москвы."],
];

const GALLERY = ["g03", "g12", "meadow", "g19", "g06", "newborns", "g11", "g20", "ring", "g13", "g25", "g05", "g21", "g24", "g14", "g10", "g04", "g22", "g26", "g27"];

const $ = (s) => document.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("#dogsGrid").innerHTML = DOGS.map((d) => `
  <article class="dog reveal">
    <h3>${esc(d.name)}</h3>
    <div class="meta">${d.born ? esc(d.born) + " · " : ""}${esc(d.parents)}</div>
    <div class="titles">${esc(d.titles || "Племенная сука питомника.")}</div>
    <div class="chips">${d.hd ? '<span class="chip">HD-A · ED-0</span>' : '<span class="chip muted">Обследования — по запросу</span>'}</div>
  </article>`).join("");

$("#males").innerHTML = `<h3 style="grid-column:1/-1;margin-bottom:6px">Кобели в нашем разведении</h3>` +
  MALES.map(([n, t]) => `<div class="male">${esc(n)}<span>${esc(t)}</span></div>`).join("");

$("#registry").innerHTML = LITTERS.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("");

$("#faqList").innerHTML = FAQ.map(([q, a], i) => `<details${i === 0 ? " open" : ""}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");

$("#gallery-grid").innerHTML = GALLERY.map((g) => `<img src="img/${g}.jpg" alt="Гроссы питомника Из Дома МаДаМи" loading="lazy">`).join("");

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
document.querySelectorAll("[data-goal]").forEach((a) => a.addEventListener("click", () => {
  const r = document.querySelector(`input[name="goal"][value="${a.dataset.goal}"]`);
  if (r) r.checked = true;
}));

// Появление при скролле
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => {
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
