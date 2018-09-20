import React, { Component } from 'react';

class FigureFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {fig: ''};
    }

    componentDidMount() {
        let path = 'SVG/cat' + this.props.targets[0].toString() + '/fig' + this.props.targets[1].toString() + '.svg';
        fetch(path)
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