import React, {Component} from "react"; 
import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";

class Home extends Component {
    render() {
        return(
            <div>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp title="Tutorial Move On dari perempuan" desc="dimana kamu harus siap"/>
                <YouTubeComp title="Menjadi Laki-laki baik dan sopan berwibawa" desc="kamu adalah orang hebat bro"/>
                <YouTubeComp title="Tutorial NextJS" desc="gimana yaj, katamu kamu mau jadi backend aja?"/>
                <YouTubeComp/>  {/* tidak diberi props  */}
                
            </div>
        )
    }
}

export default Home;