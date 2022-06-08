import './about.css'
import AwardImg from '../../img/award.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img className="about-card-img" src="https://images.pexels.com/photos/1540983/pexels-photo-1540983.jpeg" alt="photo 1" />
                </div>
            </div>

            <div className="about-right">

                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quibusdam.
                </p>

                <p className="about-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium nisi sint amet voluptatibus molestias ratione, rerum qui ipsam illo exercitationem placeat quo perferendis voluptate adipisci id at natus! Fugiat.
                </p>

                <div className="about-award">
                    <img src={AwardImg} className="about-award-img" alt="award" />

                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Design</h4>
                        <p className="about-award-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nostrum.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About