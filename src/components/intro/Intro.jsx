import './intro.css'
import Man from '../../img/man.png'
import Mouse from '../../img/mouse.svg'

const Intro = () => {
    return (
        <div className="intro">

            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <div className="intro-msg">Hello, my name is</div>
                    <h1 className="intro-name">Thiago Silva</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">UI / UX Designer</div>
                            <div className="intro-title-item">Frontend Developer</div>
                            <div className="intro-title-item">Gamer</div>
                            <div className="intro-title-item">Content Creator</div>
                        </div>
                    </div>

                    <p className="intro-description">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                    </p>

                    <img src={Mouse} className="intro-scroll" alt="mouse" />

                </div>
            </div>

            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Man} alt="man" className="intro-img" />
            </div>

        </div>
    )
}

export default Intro