import favBtn from "../assets/icons/heart.svg"
import playBtn from "../assets/icons/play.svg"
import dotsBtn from "../assets/icons/dots.svg"

export const Buttons = () => {

    return (
        <div className="buttons-container">
            <a id="favorite" className="fav-btn">
                <img className="fav-img"  src={favBtn} alt="heart icon" width="40px"/>
            </a>
            <a id="play" className="play-btn">
                <img className="play-img" src={playBtn} alt="play icon" width="50px"/>
            </a>
            <a id="dots" className="dots-btn">
                <img className="dots-img"  src={dotsBtn} alt="dots icon" width="40px"/>
            </a>
        </div>
    )
}