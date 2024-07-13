// images
import loop1 from '../assets/images/loop/loop1.jpg'
import loop2 from '../assets/images/loop/loop2.jpg'
import loop3 from '../assets/images/loop/loop3.jpg'
import loop4 from '../assets/images/loop/loop4.jpg'
import loop5 from '../assets/images/loop/loop5.jpg'
import loop6 from '../assets/images/loop/loop6.jpg'
import loop7 from '../assets/images/loop/loop7.jpg'
import loop8 from '../assets/images/loop/loop8.jpg'
import loop9 from '../assets/images/loop/loop9.jpg'
import loop10 from '../assets/images/loop/loop10.jpg'
import loop11 from '../assets/images/loop/loop11.jpg'

export default function Tales() {
    return (<>
            <div id="rightboxLoop">
                <p> The Loop was deep underground. It was an enormous circular particle accelerator and research facility for 
            experimental physics that stretched around northern Mälaröarna, 
            from Hilleshög in the east almost all the way to Härjarö to the north; 
            it continued west across Björkfjärden and around the west side of Adelsö, to pass underneath Björkö 
            and its remains of civilizations past. 
            The Loop's presence was felt everywhere on Mälaröarna. Our parents worked there. 
            Riksenergi's service vehicles patrolled the roads and the skies. Strange machines roamed in the woods,
             the glades, and the meadows. Whatever forces reigned deep below sent vibrations up through the bedrock, 
             the flint lime bricks, and the Eternit facades, and into our living rooms.
            The landscape was full of machines and scrap metal connected to the facility in one way or the other. 
            Always present on the horizon were the colossal cooling towers of the Bona reactor, with their green obstacle lights. 
            If you put your ear to the ground, you could hear the heartbeat of the Loop: the purring of the Gravitron, 
            the central piece of engineering magic that was the focus of the Loop's experiments. 
            The facility was the largest of its kind in the world, and it was said that its forces could curve space-time itself.</p>
            </div>

        <div className="imageContainer">
            <img src={loop1} alt='loop1'/><br></br>
            <img src={loop2} alt='loop2'/><br></br>
            <img src={loop3} alt='loop3'/><br></br>
            <img src={loop4} alt='loop4'/><br></br>
            <img src={loop5} alt='loop5'/><br></br>
            <img src={loop6} alt='loop6'/><br></br>
            <img src={loop7} alt='loop7'/><br></br>
            <img src={loop8} alt='loop8'/><br></br>
            <img src={loop9} alt='loop9'/><br></br>
            <img src={loop10} alt='loop10'/><br></br>
            <img src={loop11} alt='loop11'/><br></br>
        </div>
        </>)
}