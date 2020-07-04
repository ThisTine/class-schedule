import React from 'react'
import cleaningjq from './json/cleaning.json'
const Allcleaningschedule = ()=>{
    return(
        <div className="A-abs">
            <div className="Wrapper">
            <div className="container">
            <h1 className="top">ตารางเวร</h1>
            <div className="table-center">
                <div className="table-wrapper">
                  <table>
                    <thead>
                        <tr>
                        <th>วัน</th>
                        <th>เลขที่</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>วันจันทร์</td>
                        {cleaningjq[0].map(item=>{
                            return(
                                <td key={item}>{item}</td>
                            )
                        })}
                        </tr>
                        <tr>
                            <td>วันอังคาร</td>
                        {cleaningjq[1].map(item=>{
                            return(
                                <td  key={item}>{item}</td>
                            )
                        })}
                        </tr>
                        <tr>
                            <td>วันพุธ</td>
                        {cleaningjq[2].map(item=>{
                            return(
                                <td  key={item}>{item}</td>
                            )
                        })}
                        </tr>
                        <tr>
                            <td>วันพฤหัสบดี</td>
                        {cleaningjq[3].map(item=>{
                            return(
                                <td  key={item}>{item}</td>
                            )
                        })}
                        </tr>
                        <tr>
                            <td>วันศุกร์</td>
                        {cleaningjq[4].map(item=>{
                            return(
                                <td  key={item}>{item}</td>
                            )
                        })}
                        </tr>
                    </tbody>
                </table>
                </div>
            </div></div>
            </div>

        </div>
    )
}

export default Allcleaningschedule