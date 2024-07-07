import React, {Component} from "react"; 
// import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";
// import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component {

    render() {
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YouTubeComp title="Tutorial Move On dari perempuan" desc="dimana kamu harus siap"/>
                <YouTubeComp title="Menjadi Laki-laki baik dan sopan berwibawa" desc="kamu adalah orang hebat bro"/>
                <YouTubeComp title="Tutorial NextJS" desc="gimana yaj, katamu kamu mau jadi backend aja?"/>
                <YouTubeComp/>  {/* tidak diberi props  */}

                {/* <p>Counter</p>
                <hr />
                <Product/> */}

                <p>LifeCycle Component</p>
                <hr />
                <LifeCycleComp/>
            </div>
        )
    }
}

export default Home;