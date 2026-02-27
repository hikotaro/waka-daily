const cardStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;600&family=Shippori+Mincho:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f5f0e8;
  }

  .waka-wrapper {
    font-family: 'Shippori Mincho', 'Noto Serif JP', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background:
      radial-gradient(ellipse at 20% 20%, rgba(180, 160, 120, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 80%, rgba(140, 110, 90, 0.1) 0%, transparent 60%),
      #f7f2e9;
    padding: 2rem;
  }

  /* 和紙のノイズ感 */
  .waka-wrapper::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.6;
    z-index: 0;
  }

  .waka-card {
    position: relative;
    z-index: 1;
    background: rgba(253, 249, 241, 0.92);
    border: none;
    padding: 3.5rem 3rem 3rem;
    max-width: 480px;
    width: 100%;
    box-shadow:
      0 1px 2px rgba(80, 60, 40, 0.08),
      0 4px 20px rgba(80, 60, 40, 0.1),
      0 12px 60px rgba(80, 60, 40, 0.08);
    transition: box-shadow 0.6s ease, transform 0.6s ease;
    cursor: default;
    overflow: hidden;
  }

  /* 左上の朱色アクセント線 */
  .waka-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, #c0392b 0%, #e8a87c 60%, transparent 100%);
    opacity: 0.7;
  }

  /* 右下の薄い装飾 */
  .waka-card::after {
    content: '';
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 40px;
    height: 40px;
    border-bottom: 1px solid rgba(140, 110, 80, 0.25);
    border-right: 1px solid rgba(140, 110, 80, 0.25);
  }

  .waka-card:hover {
    transform: translateY(-3px);
    box-shadow:
      0 2px 4px rgba(80, 60, 40, 0.1),
      0 8px 30px rgba(80, 60, 40, 0.14),
      0 20px 80px rgba(80, 60, 40, 0.1);
  }

  /* 歌番号 */
  .waka-number {
    position: absolute;
    top: 1.2rem;
    right: 1.6rem;
    font-size: 0.65rem;
    color: rgba(140, 110, 80, 0.5);
    letter-spacing: 0.15em;
    font-family: 'Noto Serif JP', serif;
    font-weight: 300;
  }

  /* 原文 */
  .waka-original {
    font-size: 1.35rem;
    line-height: 2.2;
    color: #2c1f0e;
    letter-spacing: 0.12em;
    font-weight: 500;
    margin-bottom: 1.4rem;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid rgba(140, 110, 80, 0.2);
    position: relative;
  }

  /* 読み仮名 */
  .waka-reading {
    font-size: 0.82rem;
    line-height: 2.1;
    color: #7a6450;
    letter-spacing: 0.18em;
    font-weight: 400;
    margin-bottom: 1.8rem;
    font-style: italic;
  }

  /* 作者情報エリア */
  .waka-author {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    padding-top: 0.8rem;
  }

  /* 区切り線（細い水平線） */
  .waka-divider {
    height: 1px;
    background: linear-gradient(to right, rgba(140, 110, 80, 0.3), transparent);
    margin-bottom: 0.8rem;
  }

  .waka-author-name {
    font-size: 0.9rem;
    color: #4a3728;
    font-weight: 600;
    letter-spacing: 0.1em;
  }

  .waka-author-reading {
    font-size: 0.72rem;
    color: #9a7e68;
    letter-spacing: 0.12em;
  }

  .waka-author-era {
    font-size: 0.68rem;
    color: #b09070;
    letter-spacing: 0.15em;
    margin-left: auto;
    padding: 0.2em 0.7em;
    border: 1px solid rgba(160, 120, 80, 0.3);
    border-radius: 2px;
  }
`;

export const Waka = ({ waka }) => {
  return (
    <>
      <style>{cardStyle}</style>
      <div className='waka-wrapper'>
        <div className='waka-card'>
          {waka.number && (
            <span className='waka-number'>No. {waka.number}</span>
          )}
          <p className='waka-original'>{waka.text.original}</p>
          <p className='waka-reading'>{waka.text.reading}</p>
          <div className='waka-divider' />
          <div className='waka-author'>
            <span className='waka-author-name'>{waka.author.name}</span>
            <span className='waka-author-reading'>
              （{waka.author.reading}）
            </span>
            <span className='waka-author-era'>{waka.author.era}</span>
          </div>
        </div>
      </div>
    </>
  );
};
