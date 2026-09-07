import { escapeHtml, modelLink } from "./html.mjs";

export function readerPage(currentSeries, episode, index, models = []) {
  const currentEpisodes = currentSeries.episodes;
  const previous = currentEpisodes[index - 1];
  const next = currentEpisodes[index + 1];
  const usesNativeCaption =
    episode.presentation?.mode === "site-native-caption";
  const pageLabel = episode.pageCount === 1 ? "PAGE" : "PAGES";
  const imageDisclosure =
    episode.provenance.image.status === "known-provider"
      ? `
          <div><dt>이미지 생성</dt><dd>${modelLink(episode.provenance.image.model, models)}<small>${escapeHtml(episode.provenance.image.tool)} · ${escapeHtml(episode.provenance.image.version || "정확한 버전 기록 없음")}</small></dd></div>
        `
      : `
          <div><dt>이미지 생성</dt><dd>AI 이미지 생성<small>제공사와 정확한 모델 기록 없음</small></dd></div>
        `;
  const storyDisclosure = `
    <div>
      <dt>기획·대본</dt>
      <dd>${escapeHtml(episode.provenance.story.model || "AI 제작 파이프라인")}
        <small>${episode.provenance.story.model ? "확인된 모델 기록" : "정확한 모델 기록 없음"}</small>
      </dd>
    </div>
  `;
  const lettering = episode.provenance.lettering || {};
  const letteringDisclosure = `
    <div>
      <dt>레터링·내보내기</dt>
      <dd>${escapeHtml(lettering.model || lettering.tool || "기록 없음")}
        <small>${escapeHtml([lettering.stage, lettering.tool].filter(Boolean).join(" · ") || "제작 기록 없음")}</small>
      </dd>
    </div>
  `;
  return `
    <div class="reader-progress" role="progressbar" aria-label="만화 읽기 진행" aria-valuemin="1" aria-valuemax="${episode.pageCount}" aria-valuenow="1"><span></span></div>
    <section class="reader-intro">
      <nav class="breadcrumbs" aria-label="현재 위치">
        <a href="/works/">작품</a><span>/</span><a href="/series/${currentSeries.slug}/">${escapeHtml(currentSeries.title)}</a><span>/</span><strong>${episode.number}화</strong>
      </nav>
      <div class="reader-intro__title">
        <div>
          <p class="eyebrow">EPISODE ${String(episode.number).padStart(3, "0")} · ${episode.pageCount} ${pageLabel}</p>
          <h1>${escapeHtml(episode.shortTitle)}</h1>
          <p>${escapeHtml(episode.lead)}</p>
        </div>
        <div class="reader-intro__actions">
          <a class="button button--reader" href="#comic-reader">만화 바로 읽기 <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="/series/${currentSeries.slug}/">회차 목록 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
    <div class="reader-stage" aria-label="만화 읽기">
      <div class="reader-toolbar" aria-label="읽기 설정">
        <p class="reader-toolbar__status"><span data-reader-current>01</span><span aria-hidden="true"> / </span><span>${String(episode.pageCount).padStart(2, "0")}</span><span class="sr-only">페이지</span></p>
        <div class="reader-view-toggle" role="group" aria-label="만화 보기 방식">
          <button type="button" data-reader-view="fit" aria-pressed="true">한눈에</button>
          <button type="button" data-reader-view="width" aria-pressed="false">크게</button>
        </div>
      </div>
      <section class="comic-reader" id="comic-reader" tabindex="-1" aria-label="${escapeHtml(episode.title)} 만화 본문">
        ${episode.pages
          .map((page, pageIndex) => {
            const pageRatio = page.width / page.height;
            return `
              <figure class="comic-reader__page${usesNativeCaption ? " comic-reader__page--captioned" : ""}" data-reader-page="${page.number}" style="--page-ratio: ${pageRatio.toFixed(4)}">
                <img
                  src="${page.src}"
                  width="${page.width}"
                  height="${page.height}"
                  alt="${escapeHtml(page.alt)}"
                  ${pageIndex < 2 ? 'loading="eager"' : 'loading="lazy"'}
                  decoding="async"
                  ${pageIndex === 0 ? 'fetchpriority="high"' : ""}
                >
                ${usesNativeCaption ? `<figcaption class="comic-reader__caption"><span>${escapeHtml(page.caption)}</span><small>${String(page.number).padStart(2, "0")}/${String(episode.pageCount).padStart(2, "0")}</small></figcaption>` : `<figcaption class="sr-only">${episode.number}화 ${page.number}/${episode.pageCount}페이지</figcaption>`}
              </figure>
            `;
          })
          .join("")}
      </section>
    </div>
    ${episodeSources(episode)}
    <section class="reader-production" aria-label="제작 정보">
      <details class="provenance">
        <summary>이 작품의 제작 정보 <span aria-hidden="true">＋</span></summary>
        <dl>
          ${storyDisclosure}
          ${imageDisclosure}
          ${letteringDisclosure}
        </dl>
      </details>
    </section>
    <section class="reader-end">
      <p class="eyebrow">END OF EPISODE ${String(episode.number).padStart(3, "0")}</p>
      <blockquote>“${escapeHtml(episode.closingLine)}”</blockquote>
      <nav class="reader-nav" aria-label="회차 이동">
        ${previous ? '<a href="/comics/' + currentSeries.slug + "/" + previous.id + '/"><span>이전 화</span><strong>← ' + escapeHtml(previous.shortTitle) + "</strong></a>" : ""}
        ${next ? '<a href="/comics/' + currentSeries.slug + "/" + next.id + '/"><span>다음 화</span><strong>' + escapeHtml(next.shortTitle) + " →</strong></a>" : '<a href="/series/' + currentSeries.slug + '/"><span>최신화입니다</span><strong>전체 회차 →</strong></a>'}
      </nav>
    </section>
  `;
}

function episodeSources(episode) {
  if (!Array.isArray(episode.sources) || episode.sources.length === 0)
    return "";
  const news = episode.news || {};
  return `
    <details class="episode-sources" aria-labelledby="episode-sources-title">
      <summary class="episode-sources__summary">
        <span><small>NEWS SOURCES</small><strong id="episode-sources-title">이번 화의 뉴스 근거</strong></span>
        <span class="episode-sources__summary-action">근거 ${episode.sources.length}개 보기 <b aria-hidden="true">＋</b></span>
      </summary>
      <div class="episode-sources__content">
        <p class="episode-sources__overview">${escapeHtml(news.summary || "이 회차를 제작할 때 확인한 공개 자료입니다.")}</p>
        <dl class="episode-sources__facts">
          <div><dt>선정 뉴스</dt><dd>${escapeHtml(news.headline || episode.shortTitle)}</dd></div>
          <div><dt>사건일</dt><dd>${escapeHtml(news.eventDate || "기록 없음")}</dd></div>
          <div><dt>조사일</dt><dd>${escapeHtml(news.researchDate || "기록 없음")}</dd></div>
        </dl>
        <div class="episode-sources__list">
          ${episode.sources
            .map(
              (source) => `
            <article>
              <span>${escapeHtml(source.label)}</span>
              <h3><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)} <span aria-hidden="true">↗</span></a></h3>
              <small>${escapeHtml(source.publisher)} · ${escapeHtml(source.publishedAt)}</small>
              <p>${escapeHtml(source.note || "")}</p>
            </article>
          `,
            )
            .join("")}
        </div>
        ${news.selectionNote ? `<p class="episode-sources__note"><strong>선정 기준</strong> ${escapeHtml(news.selectionNote)}</p>` : ""}
      </div>
    </details>
  `;
}
