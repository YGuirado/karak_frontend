function Tile(props) {

  let playable = (<div style={{position: 'absolute', zIndex: '2', width: '100px', height: '100px'}}></div>)
  if(props.isPlayable) playable = (<div style={{position: 'absolute', zIndex: '2', width: '100px', height: '100px', backgroundColor: 'green', opacity: '.2'}}></div>)
  
  return (
    <div 
    style={{backgroundImage: `url(${props.card.img})`, backgroundSize: 'cover', width: '100px', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} 
    onClick={() => props.isPlayable && props.onTileClick(props.id)}
    >
    {playable}
      <div style={{width: '100px'}}>&nbsp;&nbsp;{props.card.data[0]}</div>
      <div style={{width: '100px', justifyContent: 'space-between'}}>
        <p style={{textAlign: 'center'}}>{props.card.data[1]}</p><p style={{textAlign: 'center'}}>{props.id}</p><p style={{textAlign: 'center'}}>{props.card.data[3]}</p>
      </div>
      <div style={{width: '100px', textAlign: 'end'}}>{props.card.data[2]}&nbsp;&nbsp;</div>
    </div>
  );
}

export default Tile;
