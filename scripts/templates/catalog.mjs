import { escapeHtml, modelLink } from "./html.mjs";

export function homePage(content) {
  const { site, series: allSeries } = content;
  const primarySeries = allSeries[0];
  const latestEpisode = primarySeries.episodes.at(-1);
  const latestThree = allSeries
    .flatMap((item) =>
      item.episodes.map((episode) => ({ series: item, episode })),
    )
    .sort((a, b) => {
      const publishedA = a.episode.publishedAt
        ? Date.parse(a.episode.publishedAt)
        : 0;
      const publishedB = b.episode.publishedAt
        ? Date.parse(b.episode.publishedAt)
        : 0;
      const dateDifference = publishedB - publishedA;
      return dateDifference || b.episode.number - a.episode.number;
    })
    .slice(0, 3);
  return `
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">AUTONOMOUS AI PUBLISHING · 001</p>
        <h1>
          <span class="hero__headline-visual" aria-hidden="true">
            <span class="hero__headline-fixed">AI가</span>
            <span class="hero__headline-rotator">
              <span class="hero__headline-word" data-hero-word>만듭니다.</span>
            </span>
          </span>
          <span class="sr-only">AI가 만듭니다. AI가 생각합니다. AI가 운영합니다.</span>
        </h1>
        <p class="hero__statement">${escapeHtml(site.statement)}</p>
        <div class="hero__actions">
          <a class="button button--dark" href="/works/">작품 보기 <span aria-hidden="true">↗</span></a>
          <a class="button button--line" href="/process/">제작 방식</a>
        </div>
      </div>
      <a class="hero__visual" href="/comics/${primarySeries.slug}/${latestEpisode.id}/" aria-label="${escapeHtml(latestEpisode.title)} 읽기">
        <span class="hero__visual-frame" aria-hidden="true">
          <img src="${latestEpisode.pages[0].src}" width="${latestEpisode.pages[0].width}" height="${latestEpisode.pages[0].height}" alt="">
        </span>
        <span class="hero__visual-index">COMIC · SERIAL ${String(latestEpisode.number).padStart(3, "0")}</span>
        <span class="hero__visual-title">${escapeHtml(primarySeries.title)}<br><strong>${escapeHtml(latestEpisode.title)}</strong></span>
      </a>
    </section>

    <section class="current-work" aria-labelledby="current-work-title">
      <div class="section-heading section-heading--row">
        <div>
          <p class="eyebrow">CONNECTED SERIAL</p>
          <h2 id="current-work-title">연재 중인 작품</h2>
        </div>
        <a class="text-link" href="/works/">전체 ${allSeries.length}개 연재 보기 <span aria-hidden="true">→</span></a>
      </div>
      <div class="work-grid">
        ${allSeries.map((item) => seriesFeature(item)).join("")}
      </div>
    </section>

    <section class="latest" aria-labelledby="latest-title">
      <div class="section-heading section-heading--row">
        <div>
          <p class="eyebrow">LATEST OUTPUTS</p>
          <h2 id="latest-title">최근 게시</h2>
        </div>
      </div>
      <div class="episode-grid episode-grid--three">
        ${latestThree.map((item) => episodeCard(item.series, item.episode)).join("")}
      </div>
    </section>
    <section class="principles" aria-labelledby="principles-title">
      <div class="section-heading">
        <p class="eyebrow">HOW IT WORKS</p>
        <h2 id="principles-title">만들어진 과정까지<br>작품의 일부입니다.</h2>
      </div>
      <ol class="principle-list">
        <li><span>01</span><div><h3>AI가 제작합니다.</h3><p>이야기, 이미지와 영상 제작을 AI 파이프라인이 수행합니다.</p></div></li>
        <li><span>02</span><div><h3>자동으로 게시합니다.</h3><p>만화는 이곳에 저장하고 영상은 YouTube에 게시해 연결합니다.</p></div></li>
        <li><span>03</span><div><h3>사용 모델을 공개합니다.</h3><p>확인된 모델과 버전, 기록이 없는 부분을 구분해 표시합니다.</p></div></li>
      </ol>
    </section>
  `;
}

export function worksPage({ series: allSeries }) {
  return `
    <section class="page-intro">
      <p class="eyebrow">ALL OUTPUTS</p>
      <h1>작품</h1>
      <p>AI가 만들고 연재하는 만화와 영상.</p>
    </section>
    <section class="works-list" aria-labelledby="works-filter-title">
      <h2 class="sr-only" id="works-filter-title">작품 필터</h2>
      <div class="filter-tabs" role="group" aria-label="작품 종류">
        <button type="button" data-filter="all" aria-pressed="true">전체 <span>${allSeries.length}</span></button>
        <button type="button" data-filter="comic" aria-pressed="false">만화 <span>${allSeries.filter((item) => item.type === "comic").length}</span></button>
        <button type="button" data-filter="video" aria-pressed="false">영상 <span>0</span></button>
      </div>
      <div class="work-grid">
        ${allSeries.map((item) => seriesFeature(item)).join("")}
      </div>
      <div class="empty-state" data-filter-empty role="status" hidden>
        <p class="eyebrow">NO OUTPUT YET</p>
        <h2>아직 게시된 작품이 없습니다.</h2>
        <p>새 작품이 게시되면 이곳에서 볼 수 있습니다.</p>
      </div>
    </section>
  `;
}

function seriesFeature(currentSeries) {
  const currentEpisodes = currentSeries.episodes;
  const currentLatest = currentEpisodes.at(-1);
  return `
    <a class="series-feature" data-work-card data-type="${escapeHtml(currentSeries.type)}" href="/series/${currentSeries.slug}/">
      <div class="series-feature__image">
        <img src="${currentLatest.pages[0].src}" width="${currentLatest.pages[0].width}" height="${currentLatest.pages[0].height}" alt="${escapeHtml(currentSeries.title + " " + currentLatest.title)} 표지" loading="lazy">
        <span>${currentEpisodes.length} EPISODES</span>
      </div>
      <div class="series-feature__body">
        <div class="meta-row"><span>만화</span><span>연재 중</span><span>${escapeHtml(currentSeries.schedule?.shortLabel || "AI 제작")}</span></div>
        <h3>${escapeHtml(currentSeries.title)}</h3>
        <p>${escapeHtml(currentSeries.summary)}</p>
        <strong>연재 보기 <span aria-hidden="true">↗</span></strong>
      </div>
    </a>
  `;
}

export function modelsPage(content) {
  const allEpisodes = content.series.flatMap((series) => series.episodes);
  const episodesWithoutImageModel = allEpisodes.filter(
    (episode) => episode.provenance?.image?.status !== "known-provider",
  );
  return `
    <section class="page-intro">
      <p class="eyebrow">MODEL DISCLOSURE</p>
      <h1>AI 모델</h1>
      <p>작품에 사용된 것으로 확인된 모델만 표시합니다. 기록이 없는 정보는 추측하지 않습니다.</p>
    </section>
    <section class="model-list" aria-label="사용 모델">
      ${content.models.map((model) => modelCard(model)).join("")}
      ${
        episodesWithoutImageModel.length > 0
          ? `
        <article class="model-card model-card--unknown">
          <div class="model-card__index">?</div>
          <div>
            <p class="eyebrow">RECORD NOT AVAILABLE</p>
            <h2>일부 회차 모델 기록 없음</h2>
            <p>AI 이미지 생성물임은 확인되지만 제공사와 정확한 모델을 확인할 제작 기록이 없습니다.</p>
          </div>
        </article>
      `
          : ""
      }
    </section>
    <aside class="disclosure-note">
      <strong>표시 원칙</strong>
      <p>모델 버전이 확인되지 않으면 서비스명이나 생성 도구까지만 공개하고, 작품 품질을 모델 자체의 점수로 환산하지 않습니다.</p>
    </aside>
  `;
}

function modelCard(model) {
  return `
    <article class="model-card">
      <div class="model-card__index">AI</div>
      <div>
        <p class="eyebrow">${escapeHtml(model.provider)} · ${escapeHtml(model.roles.join(" · "))}</p>
        <h2><a href="/models/${model.id}/">${escapeHtml(model.name)}</a></h2>
        <dl>
          <div><dt>도구</dt><dd>${escapeHtml(model.tool)}</dd></div>
          <div><dt>버전</dt><dd>${escapeHtml(model.version || "기록 없음")}</dd></div>
          <div><dt>사용 범위</dt><dd>${escapeHtml(model.episodeRange)}</dd></div>
        </dl>
      </div>
    </article>
  `;
}

export function modelDetailPage(model, { series: allSeries }) {
  const knownEpisodes = allSeries.flatMap((item) =>
    item.episodes
      .filter((episode) => episode.provenance?.image?.model === model.name)
      .map((episode) => ({ series: item, episode })),
  );
  return `
    <section class="page-intro">
      <a class="back-link" href="/models/">← AI 모델</a>
      <p class="eyebrow">${escapeHtml(model.provider)} · IMAGE GENERATION</p>
      <h1>${escapeHtml(model.name)}</h1>
      <p>${escapeHtml(model.versionNote)}</p>
    </section>
    <section class="fact-grid" aria-label="모델 정보">
      <div><span>제공사</span><strong>${escapeHtml(model.provider)}</strong></div>
      <div><span>제작 단계</span><strong>${escapeHtml(model.roles.join(", "))}</strong></div>
      <div><span>도구</span><strong>${escapeHtml(model.tool)}</strong></div>
      <div><span>확인된 범위</span><strong>${escapeHtml(model.episodeRange)}</strong></div>
    </section>
    <section class="model-works" aria-labelledby="model-works-title">
      <div class="section-heading section-heading--row">
        <div><p class="eyebrow">RECORDED OUTPUTS</p><h2 id="model-works-title">이 모델 기록이 있는 작품</h2></div>
        <span>${knownEpisodes.length}화</span>
      </div>
      <div class="episode-grid">
        ${
          knownEpisodes
            .slice()
            .reverse()
            .map((item) => episodeCard(item.series, item.episode))
            .join("") ||
          '<p class="empty-state" role="status">이 모델로 제작한 공개 회차가 없습니다.</p>'
        }
      </div>
    </section>
  `;
}

export function processPage() {
  return `
    <section class="page-intro">
      <p class="eyebrow">AUTONOMOUS PIPELINE</p>
      <h1>100% AI 제작,<br>자동 게시.</h1>
      <p>AI Slop의 작품은 AI와 자동화 도구가 기획, 생성, 조립과 게시를 이어서 수행합니다.</p>
    </section>
    <section class="process-flow" aria-label="제작 과정">
      <article><span>01</span><div><p class="eyebrow">PLAN</p><h2>AI가 기획합니다.</h2><p>주제, 이야기 구조와 회차 구성을 AI 제작 파이프라인이 만듭니다.</p></div></article>
      <article><span>02</span><div><p class="eyebrow">GENERATE</p><h2>AI가 제작합니다.</h2><p>만화 이미지, 영상, 음성과 필요한 구성 요소를 생성합니다.</p></div></article>
      <article><span>03</span><div><p class="eyebrow">ASSEMBLE</p><h2>자동으로 조립합니다.</h2><p>작품별 규칙에 따라 이미지 안 대사 또는 사이트 캡션을 사용하고, 페이지 순서와 출력 형식을 완성합니다.</p></div></article>
      <article><span>04</span><div><p class="eyebrow">PUBLISH</p><h2>자동으로 게시합니다.</h2><p>만화는 사이트 내부에 저장하고, 영상은 YouTube에 게시한 뒤 사이트에 연결합니다.</p></div></article>
    </section>
    <section class="format-split">
      <article><p class="eyebrow">COMICS</p><h2>만화</h2><p>독자용 이미지와 제작 정보를 AI Slop 내부에 저장합니다.</p></article>
      <article><p class="eyebrow">VIDEO</p><h2>영상</h2><p>영상 파일은 YouTube에 게시하고 AI Slop에는 플레이어와 제작 정보를 연결합니다.</p></article>
    </section>
    <aside class="disclosure-note">
      <strong>100% AI의 의미</strong>
      <p>작품 내용은 AI와 자동화 도구로 제작합니다. 사람은 시스템과 공개 상태를 관리하며, 확인 가능한 모델 정보와 기록의 공백을 함께 표시합니다.</p>
    </aside>
  `;
}

export function seriesPage(currentSeries, models = []) {
  const currentEpisodes = currentSeries.episodes;
  const currentLatest = currentEpisodes.at(-1);
  const known = currentEpisodes.filter(
    (episode) => episode.provenance?.image?.status === "known-provider",
  );
  const modelNames = [
    ...new Set(known.map((episode) => episode.provenance.image.model)),
  ];
  return `
    <section class="series-hero">
      <div class="series-hero__copy">
        <p class="eyebrow">AI COMIC · SERIAL</p>
        <h1>${escapeHtml(currentSeries.title)}</h1>
        <p>${escapeHtml(currentSeries.summary)}</p>
        <div class="meta-row meta-row--large"><span>만화</span><span>연재 중</span><span>${currentEpisodes.length}화</span></div>
        <a class="button button--dark" href="/comics/${currentSeries.slug}/${currentLatest.id}/">최신화 읽기 <span aria-hidden="true">→</span></a>
      </div>
      <div class="series-hero__image">
        <img src="${currentLatest.pages[0].src}" width="${currentLatest.pages[0].width}" height="${currentLatest.pages[0].height}" alt="${escapeHtml(currentLatest.title)} 표지">
        <span>LATEST · ${String(currentLatest.number).padStart(3, "0")}</span>
      </div>
    </section>
    <section class="episodes" aria-labelledby="episodes-title">
      <div class="section-heading section-heading--row">
        <div><p class="eyebrow">ALL EPISODES</p><h2 id="episodes-title">전체 회차</h2></div>
        <span>최신순 · ${currentEpisodes.length}</span>
      </div>
      <div class="episode-grid">
        ${currentEpisodes
          .slice()
          .reverse()
          .map((episode) => episodeCard(currentSeries, episode))
          .join("")}
      </div>
    </section>
    <section class="series-model">
      <div><p class="eyebrow">MODEL DISCLOSURE</p><h2>제작 모델</h2></div>
      <dl>
        <div><dt>이미지 생성</dt><dd>${modelNames.map((name) => modelLink(name, models)).join(", ") || "기록 없음"}</dd></div>
        <div><dt>정확한 버전</dt><dd>기록 없음</dd></div>
        <div><dt>기록 상태</dt><dd>${known.length}/${currentEpisodes.length}화 제공사 확인</dd></div>
      </dl>
    </section>
    ${seriesGuide(currentSeries)}
  `;
}

function seriesGuide(currentSeries) {
  const guideItems = [
    {
      label: "연재 일정",
      title: currentSeries.schedule?.label,
      detail: currentSeries.schedule?.note,
    },
    {
      label: "작품 형식",
      title: currentSeries.format?.label,
      detail: currentSeries.format?.detail,
    },
    {
      label: "내용 기반",
      title: currentSeries.basis?.label,
      detail: currentSeries.basis?.detail,
    },
    {
      label: "대상 독자",
      title: currentSeries.audience,
      detail: `시간대 · ${currentSeries.schedule?.timezone || "Asia/Seoul"}`,
    },
  ];
  return `
    <section class="series-guide" aria-labelledby="series-guide-title">
      <div class="series-guide__intro">
        <div><p class="eyebrow">SERIES GUIDE</p><h2 id="series-guide-title">작품 안내</h2></div>
        <p>${escapeHtml(currentSeries.about || currentSeries.summary)}</p>
      </div>
      <div class="series-guide__grid">
        ${guideItems
          .map(
            (item) => `
          <article>
            <span>${escapeHtml(item.label)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function episodeCard(currentSeries, episode) {
  const cover = episode.pages[0];
  const modelLabel =
    episode.provenance.image.status === "known-provider"
      ? episode.provenance.image.model
      : "모델 기록 없음";
  return `
    <article class="episode-card">
      <a href="/comics/${currentSeries.slug}/${episode.id}/">
        <div class="episode-card__image">
          <img src="${cover.src}" width="${cover.width}" height="${cover.height}" alt="${escapeHtml(episode.title)} 표지" loading="lazy">
          <span>EP. ${String(episode.number).padStart(3, "0")}</span>
        </div>
        <div class="episode-card__body">
          <h3>${escapeHtml(episode.shortTitle)}</h3>
          <p>${escapeHtml(episode.lead)}</p>
          <small>${escapeHtml(modelLabel)}</small>
        </div>
      </a>
    </article>
  `;
}
