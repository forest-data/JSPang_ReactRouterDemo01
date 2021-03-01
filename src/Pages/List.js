import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>List-page- {this.state.id} </h2> );
    }

    // 接收值 在 生命周期函数中, 传递过来的值也是在props中
    componentDidMount(){
        console.log(this.props)
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
}
 
export default List;