import './Hero.css';
import Austin from '../../assets/austin.jpeg';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='grid container'>
                <div className='hero-text'>
                </div>
                <div className='hero-text__content'>
                <h1>Hi, I&apos;m Austin O&apos;Neil</h1>
                    <h2>Description</h2>
                </div>
                <div className='hero-img__container'>
                    <img src={Austin} className='hero-img'></img>
                </div>
                <div className='split-header'>
            </div>
            </div>

        </section>
    )
}

export default Hero;