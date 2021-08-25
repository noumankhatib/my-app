//https://medium.muz.li/9-useful-css-tricks-that-you-should-know-39dd79f09d37

import React, { useState } from 'react'


export default function fetchData() {
const [pageNo,setPageNo] = useState('')
const [current,setCurrent] = useState('')

onClickHandler = ()=>{
    fetchData()
}
    return (
        <div>
        <button onClick={onClickHandler}>FetchData</button>            
        </div>
    )
}
