export function safeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function modelLink(name, models) {
  const model = models.find((item) => item.name === name);
  return model
    ? `<a href="/models/${escapeHtml(model.id)}/">${escapeHtml(name)}</a>`
    : escapeHtml(name || "기록 없음");
}
