import React from 'react'
import RestaurantCard from '../Components/RestaurantCard'
import { connect } from 'react-redux';
import {getRestaurantFromApi} from '../Redux/actions'
import {Route, Switch} from 'react-router-dom'
import RestaurantProfile from '../Components/RestaurantProfile'
import Filter from '../Components/Filter';
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

  // filterRestaurants = (event) => {

  //   if(event.target.value === ""){
  //     this.setState({price: event.target.value, restaurant:data.restaurants})
  //   } else{
  //       this.setState({
  //         price: event.target.value,
  //         restaurants: data.restaurants.filter(restaurant => restaurants.price.indexOf(event.target.value)>=0)
  //       })
  //     }
  //   }

    renderCards = () => {
        return this.filterRestaurantsFromSearch().map(card=> <RestaurantContainer key={card.id} card={card} />)
    }

    handleSearchChange = (searchTerm) => {
        this.setState({searchTerm: searchTerm})
    }

    filterRestaurantsFromSearch = () => {
    return this.state.restaurants.filter(card => card.term.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || card.className.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    // this.state.cards ? this.renderCards() : <i class="sync icon"></i>}


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
                                    <h3>Restaurants near you</h3>
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

    {/* <Filter
                        count={this.state.products.length}
                        size={this.state.size}
                        sort={this.state.sort}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}
                    ></Filter> */}

const msp = (state) => {
    return {
        restArray: state.restArray
    }
}

export default connect(msp,{getRestaurantFromApi})(RestaurantContainer)
