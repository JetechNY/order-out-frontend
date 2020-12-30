import React from 'react'
import MenuCard from '../Components/MenuCard'

class MenuContainer extends React.Component{


    renderMenu = () => {
        return this.props.itemsArray.map((menuObj, i)=> <MenuCard key={i} menuObj={menuObj}  addToCart={this.props.addToCart}/>)
    }

    render(){
        return(
            <div className="menuindex">
                {this.renderMenu()}
            </div>
            )
    }
}


export default MenuContainer
