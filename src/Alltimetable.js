import React,{useState} from 'react'
import timetableall from './json/timetable.json'

const Popup = ({info,close})=>{
    return(
        <div className="popup">
        <div className="popup-wrapper">
            <div className="popup-container">
                <div className="popup-exit" onClick={()=>close()}>&#10005;</div>
                <div className="popup-container-wrapper">
                <h2>วิชา : {info.c}</h2>
                <h2>รหัสวิชา : {info.s}</h2>
                <h2>ครูประจำวิชา : {info.t}</h2>
                </div>
                
            </div>
        </div>
    </div>
    )
}

const Alltimetable = ()=>{
    const [ispopup,setispopup] = useState(false)
    const [info,setinfo] = useState(null)
    return(
        <div className="A-abs">
           { ispopup && <Popup info={info} close={()=>setispopup(false)} />}
            <div className="Wrapper">
            <h1 className="top">ตารางเรียน</h1>
            <div className="table-center">
                <div className="table-wrapper">
                  <table>
                    <thead>
                        <tr>
                        <th>วันที่</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>พักกลางวัน</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>วันจันทร์</td>
                        {timetableall.mon.map(item=>{
                            if(item.c === "พักกลางวัน"){
                                item.c = " "
                            } 
                            return(
                                <td className={item.c !== " " ? ("hovable") : ("nonhover")} onClick={()=>{if(item.c !== " "){setispopup(true);setinfo({c:item.c,t:item.t,s:item.s})}}} key={timetableall.mon.indexOf(item)}>
                                    {item.c}
                                </td>
                            )
                        })}
                        </tr>
                        <tr>
                        <td>วันอังคาร</td>
                        {timetableall.tue.map(item=>{
                             if(item.c === "พักกลางวัน"){
                                item.c = " "
                            }                           
                            return(
                                <td className={item.c !== " " ? ("hovable") : ("nonhover")} onClick={()=>{if(item.c !== " "){setispopup(true);setinfo({c:item.c,t:item.t,s:item.s})}}}  key={timetableall.tue.indexOf(item)}>
                                    {item.c}
                                </td>
                            )
                        })}
                        </tr>
                        <tr>
                        <td>วันพุธ</td>
                        {timetableall.wed.map(item=>{
                            if(item.c === "พักกลางวัน"){
                                item.c = " "
                            }
                            return(
                                <td className={item.c !== " " ? ("hovable") : ("nonhover")} onClick={()=>{if(item.c !== " "){setispopup(true);setinfo({c:item.c,t:item.t,s:item.s})}}}  key={timetableall.wed.indexOf(item)}>
                                    {item.c}
                                </td>
                            )
                        })}
                        </tr>
                        <tr>
                        <td>วันพฤหัสบดี</td>
                        {timetableall.thues.map(item=>{
                            if(item.c === "พักกลางวัน"){
                                item.c = " "
                            }
                            return(
                                <td className={item.c !== " " ? ("hovable") : ("nonhover")} onClick={()=>{if(item.c !== " "){setispopup(true);setinfo({c:item.c,t:item.t,s:item.s})}}}  key={timetableall.thues.indexOf(item)}>
                                    {item.c}
                                </td>
                            )
                        })}
                        </tr>
                        <tr>
                        <td>วันศุกร์</td>
                        {timetableall.fri.map(item=>{
                            if(item.c === "พักกลางวัน"){
                                item.c = " "
                            }
                            return(
                                <td className={item.c !== " " ? ("hovable") : ("nonhover")} onClick={()=>{if(item.c !== " "){setispopup(true);setinfo({c:item.c,t:item.t,s:item.s})}}}  key={timetableall.fri.indexOf(item)}>
                                    {item.c}
                                </td>
                            )
                        })}
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>                
            </div>

        </div>
    )
}

export default Alltimetable