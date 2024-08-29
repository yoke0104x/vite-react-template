/*
 * @description: Featured
 * @author: Yoke
 * @Date: 2024-08-29 23:18:34
 */
const Featured = () => {
    const list = [{ "href": "https://www.cnn.com/travel/article/rice-robotics-hong-kong-hospitality-hnk-spc-intl/index.html", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb1052d7b8a21ff11c665_cnn-logo.webp" }, { "href": "https://www.foxbusiness.com/lifestyle/burgerfi-announces-robot-deliver-food-customers", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb1046cff1f1374abc30b_fox-business-logo.webp" }, { "href": "https://www.nbcnews.com/news/us-news/california-restaurant-turns-sassy-robot-replace-workers-n1275538", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb1bb9589d6725c474375_nbc-logo.webp" }, { "href": "https://www.businessinsider.com/10-things-in-tech-tech-hub-robot-waiter-tesla-settlement-2021-8?amp", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb1bb6cff1f4f47abc882_business-insider-logo.webp" }, { "href": "https://www.wired.com/story/peanut-the-waiter-robot-is-proof-that-your-job-is-safe/?utm_source=facebook&utm_medium=news_tab&utm_content=algorithm", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb10564db462bae0e303b_wired-logo.webp" }, { "href": "https://time.com/6076710/restaurants-labor-shortage/", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb105a3edff385832ffb2_time-logo.webp" }, { "href": "https://www.axios.com/2022/03/30/tell-your-problems-to-the-bartender", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb104d30e9261ac9f3928_axios-logo.webp" }, { "href": "https://fortune.com/2023/01/07/ces-2023-highlights-barista-robot-ar-app-eyebrows-consumer-electronics/", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/647fbd2526e6208585114a79_fortune-logo.webp" }, { "href": "https://www.eonline.com/videos/343465/you-have-to-see-kendall-jenners-robot-bartender", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb104a06ea577c540e52a_e-news-logo.webp" }, { "href": "https://www.forrester.com/blogs/robot-waiters-will-be-serving-you-soon/", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb1044c7d138b6940a3c3_forrester-logo.webp" }, { "href": "https://restauranttechnologynews.com/2022/06/robots-come-to-life-at-the-national-restaurant-association-show-and-beyond/", "img": "https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631bb105a3edff4f0132ffb3_restauratn-technology-news-logo.webp" }]
    return <div className="featured w-[60vw] mx-auto">
        <p className="font-bold text-xl text-center mt-20">As featured on:</p>

        <div className="mt-10 text-center">
            {list.map((item, index) => {
                return <a key={index} href={item.href} target="_blank" rel="noreferrer" className="inline-block">
                    <img src={item.img} alt="" className="w-[140px] m-1" />
                </a>
            })}
        </div>
    </div>
}
export default Featured