import './header.css'
function Header(props){
    return(
        <div className='container'>
            {props.children}
        </div>
    )
}
export default Header