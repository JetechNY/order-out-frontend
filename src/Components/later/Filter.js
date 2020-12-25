import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Restaurants </div>
                <div className="filter-sort">
                    Sort{" "}
                    <select value={this.props.sort} onChange={this.props.sortRestaurants}>
                        <option value="">All</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </div>
                <div className="filter-price">
                    Filter{" "}
                    <select value={this.props.price} onChange={this.props.filterRestaurants}>
                        <option value="">All</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>

                    </select>
                </div>
            </div>
        )
    }
}
