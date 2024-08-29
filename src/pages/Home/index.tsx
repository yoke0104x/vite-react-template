/*
 * @description: home
 * @author: Yoke
 * @Date: 2024-08-15 14:50:05
 */
import Carousel from "./Carousel";
import Featured from "./Featured";

// https://www.richtechrobotics.com/

const Home = () => {
    return <div className="px-[5%]">
        <Carousel />
        <Featured />
    </div>
}
export default Home