import Image from 'next/image'

function Tile(props) {
  console.log(props.card)
  let playable = (<div style={{position: 'absolute', zIndex: '2', width: '100px', height: '100px'}}></div>)
  if(props.isPlayable) playable = (<div style={{position: 'absolute', zIndex: '2', width: '100px', height: '100px', backgroundColor: 'green', opacity: '.2'}}></div>)
  let rotationStyle = `rotate(${props.card.rotation * 90}deg)`
  
  return (
    <div 
    style={{position: 'relative', width: '100px', height: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} 
    onClick={() => props.isPlayable && props.onTileClick(props.id)}
    >
      <img
      style={{position: 'absolute', width: '100px', zIndex: -1, transform: rotationStyle}}
      src={`/tuiles/${props.card.img}.png`}
      />
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
