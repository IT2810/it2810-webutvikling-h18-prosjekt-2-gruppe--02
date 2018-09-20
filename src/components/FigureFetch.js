import React, { Component } from 'react';

class FigureFetch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(this.props)
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
export default FigureFetch;