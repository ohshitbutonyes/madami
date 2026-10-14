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

// Анатомия: x/y — положение точки на фото (в % от ширины/высоты), r — радиус подсветки
const ANATOMY = [
  { id: "brows", x: 32.5, y: 11, r: 9, name: "Бровки",
    what: "Над каждым глазом — по рыжему пятну подпала. Из-за них у гросса такое выразительное лицо: он «хмурится», «удивляется» и «просит» одними бровями.",
    why: "Это обязательная часть трёхцветного окраса. Симметричные, чёткие бровки — первое, на что смотрит эксперт на выставке.",
    std: "Стандарт FCI: подпал над глазами, на щеках, на груди и на всех четырёх лапах — строго между чёрным и белым." },
  { id: "muzzle", x: 26, y: 17, r: 11, name: "Морда и проточина",
    what: "Мощная тупая морда с белой проточиной — полосой, которая идёт от носа на лоб. Губы сухие и плотно прилегают.",
    why: "Сильные челюсти — наследство охранной и пастушьей работы. Плотные губы — значит, слюней заметно меньше, чем у мастифов и сенбернаров.",
    std: "Прикус — ножницеобразный, полный набор зубов. Нос всегда чёрный." },
  { id: "ears", x: 45.7, y: 19.3, r: 10, name: "Уши",
    what: "Треугольные, среднего размера, высоко посажены. В спокойствии висят и прилегают к голове, при интересе — поднимаются и разворачиваются вперёд.",
    why: "Лучший индикатор настроения: по ушам видно, что гросс насторожился и что-то услышал раньше вас.",
    std: "Уши с закруглёнными кончиками, покрыты густой шерстью с обеих сторон." },
  { id: "chest", x: 37, y: 46, r: 17, name: "Грудь",
    what: "Широкая и глубокая — опускается до локтей. Спереди белая «манишка», по бокам — рыжий подпал.",
    why: "Это объём для сердца и лёгких. Гросс — тягловая собака: в Швейцарии такие возили тележки с молоком и сыром, и выносливость шла именно отсюда.",
    std: "Грудь объёмная, с выраженным передним краем, рёбра округлые, но не бочкообразные." },
  { id: "back", x: 62, y: 30, r: 16, name: "Спина",
    what: "Прямая, крепкая, средней длины. Корпус чуть длиннее, чем рост в холке, — гросс выглядит мощным, но не громоздким.",
    why: "Спина передаёт усилие от задних ног вперёд: на ней держится вся тяга. Поэтому до полутора лет щенку нельзя прыгать и бегать по лестницам — растущие суставы и спину берегут.",
    std: "Соотношение роста в холке к длине корпуса — примерно 9 : 10." },
  { id: "coat", x: 58.5, y: 43, r: 18, name: "Шерсть",
    what: "Двойная: плотная блестящая ость 3–5 см и густой подшёрсток, обычно тёмно-серый или чёрный.",
    why: "Создана для альпийской зимы: снег и мороз гроссу в радость, а вот жару он переносит хуже. Линяет дважды в год — в это время вычёсываем чаще.",
    std: "Шерсть короткая и плотно прилегает. Длинная или волнистая — серьёзный недостаток." },
  { id: "tail", x: 72.9, y: 28.6, r: 7, name: "Хвост",
    what: "Толстый у основания, длинный — достаёт до скакательных суставов. В покое висит, в движении и в радости поднимается.",
    why: "Хвост — руль и барометр. Высоко поднятый — гросс возбуждён или играет, опущенный и расслабленный — спокоен.",
    std: "Хвост не закручивается кольцом и не ложится на спину." },
  { id: "tan", x: 33, y: 76, r: 11, name: "Подпал на лапах",
    what: "Ржаво-рыжий цвет, который всегда стоит между чёрным и белым — как здесь, на передних лапах.",
    why: "Третий цвет делает окрас «трёхцветным». По чёткости и симметрии подпала на лапах видно качество окраса.",
    std: "Чёрный — основной цвет, подпал — насыщенный, от рыжего до красно-коричневого." },
  { id: "paws", x: 50.5, y: 92, r: 9, name: "Лапы",
    what: "Крупные, округлые, с плотно сжатыми пальцами и белыми «носочками».",
    why: "Собака весом 50–70 кг опирается на них целиком. Сводистые лапы держат вес и не скользят на горной тропе — и на зимнем асфальте тоже.",
    std: "Лапы прямые, смотрят строго вперёд, когти крепкие." },
  { id: "hind", x: 74.5, y: 55, r: 15, name: "Задние ноги",
    what: "Широкие мускулистые бёдра и хорошо выраженные углы скакательных суставов.",
    why: "Это мотор гросса. Толчок задних ног даёт размашистое, свободное движение и ту самую силу, с которой он тянул повозку.",
    std: "В движении задние ноги работают параллельно, без сближения скакательных суставов." },
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
    <div class="chips">${d.hd ? '<span class="chip">HD-A · ED-0</span>' : '<span class="chip muted">Обследования — по запросу</span>'}</div>
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
    <p class="why"><b>Зачем это гроссу</b>${esc(a.why)}</p><p class="std">${esc(a.std)}</p>`;
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
