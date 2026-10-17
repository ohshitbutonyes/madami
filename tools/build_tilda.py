"""Собирает index.html + styles.css + main.js в один блок для Tilda (T123).

Запуск из корня репозитория:  python3 tools/build_tilda.py
Результат: tilda-block.html. Все id получают префикс mdm-, стили — область .mdm,
фото подставляются из папки IMG (см. начало скрипта в блоке).
"""
import re
import sys
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "tilda-block.html"
IMG_URL = "https://cdn.jsdelivr.net/gh/ohshitbutonyes/madami@main/img/"

html = (ROOT / "index.html").read_text()
css = (ROOT / "styles.css").read_text()
js = (ROOT / "main.js").read_text()
ring = (ROOT / "img" / "ring.svg").read_text().strip()
ring_uri = ("data:image/svg+xml," + urllib.parse.quote(ring, safe=" =:/'\"")).replace('"', "'")

# id → mdm-id везде: разметка, якоря, label for, JS-селекторы, CSS
for i in sorted(set(re.findall(r'id="([\w-]+)"', html)), key=len, reverse=True):
    html = (html.replace(f'id="{i}"', f'id="mdm-{i}"')
                .replace(f'href="#{i}"', f'href="#mdm-{i}"')
                .replace(f'for="{i}"', f'for="mdm-{i}"'))
    js = js.replace(f'"#{i}"', f'"#mdm-{i}"')
    css = re.sub(rf"#{re.escape(i)}\b", f"#mdm-{i}", css)

body = html.split("<body>")[1].split('<script src="main.js"></script>')[0].strip()
body = body.replace('src="img/ring.svg"', f'src="{ring_uri}"')
body = re.sub(r'src="img/([\w.-]+)"', r'data-img="\1"', body)

# CSS: всё под .mdm, @media скоупим, @property/@keyframes оставляем как есть
css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
css = css.replace('url("img/ring.svg")', f'url("{ring_uri}")')


def scope_sel(sel):
    sel = sel.strip()
    if sel in (":root", "html", "body"):
        return ".mdm"
    if sel == "*":
        return ".mdm, .mdm *"
    return ".mdm " + sel


def scope_rules(block):
    res = []
    for m in re.finditer(r"([^{}]+)\{([^{}]*)\}", block):
        sels, decl = m.group(1).strip(), m.group(2).strip()
        decl = decl.replace("scroll-behavior: smooth; ", "")
        res.append(", ".join(scope_sel(x) for x in sels.split(",")) + " { " + decl + " }")
    return res


out, i = [], 0
while i < len(css):
    at = css.find("@", i)
    if at == -1:
        out += scope_rules(css[i:])
        break
    out += scope_rules(css[i:at])
    br = css.find("{", at)
    depth, j = 1, br + 1
    while depth:
        depth += {"{": 1, "}": -1}.get(css[j], 0)
        j += 1
    if css.startswith("@media", at):
        out.append(css[at:br].strip() + " {\n  " + "\n  ".join(scope_rules(css[br + 1:j - 1])) + "\n}")
    else:
        out.append(" ".join(css[at:j].split()))
    i = j
css = "\n".join(out)
# Анимация появления — только когда JS запущен (в редакторе Tilda всё видно)
css = css.replace(".mdm .reveal {", ".mdm.mdm-js .reveal {").replace(".mdm .reveal.in {", ".mdm.mdm-js .reveal.in {")
css = css.replace("html { scroll-behavior: auto; }", ".mdm { scroll-behavior: auto; }")
css += """
.mdm { overflow-x: clip; }
.mdm table { border: 0; }
.mdm a:hover { color: inherit; }
.mdm .nav a:hover { color: var(--rust); }
.mdm .contacts a:hover { color: var(--sun); }
.mdm .btn-primary:hover { color: #fff; }"""

# JS: корень — блок, фото — из IMG
assert "const root = document;\n" in js
js = js.replace("const root = document;\n", "")
js = js.replace('src="img/${g}.jpg"', 'src="${IMG}${g}.jpg"')
esc_line = next(l for l in js.splitlines() if l.startswith("const esc = "))
js = js.replace(esc_line, esc_line + "\n\n"
                'root.classList.add("mdm-js");\n'
                'root.querySelectorAll("[data-img]").forEach((im) => { im.src = IMG + im.dataset.img; });', 1)
if "${IMG}" not in js or "mdm-js" not in js:
    sys.exit("main.js изменился — обновите замены в build_tilda.py")
js = f"""(function () {{
// Папка с фотографиями (hero.jpg, autumn.jpg, g03.jpg … — файлы из папки img/ репозитория).
// Замените на свой адрес, если фото лежат в другом месте. Слэш на конце обязателен.
const IMG = "{IMG_URL}";
const root = document.getElementById("mdm-root");
{js}}})();"""

# Шрифты берём из index.html, чтобы блок не расходился с сайтом
fonts = re.search(r'<link href="https://fonts\.googleapis\.com[^>]+>', html).group(0)
OUT.write_text(f"""<!-- Из Дома МаДаМи — сайт v1. Вставлять целиком в блок T123 «HTML-код». -->
{fonts}
<style>
{css}
</style>

<div class="mdm" id="mdm-root">
{body}
</div>

<script>
{js}
</script>
""")
print(f"{OUT.name}: {OUT.stat().st_size} bytes")
