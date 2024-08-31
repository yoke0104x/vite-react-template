/*
 * @description: home
 * @author: Yoke
 * @Date: 2024-08-15 14:50:05
 */
import Apart from "./Apart";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Featured from "./Featured";
import Lineup from "./Lineup";

// https://www.richtechrobotics.com/

const Home = () => {
    return <div>
        <Carousel />
        <Featured />
        <Lineup />
        <Contact />
        <Apart />
    </div>
}
export default Home