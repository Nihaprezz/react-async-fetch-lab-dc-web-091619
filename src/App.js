// create your App component here
import React from "react";

class App extends React.Component{

    componentDidMount(){
        
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    render(){
        return (
            <div>This is the app component</div>
        )
    }
}

export default App