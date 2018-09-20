import React, { Component } from 'react';

class JsonFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {clearText: ''};
    }

    componentDidMount() {
        let path = 'text/' + this.props.targets[0].toString() + '/' + this.props.targets[1].toString() + '.json';
        fetch(path)
            .then(response => {return response.json();})
            .then(data => {this.setState({clearText: data.text})})
            .catch(function (error) {
                console.log('Some problem... \n', error);
            });
    }

    render() {
        return(
            this.state.clearText
        );
    }

}

export default JsonFetch;