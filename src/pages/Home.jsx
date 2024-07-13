//images
import north_img from '../assets/images/north_ships.jpg'
import bandwidth_img from '../assets/images/bandwidth.jpg'
import crystals_img from '../assets/images/crystals_casiowary.jpg'
import early_img from '../assets/images/early_electric_state.jpg'
import essoladan_img from '../assets/images/essoladan.jpg'
import highway_img from '../assets/images/highway_patrol.jpg'
import loop_img from '../assets/images/loop.jpg'
import missing_img from '../assets/images/missing_persosn.jpg'
import spawning_img from '../assets/images/spawning_event.jpg'
import course_img from '../assets/images/the_course.jpg'


export default function Home() {
    return (
        <>
        <div className="headerQuote" id="quote">
            <h2>
                <i> "When I read a Simon Stålenhag book, 
                I spend days scanning the trees around my house, looking for a shudder in the leaves; 
                for the hump of a giant robot rising over the treeline, just beginning to stand"</i>
            </h2>
        </div>
        <div id="rightbox">
            <p> Simon Stålenhag is a Swedish artist, musician, and designer specialising in retro-futuristic digital images focused on nostalgic Swedish countryside alternate history environments. 
            The settings of his artwork have formed the basis for the 2020 Amazon television drama series Tales from the Loop.</p>
            <p> Stålenhag's highly imaginative landscapes depict bizarre sci-fi phenomena in mundane, hyper-realistic Scandinavian and American
          environments, have made his work some of the most captivating examples of expert visual storytelling in the world.</p>
            <p> The following works are from some of my personal favorite from his 
            commissioned and unreleased works.</p>
        </div>

        <div className="imageContainer">
            <img src={north_img} alt='North Ships'/><br></br>
            <img src={bandwidth_img} alt='Bandwidth'/><br></br>
            <img src={crystals_img} alt='Crystals'/><br></br>
            <img src={early_img} alt='Early Electric State'/><br></br>
            <img src={essoladan_img} alt='Essoladan'/><br></br>
            <img src={highway_img} alt='Highway'/><br></br>
            <img src={loop_img} alt='Loop'/><br></br>
            <img src={missing_img} alt='Missing Person'/><br></br>
            <img src={spawning_img} alt='Spawning'/><br></br>
            <img src={course_img} alt='The Course'/><br></br>
        </div>
        </>
    )
}