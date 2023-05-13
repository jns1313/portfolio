import { useState, useEffect } from 'react';
import TextAnimations from '../TextAnimations/TextAnimations';
import Loader from 'react-loaders';
import ConverterApp from '../../assets/converter.png';
import TicTacApp from '../../assets/tictacscreen2.png';
import CountriesApp from '../../assets/countries.png';
import './projects.scss';

const Projects = () => {

    const [charClass, setCharClass] = useState('text-animation');

    useEffect(() => {
        const hoverTimer = setTimeout(() => {
            setCharClass('text-animation-hover');
        }, 4000)

        return () => clearTimeout(hoverTimer)
    }, [])


    return (
        <>
        <Loader type="line-scale" />
        <div className="section projects-section">
            <div className="intro-title">
                <h1>
                    <TextAnimations 
                        charClass={charClass} 
                        currentArray={['M', 'y', ' ', 'p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']} 
                        index={5} 
                    />
                </h1>
            </div>
            <div className="projects">
                <div className="project-card">
                    <div className="img-container">
                        <img src={ConverterApp} alt="currency converter" />
                    </div>
                    <div className="project-info">
                        <h4>Currency Converter</h4>
                        <a href="https://github.com/jns1313/currency-converter">View code</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="img-container">
                        <img src={TicTacApp} alt="tic tac toe game" />
                    </div>
                    <div className="project-info">
                        <h4>Tic-tac-toe</h4>
                        <a href="https://github.com/jns1313/tic-tac-toe">View code</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="img-container">
                        <img src={CountriesApp} alt="country data app" />
                    </div>
                    <div className="project-info">
                        <h4>Country info page</h4>
                        <a href="https://github.com/jns1313/countries-app">View code</a>
                    </div>
                </div>
                <div className="mobile-card">
                    <img src={ConverterApp} alt="currency converter" />
                    <a href="https://github.com/jns1313/currency-converter">View code</a>
                </div>
                <div className="mobile-card">
                    <img src={TicTacApp} alt="tic tac toe game" />
                    <a href="https://github.com/jns1313/tic-tac-toe">View code</a>
                </div>
                <div className="mobile-card">
                    <img src={CountriesApp} alt="country data app" />
                    <a href="https://github.com/jns1313/countries-app">View code</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;