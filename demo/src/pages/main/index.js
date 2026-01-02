import "./index.css"
import styles from "index.css"
import Header from "components/header/header.jsx"
import SelfPicCard from "pages/main/self-pic-card/self-pic-card"
import SocialLinks from "pages/main/social-links/social-links"
import ItemCard from "pages/main/item-card-vertical/item-card"
import HorizontalCard from "pages/main/item-card-horizontal/horizontal-card"
import Footer from "components/footer/footer"

const Home = () => {
    return (
        <div className="container" style={styles.container}>
            <Header />
            <SelfPicCard/>
                <SocialLinks/>
            <div className="featured-works container">
                <h1 id="works1">Featured Projects</h1>
                <div className={"horizontal-grid"}>
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        bgColor={"#2d3558ff"}
                    />
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        bgColor={"#2d3558ff"}
                    />
                </div>
            </div>
            <div className="other-works container">
                <h1 id="works2">Other Works</h1> 
                <div className={"horizontal-grid"}>
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                    />
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                    />
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                    />
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                    />
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                    />
                    <ItemCard
                        img={"./images/resources/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                    />
                </div>
            </div>
            <div className="misc-works container">
                <h1 id="misc">Miscellaneous Works</h1>
                <div className={"vertical-grid"}>
                    <HorizontalCard
                        itemName={"Creative Writing Project --- Expansive Worldbuilding"}
                        link={"https://iiwiki.com/w/Chatten_and_Leucen"}
                        itemDesc={"A wiki-style worldbuilding and writing project that revolves around a UK-inspired island country."}
                    />
                    <HorizontalCard
                        itemName={"Cartography: Burnham's Plan of Manila (Alternate)."}
                        link={"#"}
                        itemDesc={"A subjective take on an alternate Manila implementing Daniel Burnham's city plan."}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;