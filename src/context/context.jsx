import { render } from "@testing-library/react";
import React, {createContext} from "react"


const RootContext = createContext();
// provider // penyedia konteks
const Provider = RootContext.Provider;
// membuat global provider
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends React.Component {
            state = {
                totalOrder: 0
            }
        
            // ingin memiripkan dengann redux
            dispatch = (action) => {
                if (action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    });
                }
                if (action.type === 'MINUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder - 1
                    });
                }
        
            }
            render() {
                return (
                    <Provider value={
                        {state: this.state, dispatch: this.dispatch}
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

// consumer // pemakai konteks

export default GlobalProvider;