import React from "react";
import {Link, Route, Switch, Redirect} from 'react-router-dom'


class Account extends React.Component {

    render() {
        return(
            <div>
                <Link to={`/my-account`}>
                    <p>Account form do auth and login forms</p>
                </Link>
            </div>
        )
    }
}

export default Account;
