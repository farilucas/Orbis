export default function Modal(props){
    return <div id="myModal" className="modal" style={ props.show ? {display: "block" }: {display: "none" }}>
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => props.setShow(false)}>&times;</span>
                <h2>{props.title} Map</h2>
            </div>
            <div className="modal-body">
                <iframe 
                    title="map" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src={'https://maps.google.com/maps?q=' + 
                    props.lat.toString() + 
                    ',' + 
                    props.lon.toString() + 
                    '&t=&z=15&ie=UTF8&iwloc=&output=embed'}>
                </iframe>
            </div>
            <div className="modal-footer">
                <h2 className="modal-footer-text">Orbis</h2>
            </div>
        </div>
    </div>
}