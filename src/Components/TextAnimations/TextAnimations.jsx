import './textanimations.scss';

const TextAnimations = ({charClass, currentArray, index}) => {
    return(
        <span>
            {currentArray.map((char, idx) => {
                return <span key={idx} className={`${charClass} _${idx + index}`}>{char}</span>
            })}
        </span>
    )
}

export default TextAnimations;