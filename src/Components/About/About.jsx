import { useState, useEffect } from 'react'; 
import TextAnimations from '../TextAnimations/TextAnimations';
import Typewriter from 'typewriter-effect';
import Loader from 'react-loaders';
import './about.scss';

const About = () => {

    const [charClass, setCharClass] = useState('text-animation');

    useEffect(() => {
        const hoverTimer = setTimeout(() => {
            setCharClass('text-animation-hover');
        }, 4000)

        return () => clearTimeout(hoverTimer);
    }, [])

    return (
        <>
        <Loader type="line-scale" />
        <div className="section about-section">
            <div className="intro-title">
                <h1>
                    <TextAnimations charClass={charClass} currentArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} index={10} />
                </h1>
            </div>
            <p>I have a passion for creating beautiful, functional websites that deliver great user experiences. My expertise lies in front-end development, where I use my knowledge of HTML, CSS, and JavaScript to craft responsive and accessible designs that work across all devices and platforms.</p>
            <h2>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 200,
                        strings: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'SASS', 'Git/Github']
                    }
                    }
                />
            </h2>
        </div>
        </>
    )
}

export default About;