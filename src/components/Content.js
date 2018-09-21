import React, { Component } from 'react';
import FigureFetch from "./FigureFetch";
import JsonFetch from "./JsonFetch";

class Content extends Component {

    render() {
        return (
            <div>
                <FigureFetch svgTarget={this.props.svgTarget}/>
                <JsonFetch tekstTarget={this.props.tekstTarget}/>
            </div>

        );
    }

}

export default Content;