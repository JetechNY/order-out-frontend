import React from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import { connect } from 'react-redux';
import {getRestaurantFromApi} from '../Redux/actions'
import {Route, Switch} from 'react-router-dom'
import RestaurantProfile from '../Components/RestaurantProfile'
import Fade from 'react-reveal/Fade';
import Search from '../Components/Search';

class RestaurantContainer extends React.Component{

    state = {
        searchTerm: ''
    }

    componentDidMount(){
        this.props.getRestaurantFromApi()
    }

    renderRestaurant = () => {
        return this.props.restArray.map(restObj => <RestaurantCard key={restObj.id} restObj={restObj} />)
    }


    renderCards = () => {
        return this.filterRestaurantsFromSearch().map(card=> <RestaurantContainer key={card.id} card={card} />)
    }

    handleSearchChange = (searchTerm) => {
        this.setState({searchTerm: searchTerm})
    }

    // filterRestaurantsFromSearch = () => {
    // return this.state.restaurants.filter(card => card.term.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || card.className.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // }


    render(){
        return(
            <Fade>
                <div className="search">
                    <Search searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange} />
                </div>
                <Switch>
                    <Route
                        path='/restaurants/:id'
                        render={({match})=>{
                            return(
                                <div>
                                    <RestaurantProfile rest={this.props.restArray.find(rest=>rest.id == match.params.id)} addToCart={this.props.addToCart}/>
                                </div>
                                )
                            }}/>
                    <Route
                        path='/restaurants'
                        render={()=>{
                            return(
                                <div>
                                    <h3>Here are the restaurants near you!</h3>
                                    <div>
                                        <div className="index">
                                        {this.renderRestaurant()}
                                        </div>
                                    </div>
                                </div>
                            )
                        }}/>

                </Switch>
            </Fade>
            )
    }
}

const msp = (state) => {
    return {
        restArray: state.restArray
    }
}

export default connect(msp,{getRestaurantFromApi})(RestaurantContainer)
