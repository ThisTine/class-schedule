import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import numbers from './json/numbers.json'
const Home = ()=>{
    const date = new Date()
    const today = date.getDate()
    const [num,setnum] = useState("loading")
    useEffect(() => {
        if(date.getMonth() === 6){
            setnum(numbers[today-1])
        }else{
            setnum("หมด")
        }
        
        return () => {}
    }, [today,date])
    return(
        <div className="Home">
            <div className="Wrapper">
            <div className="container">
            <h1 className="top">เลขที่ที่จะหยุดวันนี้</h1>
            <div className="center">
                <div className="number-container">
                    <h1 className="number">{num}</h1>
                </div>
                <Link to="/allabsentschedule" className="btn btn-yellow">ดูตารางหยุดเรียนทั้งหมดของเดือน</Link>
            </div>                 
            </div>
  
            </div>

        </div>
    )
}
export default Home