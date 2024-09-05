import React, { Component, createContext } from "react";
import YouTubeComp from "../../components/YouTubeComp/YouTubeComp";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogSpot from "../pages/BlogPost/BlogSpot";
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavigateProvider } from "../pages/BlogPost/NavigateContext";
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";


export const RootContext = createContext();
const Provider = RootContext.Provider;
class Home extends Component {

    state = {
        totalOrder: 0
    }

    // ingin memiripkan dengann redux
    dispatch = (action) => {
        if(action.type === 'PLUS_ORDER') {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            });
        }
        if(action.type === 'MINUS_ORDER') {
            return this.setState({
                totalOrder: this.state.totalOrder - 1
            });
        }

    }
    render() {
        return (
            <Router>
{/*             \
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
            {/* Value boleh diisi apa saja contoh disini adalah diisi seperti Redux */}
            <Provider value={{ 
                state: this.state,
                dispatch: this.dispatch
             }}> 
            <h1>Pilih Halaman kamu</h1>
            <div className="" style={{ display: 'flex', gap: '10px' }}>
                <Link to="/product">Product</Link>
                <Link to="/lifecycle">LifeCycle</Link>
                <Link to="/">Home</Link>
            </div>
            <NavigateProvider>
            <Routes>
            <Route path="/" exact Component={BlogSpot} />
            <Route path="/detail/:id" Component={DetailPost} />
            <Route path="/product" Component={Product} />
            <Route path="/lifecycle" Component={LifeCycleComp} />
            </Routes>
            </NavigateProvider>
            </Provider>
            </Router>
        )
    }
}

export default Home;