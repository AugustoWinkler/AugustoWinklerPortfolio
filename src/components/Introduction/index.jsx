import CustomButon from '../CustomButton';
import Icon from '../Icon';
import Tile from '../skillTile';
import './Introduction.css';
import AltColor from '../AltColor';
import useScrollReveal from '../useScrollReveal';





const Introduction = () => {

    const [ref, isVisible] = useScrollReveal();

    return(
    <div ref={ref} className={`reveal ${isVisible ? 'reveal_visible' : ''}`}>
        <div className='introduction'>
            <div className='firstStep'>
                <h2> <AltColor color={'var(--SecondaryColor)'}> Hello</AltColor> i'm</h2>
                <div className="border-bar">
                    <div className="bordergradient2"></div>
                </div>
                <h1>Augusto Winkler</h1>
                <div className="border-bar">
                    <div className="bordergradient"></div>
                </div>
                <h3>a <AltColor color={'var(--SecondaryColor)'}> Software Engineering</AltColor> Student.</h3>
                <div className='button-container'>
                    <div className='buttonDiv'>
                        <Icon src='/GitHub.png' alt='GitHub' link='https://github.com/AugustoWinkler' />
                        <Icon src='/Linkedin.png' alt='Linkedin' link='https://www.linkedin.com/in/augusto-winkler-a268b81bb/' />
                    </div>
                    <a href="Augusto Winkler.pdf" download>
                        <CustomButon name='Download CV' />
                    </a>
                </div>
            </div>
            <div className='secondStep'>
                <h2>
                About
                <AltColor color={'var(--SecondaryColor)'}> Me</AltColor>
                </h2>
                <p>
                Hello! I'm 23 years old and currently living in São Paulo, Brazil. I'm passionate about learning and constantly challenging myself. Since 2023, I've been focused on exploring new technologies and improving my skills. I enjoy playing chess and solving puzzles
                </p>
                <section>
                    <Tile skill='Java'/>
                    <Tile skill='React'/>
                    <Tile skill='Java Script'/>
                    <Tile skill='HTML5'/>
                    <Tile skill='CSS3'/>
                    <Tile skill='Python'/>
                    <Tile skill='MySQL'/>
                </section>
                <p id='msg'>*Still Learning</p>
            </div>
        </div>
    </div>
        
    )
}
export default Introduction