import './skillTile.css'

const Tile = (props) => {
    return(
        <div className='Tile'>
            {props.skill}
        </div>
    )
}
export default Tile