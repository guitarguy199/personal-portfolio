import './Hero.css';
import Austin from '../../assets/austin.jpeg';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='grid container'>
                <div className='hero-text'>
                    <h1>Hi, I&apos;m Austin O&apos;Neil</h1>
                    <h2>Description</h2>
                </div>
                <div className='hero-img'>
                    <img src={Austin}></img>
                </div>
            </div>
        </section>
    )
}

export default Hero;