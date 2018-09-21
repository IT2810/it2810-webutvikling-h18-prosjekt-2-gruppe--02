import { Component } from 'react';

class JsonFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {clearText: ''};
    }

    componentDidMount() {
        let path = 'text/' + this.props.tekstTarget[0] + '/' + this.props.tekstTarget[1] + '.json';
        fetch(path)
            .then(response => {return response.json();})
            .then(data => {this.setState({clearText: data.text})})
            .catch(function (error) {
                console.log('Some problem... \n', error);
            });
    }

    render() {
        this.componentDidMount();
        return(
            this.state.clearText
        );
    }

}

export default JsonFetch;