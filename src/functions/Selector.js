import React from 'react'
import {shallowEqual,useSelector} from "react-redux"

 function selector(){
     const data = useSelector(state => state, shallowEqual)
     const history = data.history
     const index = data.index

     return history[index]
}

export default selector