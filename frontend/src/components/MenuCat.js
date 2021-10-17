import React, {useState,useEffect} from 'react'
import MenuItem from './MenuItem'
import axios from 'axios'

const MenuCat =(props) => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        const fetchDataZone = async() =>{
            const {data} = await axios.get(`/api/menus/${props.cat}`)
            setMenus(data)
        }
        const fetchDataRec = async() =>{
            const {data} = await axios.get(`/api/menus`)
            setMenus(data)
        }
        if(props.rec){
            fetchDataRec()
        }else{
            fetchDataZone(props.cat)
        }
    },[props])

    return (
        <>
            {menus.map(menu => (
                <MenuItem item={menu}/>
            ))}
        </>
    )
}
export default MenuCat