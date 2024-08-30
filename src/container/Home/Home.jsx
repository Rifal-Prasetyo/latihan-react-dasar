import React, { Component, Fragment } from "react";
import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogSpot from "../BlogPost/BlogSpot";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <BrowserRouter>
{/*             
            <div>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp title="Tutorial Move On dari perempuan" desc="dimana kamu harus siap"/>
                <YouTubeComp title="Menjadi Laki-laki baik dan sopan berwibawa" desc="kamu adalah orang hebat bro"/>
                <YouTubeComp title="Tutorial NextJS" desc="gimana yaj, katamu kamu mau jadi backend aja?"/>
                <YouTubeComp/> 

                <p>Counter</p>
                <hr />
                <Product/>

                <p>LifeCycle Component</p>
                <hr />
                <LifeCycleComp/>

                <p>Blog Spot</p>
                <hr />
                <BlogSpot />

            </div> */}
            <h1>Pilih Halaman kamu</h1>
            <div className="" style={{ display: 'flex', gap: '10px' }}>
                <Link to="/product">Product</Link>
                <Link to="/lifecycle">LifeCycle</Link>
                <Link to="/">Home</Link>
            </div>
            <Routes>
            <Route path="/" exact Component={BlogSpot} />
            <Route path="/product" Component={Product} />
            <Route path="/lifecycle" Component={LifeCycleComp} />
            </Routes>
            </BrowserRouter>
        )
    }
}

export default Home;