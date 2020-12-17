import React from 'react'
import MenuCard from '../Components/MenuCard'

class MenuContainer extends React.Component{


    renderMenu = () => {
        return this.props.itemsArray.map(menuObj => <MenuCard key={menuObj.id} menuObj={menuObj}  addToCart={this.props.addToCart}/>)
    }

    render(){
        return(
            <div>
                {this.renderMenu()}
            </div>
            )
    }
}


export default MenuContainer
