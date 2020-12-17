import React from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import { connect } from 'react-redux';
import {getRestaurantFromApi} from '../Redux/actions'
import {Route, Switch} from 'react-router-dom'
import RestaurantProfile from '../Components/RestaurantProfile'


class RestaurantContainer extends React.Component{

    componentDidMount(){
        this.props.getRestaurantFromApi()
    }

    renderRestaurant = () => {
        return this.props.restArray.map(restObj => <RestaurantCard key={restObj.id} restObj={restObj}/>)
    }

    render(){
        return(
                <Switch>
                    <Route
                        path='/restaurants/:id'
                        render={({match})=>{
                            return(
                                <div>
                                    <RestaurantProfile rest={this.props.restArray.find(rest=>rest.id == match.params.id)}/>
                                </div>
                                )
                            }}/>
                    <Route
                        path='/restaurants'
                        render={()=>{
                            return(
                                <div className="index">
                                <h3>Restaurants near you</h3>
                                {this.renderRestaurant()}
                                </div>
                            )
                        }}/>
                </Switch>
            )
    }
}

const msp = (state) => {
    return {
        restArray: state.restArray
    }
}

export default connect(msp,{getRestaurantFromApi})(RestaurantContainer)
