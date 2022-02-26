import './button.css'

interface IButton{
    label: string,
    onClick?: () => void,
    filled?: boolean,
}

const Button = ({label, onClick, filled=false}: IButton) => {
    return (
        <button value={label} className={`button ${filled ? 'filled' : ''}`}>
            {label}
        </button>
    )
}

export default Button;