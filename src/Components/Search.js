import React from "react";
import {Link, Route, Switch, Redirect} from 'react-router-dom'


class Search extends React.Component {

    render() {
        return(
            <div>
                <Link to={`/search`}>
                    <p>Restaurant SEARCH HERE form</p>
                </Link>
            </div>
        )
    }
}

export default Search;
