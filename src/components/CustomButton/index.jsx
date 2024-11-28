import './Buton.css'

const CustomButon = (props) =>{
    return(
        <div>
            <button className='buttonClass'>
                {props.name}
            </button>
        </div>
    )
}
export default CustomButon