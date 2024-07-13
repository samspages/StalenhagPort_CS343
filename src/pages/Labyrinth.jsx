// import 
import l1 from "../assets/images/labyrinth/l1.jpg"
import l2 from "../assets/images/labyrinth/l2.jpg"
import l3 from "../assets/images/labyrinth/l3.jpg"
import l4 from "../assets/images/labyrinth/l4.jpg"
import l5 from "../assets/images/labyrinth/l5.jpg"
import l6 from "../assets/images/labyrinth/l6.jpg"
import l7 from "../assets/images/labyrinth/l7.jpg"
import l8 from "../assets/images/labyrinth/l8.jpg"
import l9 from "../assets/images/labyrinth/l9.jpg"
import l10 from "../assets/images/labyrinth/l10.jpg"
import l11 from "../assets/images/labyrinth/l11.jpg"

export default function Labyrinth() {
    return (<>

<div id="rightboxES">
        <p> One summer when we were young, I caught a small
            snake. I carried it around in a clear plastic container
            where I had placed some stones and a few fern
            leaves. When I opened the container to show Matte
            the snake, he promptly reached his hand in, grabbed
            the snake and ran away. But he hadn't gone further
            than a few meters when he gave a panicked scream.
            The snake had broken in the middle. The front part
            with the head disappeared under the house and the
            back part stayed writhing in a small bloody pool in
            my big brother's palm. Repulsed, he tossed it aside.
            I later learned that it hadn't been a snake at all but a
            slowworm, a creature that lacks legs and that has the
            ability to shed its tail. It is a defense mechanism. It is
            called autotomy. The slowworm couldn't compete
            with my brother's intelligence or strength but it
            could save its life by doing something completely
            unexpected and unthinkable: perform an act of vio-
            lence against itself and mutilate its own body.
            That was how it managed to escape.</p>
      </div>

        <div className="imageContainer">
            <img src={l1} alt='l1'/><br></br>
            <img src={l2} alt='l2'/><br></br>
            <img src={l3} alt='l3'/><br></br>
            <img src={l4} alt='l4'/><br></br>
            <img src={l5} alt='l5'/><br></br>
            <img src={l6} alt='l6'/><br></br>
            <img src={l7} alt='l7'/><br></br>
            <img src={l8} alt='l8'/><br></br>
            <img src={l9} alt='l9'/><br></br>
            <img src={l10} alt='l10'/><br></br>
            <img src={l11} alt='l11'/><br></br>
        </div>
        </>)
}