import './Waka.css';

export const Waka = ({ waka }) => {
  return (
    <div className='waka-wrapper'>
      <div className='waka-card'>
        {waka.number && <span className='waka-number'>No. {waka.number}</span>}
        <p className='waka-original'>{waka.text.original}</p>
        <p className='waka-reading'>{waka.text.reading}</p>
        <div className='waka-divider' />
        <div className='waka-author'>
          <span className='waka-author-name'>{waka.author.name}</span>
          <span className='waka-author-reading'>（{waka.author.reading}）</span>
          <span className='waka-author-era'>{waka.author.era}</span>
        </div>
      </div>
    </div>
  );
};
