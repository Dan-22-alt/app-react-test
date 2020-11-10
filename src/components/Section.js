import React from 'react';
import Table from './Table';

class Reloj extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timeID = setInterval(()=>{this.clock()}, 1000)
    }

    clock(){
        this.setState({date: new Date()})
    }

    render(){
        return(
        <div>
            <h2>La hora es: {this.state.date.toLocaleTimeString()}</h2>
        </div>
        )
    }
}

const Section = () => {
    return(<section>
        <Reloj />
        <Table />
        </section>
    )
}

export default Section;