import React, {useState} from 'react'
import CatagoryNav from '../components/CatagoryNav'
import MenuList from '../components/MenuList'

const MenuScreen = () => {
    const [cat,setCat] = useState(1)

    return (
        <>
            <CatagoryNav cat={cat} setCat={setCat}/>
            <MenuList cat={cat}/>
        </>
    )
}

export default MenuScreen

