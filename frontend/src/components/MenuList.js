import React from 'react'
import MenuCat from './MenuCat'



const MenuList = (props) => {
    switch(props.cat){
        case '1':
            return(
                <>
                <MenuCat cat={'Recommend'} rec={true}/>
                </>
            )
        case '2':
            return(
                <>
                <MenuCat cat={'Deep fired'} />
                </>
            )
        case '3':
            return(
                <>
                <MenuCat cat={'Stir'} />
                </>
            )
        case '4':
            return(
                <>
                <MenuCat cat={"Yum"} />
                </>
            )
        default:
            return(
                <>
                <MenuCat cat={'Soup'}/>
                </>
            )
    }
}

export default MenuList
