import './Icon.css'

const Icon = (props) =>{
    return(
        <a href={props.link} target='_blank'>
            <div className='Icon'>
                <img src={props.src} alt={props.alt}>
                </img>
            </div>
        </a>

    )
}
export default Icon