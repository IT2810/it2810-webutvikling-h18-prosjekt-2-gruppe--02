import React, { Component } from 'react';
import FigureFetch from "./FigureFetch";
import JsonFetch from "./JsonFetch";
import AudioFetch from "./AudioFetch";

class Content extends Component {

    render() {
        return (
            <div>
                <FigureFetch targets={this.props.targets}/>
                <JsonFetch targets={this.props.targets}/>
                {/*<AudioFetch/>*/}
            </div>

        );
    }

}

export default Content;