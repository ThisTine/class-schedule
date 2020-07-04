import React from 'react'
import number from './json/numbers.json'
const Allabsentschedule = ()=>{
    let i = 0;
    return(
        <div className="A-abs">
            <div className="Wrapper">
            <div className="container">
            <h1 className="top">ตารางหยุดของเดือน กรกฎาคม</h1>
            <div className="table-center">
                <div className="table-wrapper">
                  <table>
                    <thead>
                        <tr>
                        <th>อาทิตย์</th>
                        <th>จันทร์</th>
                        <th>อังคาร</th>
                        <th>พุธ</th>
                        <th>พฤหัสบดี</th>
                        <th>ศุกร์</th>
                        <th>เสาร์</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        {number.slice(0,4).map(item=>{
                            i = i+1
                        return(<td key={i} className={item === "หยุด" ?"red" : "green"}> {i} <br/> {item}</td>)
                        })}
                        </tr>
                        <tr>
                        {number.slice(4,11).map(item=>{
                            i = i+1
                        return(<td key={i} className={item === "หยุด" ?"red" : "green"}> {i} <br/> {item}</td>)
                        })}
                        </tr>
                        <tr>
                        {number.slice(11,18).map(item=>{
                            i = i+1
                        return(<td key={i} className={item === "หยุด" ?"red" : "green"}> {i} <br/> {item}</td>)
                        })}
                        </tr>
                        <tr>
                        {number.slice(18,25).map(item=>{
                            i = i+1
                        return(<td key={i} className={item === "หยุด" ?"red" : "green"}> {i} <br/> {item}</td>)
                        })}
                        </tr>
                        <tr>
                        {number.slice(25,31).map(item=>{
                            i = i+1
                        return(<td key={i} className={item === "หยุด" ?"red" : "green"}> {i} <br/> {item}</td>)
                        })}
                        <td>1</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div></div>
            </div>

        </div>
    )
}

export default Allabsentschedule