import React, { useState, useEffect } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import { connect } from "react-redux";
import { getRestaurantFromApi } from "../Redux/actions";
import { Route, Switch } from "react-router-dom";
import RestaurantProfile from "../Components/RestaurantProfile";
import Fade from "react-reveal/Fade";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const RestaurantContainer = ({
  getRestaurantFromApi,
  restArray,
  addToCart,
}) => {
  const initialState = {
    search: "",
  };

  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    getRestaurantFromApi();
  }, []);

  const restaurantsFromSearch = () => {
    return restArray
      .filter((restaurant) =>
        restaurant.name.toLowerCase().includes(value.search.toLowerCase())
      )
      .map((restObj) => <RestaurantCard key={restObj.id} restObj={restObj} />);
  };

  return (
    <Fade right cascade>
      <Switch>
        <Route
          path="/restaurants/:id"
          render={({ match }) => {
            return (
              <div>
                <RestaurantProfile
                  rest={restArray.find((rest) => rest.id == match.params.id)}
                  addToCart={addToCart}
                />
              </div>
            );
          }}
        />
        <Route
          path="/restaurants"
          render={() => {
            return (
              <div>
                <h3>Please pick a restaurant to see it's menu!</h3>
                <div className="search">
                  <form className="search-form">
                    <input
                      className="search-bar"
                      name="search"
                      value={value.search}
                      onChange={handleChange}
                      placeholder="Search Restaurants"
                    />
                          <button><i class="fa fa-search"></i></button>

                  </form>
                </div>
                <div>
                  <div className="index">
                    {restaurantsFromSearch().length === 0 ? (
                      <h2>No restaurants found</h2>
                    ) : (
                      restaurantsFromSearch()
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        />
      </Switch>
    </Fade>
  );
};

const msp = (state) => {
  return {
    restArray: state.restArray,
  };
};

export default connect(msp, { getRestaurantFromApi })(RestaurantContainer);
