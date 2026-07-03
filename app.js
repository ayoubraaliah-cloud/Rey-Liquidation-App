:root {
  --bg: #f5f1ea;
  --card: #fff;
  --text: #0f172a;
  --muted: #6b7280;
  --border: #e5e7eb;
  --primary: #111827;
  --danger: #b91c1c;
  --success: #047857;
  --cream: #ece8df;
  --highlight: #fff7ed;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.app {
  width: min(820px, 100%);
  margin: 0 auto;
  padding: 18px 18px 54px;
}

.hero { margin: 16px 0 18px; }

.eyebrow {
  margin: 0 0 5px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: .09em;
  font-weight: 900;
  font-size: 12px;
}

h1 { margin: 0; font-size: 36px; line-height: 1.05; }
h2 { margin: 0 0 14px; font-size: 23px; }
p { margin-top: 0; }

.hero p:not(.eyebrow), .muted { color: var(--muted); font-weight: 700; }

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 18px;
  margin-bottom: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,.04);
}

.highlight { background: var(--highlight); }

label {
  display: block;
  margin: 15px 0 7px;
  font-size: 14px;
  font-weight: 900;
}

input, textarea, select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  font-size: 16px;
  background: #fff;
}

textarea { min-height: 100px; resize: vertical; }
.output { min-height: 245px; font-size: 15px; }

button {
  border: 0;
  border-radius: 999px;
  padding: 13px 17px;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
}

.primary { background: var(--primary); color: white; }
.ghost { background: var(--cream); color: var(--text); }
.danger { background: var(--danger); color: white; }

.row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

.scanner {
  width: 100%;
  max-height: 400px;
  border-radius: 18px;
  margin-top: 14px;
  background: black;
}

.product-img, .own-img {
  width: 190px;
  height: 190px;
  object-fit: contain;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: white;
  margin-top: 8px;
}

.own-img { object-fit: cover; }

.status {
  margin: 12px 0 0;
  font-weight: 900;
  color: var(--muted);
}

.status.good { color: var(--success); }
.status.bad { color: var(--danger); }

.hidden { display: none !important; }

.draft {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px;
  margin-top: 10px;
  background: #fafafa;
}

.draft strong { display: block; }
.draft small { display: block; color: var(--muted); margin-top: 3px; }

@media (max-width: 540px) {
  .grid { grid-template-columns: 1fr; }
  h1 { font-size: 30px; }
  button { width: 100%; }
}
