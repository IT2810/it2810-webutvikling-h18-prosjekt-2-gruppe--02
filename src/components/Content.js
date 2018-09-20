import React, { Component } from 'react';
import FigureFetch from "./FigureFetch";
import JsonFetch from "./JsonFetch";
import AudioFetch from "./AudioFetch";

class Content extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <FigureFetch targets={this.props.targets}/>
                {/*<JsonFetch/>
                <AudioFetch/>*/}
            </div>

        );
    }

}

export default Content;