import { useState, useEffect } from 'react';
import TextAnimations from '../TextAnimations/TextAnimations';
import CartoonLogo from '../../assets/cartoon-edited.png'
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {

    const [charClass, setCharClass] = useState('text-animation');

    const nameArray = ['J', 'o', 'o', 'n', 'a', 's', ','];
    const titleArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        const hoverTimer = setTimeout(() => {
            setCharClass('text-animation-hover');
        }, 4000)

        return () => clearTimeout(hoverTimer)
        
    }, [])

    return(
        <>
        <Loader type="line-scale" />
        <div className="section home-section">
            <div className="intro-title">
                <h1>
                    <span className={`${charClass} _9`}>H</span>
                    <span className={`${charClass} _12`}>i,</span>
                    <br />
                    <span className={`${charClass} _13`}>I</span>
                    <span className={`${charClass} _14`}>'m&nbsp;</span>
                    <TextAnimations charClass={charClass} currentArray={nameArray} index={15} />
                    <br />
                    <TextAnimations charClass={charClass} currentArray={titleArray} index={20} />
                </h1>
            </div>
            <div className="btn-container">
                <Link className="btn" to="/contact">Contact</Link>
                <a className="btn" href="../../assets/NiemiJoonasCV.pdf" download="NiemiJoonasCV.pdf">Download CV</a>
            </div>
            <div className="cartoon-logo">
                <img src={CartoonLogo} alt="cartoon logo" />
            </div>
        </div>
        </>
    )
}

export default Home;