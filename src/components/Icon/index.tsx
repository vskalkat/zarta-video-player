import { CSSProperties } from "react";

interface IProps{
    srcPath: string,
    style?: CSSProperties
}

const Icon = ({srcPath, style}: IProps) => {
    return (
        <img className='icon' src={srcPath} style={style} />
    )
}

export default Icon;