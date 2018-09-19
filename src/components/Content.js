import React, { Component } from 'react';

class Content extends Component {
    constructor() {
        super();
        this.state = {fig: ''};
    }

    componentDidMount() {
        fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg')
            .then(response => response.text())
            .then(text => {this.setState({fig: text}); console.log(text);})
            .catch(function (error) {
                console.log('Some problem... \n', error);
            });
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.fig}} />


    );
    }

}

export default Content;