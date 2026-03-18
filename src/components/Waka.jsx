import './Waka.css';

export const Waka = ({ waka }) => {
  return (
    <div className='waka-wrapper'>
      <div className='waka-card'>
        {waka.number && <span className='waka-number'>第{waka.number}番</span>}
        <p className='waka-original'>{waka.text.original}</p>
        <p className='waka-reading'>{waka.text.reading}</p>
        <p className='waka-author'>{waka.author}</p>
        {waka.season && <p className='waka-season'>{waka.season}</p>}
      </div>
    </div>
  );
};
