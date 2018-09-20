import React, { Component } from 'react';
import FigureFetch from "./FigureFetch";
import JsonFetch from "./JsonFetch";
import AudioFetch from "./AudioFetch";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {fig: ''};
    }


    render() {
        return (
            <div>
                <FigureFetch/>
                <JsonFetch/>
                <AudioFetch/>
            </div>

        );
    }

}

export default Content;