import React, { Component } from 'react';
import FigureFetch from "./FigureFetch";
import JsonFetch from "./JsonFetch";

class Content extends Component {

    render() {
        return (
            <div>
                <FigureFetch targets={this.props.targets}/>
                <JsonFetch targets={this.props.targets}/>
            </div>

        );
    }

}

export default Content;