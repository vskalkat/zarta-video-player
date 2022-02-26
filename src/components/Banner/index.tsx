import './banner.css'
import Button from "../Button";

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className='banner-content'>
                <h3>
                    <span className='bold-header'>ClapClap to support</span> your favourite creators for your favourite content
                </h3>
                <div className="btn-row">
                    <Button label="How it works" />
                    <Button label="GET STARTED" filled/>
                </div>
            </div>
        </div>
    )
}

export default Banner;