import React,{useState,useEffect} from 'react'
import CleaningCompo from './CleaningCompo'
import {Link} from 'react-router-dom'
import cleaingsc from './json/cleaning.json'

const Cleaning = ()=>{
    const [numarr,setnumarr] = useState(["loading"])
    const [gday,setgday] = useState('จันทร์')
    useEffect(() => {
        const date = new Date()
        const dayq = date.getDay()
        const daycheck = (day)=>{
            if(day === 1){
                setgday('จันทร์')
            }
            else if(day === 2){
                setgday("อังคาร")
            }
            else if(day === 3){
                setgday("พุธ")
            }
            else if(day === 4){
                setgday("พฤหัสบดี")
            }
            else if(day === 5){
                setgday("ศุกร์")
            }else{
                setgday("หยุด")
            }
        }
        daycheck(dayq)
        setnumarr(cleaingsc[dayq])
        return () => {}
    }, [])
    return(
        <div className="Cleaning">
            <div className="Wrapper">
            <div className="container">
            <h1 className="top">เวรรับผิดชอบวันนี้ (วัน{gday})</h1>
            <div className="center">
            <div className="c-list">
                <div className="c-list-con">
                {numarr.map((num) =>{
                    return(
                        <CleaningCompo num={num} key={num}/>
                    )
                })}
            </div>    
            </div>
            <Link to="/allcleaningschedule" className="btn btn-green">ดูตารางเวรทั้งหมด</Link>
            </div>
            
            </div>
            
            </div>
 
            
        </div>
    )
}

export default Cleaning
