import './Avatar.css'

export default function Avatar(props){
    console.log(props);
    return <div style={props.style}>
        <img src={props.image} alt={props.alt} className={`avatar ${props.className}`} style={{width: props.width, height: props.width}}/>
    </div>
} 