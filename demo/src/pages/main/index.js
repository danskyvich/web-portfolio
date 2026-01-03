import "./index.css"
import styles from "index.css"
import Header from "components/header/header.jsx"
import ItemCard from "components/item-card/item-card"
import SelfPicCard from "components/self-pic-card/self-pic-card"
import Footer from "components/footer/footer"
import HeaderCard from "../../components/header/header-card/header-card"

const Home = () => {
    return (
        <div className="container" style={styles.container}>
            <Header />
            <SelfPicCard/>
            <div className="resume-container">
                <HeaderCard
                link={""}
                text={"📃View my resume!"}
                textColor={"white"}
                bgColor={"black"}
                align={"center"}
                width={"20%"}
            />
            </div>
            <div className="featured-works container">
                <h1 id="works1">Featured Projects</h1>
                <div className={"horizontal-grid"}>
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"TOKUEN Website"}
                        itemDesc={"The main web application of TOKUEN's web interface."}
                        textColor={"white"}
                        headingColor={"white"}
                        contentColor={"white"}
                        bgColor={"#85409D"}
                        progress={"In progress"}
                    />
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        textColor={"white"}
                        bgColor={"#EEA727"}
                        progress={"Finished"}
                    />
                </div>
            </div>
            <div className="other-works container">
                <h1 id="works2">Other Works</h1> 
                <div className={"horizontal-grid"}>
                    <ItemCard
                        img={"./images/card-covers/hex-color.png"}
                        itemName={"Hexadecimal to color converter"}
                        itemDesc={"A simple, JS website that converts hexadecimal input to its corresponding color equivalent"}
                        borderAttributes={"2px solid black"}
                        url={"https://github.com/danskyvich/hexadecimal-to-color-converter"}
                        headingColor={"black"}
                        contentColor={"black"}
                    />
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        borderAttributes={"2px solid black"}
                    />
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        borderAttributes={"2px solid black"}
                    />
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        borderAttributes={"2px solid black"}
                    />
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        borderAttributes={"2px solid black"}
                    />
                    <ItemCard
                        img={"./images/card-covers/work-1-bg.png"}
                        itemName={"Project Name"}
                        itemDesc={"Place a short description here about this specific project."}
                        borderAttributes={"2px solid black"}
                    />
                </div>
            </div>
            <div className="misc-works container">
                <h1 id="misc">Miscellaneous Works</h1>
                <div className={"vertical-grid"}>
                    <ItemCard
                        itemName={"Creative Writing - Worldbuilding Project"}
                        itemDesc={"A wiki-style worldbuilding project of a fictional, European-style monarchial state"}   
                        width={"100%"}   
                        borderAttributes={"2px solid white"} 
                        bgColor={""}        
                        textAlign={"start"} 
                        textStyle={"italic"}  
                        url={"https://iiwiki.com/wiki/Chatten_and_Leucen"}
                        headingColor={"white"}
                        contentColor={"white"}
                    />
                    <ItemCard
                        itemName={"Creative Writing - Worldbuilding Project"}
                        itemDesc={"A wiki-style worldbuilding project of a fictional, European-style monarchial state"}   
                        width={"100%"}   
                        borderAttributes={"2px solid white"} 
                        bgColor={""}        
                        textAlign={"start"} 
                        textStyle={"italic"}  
                        url={"https://iiwiki.com/wiki/Chatten_and_Leucen"}
                        headingColor={"white"}
                        contentColor={"white"}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;