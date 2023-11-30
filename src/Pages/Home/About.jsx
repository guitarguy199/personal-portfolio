import './About.css';

const About = () => {

    const aboutContent = [
        {
            title: 'Web Dev',
            icon: faCheckCircle,
            description: 'Lorem Ipsum'
        },
        {
            title: 'Web Dev',
            icon: faCheckCircle,
            description: 'Lorem Ipsum'
        },
        {
            title: 'Web Dev',
            icon: faCheckCircle,
            description: 'Lorem Ipsum'
        },
    ]

    return (
        <section>
            <div className='about-text'>
                <h3>About Me</h3>
            </div>
            <div className='grid container about-grid'>

            </div>
        </section>
    )
}

export default About;