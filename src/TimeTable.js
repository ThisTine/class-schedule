import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import timetable from './json/timetable.json'
import {BsCircleFill} from 'react-icons/bs'
const TimeTable = ()=>{
    const date = new Date()
    const dayofw = date.getDay()
    const [firsttext, setfirsttext] = useState("Loading")
    const [sectext,setsectext] = useState("Loading")
    const [thrtext,setthrtext] = useState("Loading")

    const func = (time)=>{
        time = parseInt(time)
        if(time < 840 && time >= 500){
            return -1
        }
        else if(time >= 840 && time < 930){
            return 0
        } else if(time >= 930 && time < 1020){
            return 1
        }else if (time >= 1020 && time < 1110){
            return 2
        }else if (time >= 1110 && time < 1200){
            return 3
        }else if (time >= 1200 && time < 1300){
            return 4
        }else if (time >= 1300 && time < 1350){
            return 5
        }else if (time >= 1350 && time < 1440){
            return 6
        }else if (time >= 1440 && time < 1530){
            return 7
        }else {
            return 8
        }
    }
    useEffect(() => {
        const checkdate = ()=>{
            if(dayofw === 1){
               return timetable.mon
            }else if(dayofw === 2){
                return timetable.tue
            }else if(dayofw === 3){
                return timetable.wed
            }else if(dayofw === 4){
                return timetable.thues
            }else if(dayofw === 5){
                return timetable.fri
            }else{
                return timetable.fri
            }
        }
        const interval = setInterval(() => {
            const date = new Date(2020,7,3,17,30)
            const hours = date.getHours()
            const min = date.getMinutes()
            let realmin = min.toString()
            if(min === 0){
                realmin = "00"
            }
            const timehm = hours.toString()+realmin
            const update = checkdate()
            const classindex = func(timehm)
            if(dayofw !== 6 && dayofw !== 7){
            if(classindex !== 8 && classindex !== -1){
                if(classindex !== 6 && classindex !== 7){
                    setfirsttext(update[classindex].c)
                    setsectext(update[classindex+1].c)
                    setthrtext(update[classindex+2].c)
                }else if(classindex === 6){
                    setfirsttext(update[classindex].c)
                    setsectext(update[classindex+1].c)
                    setthrtext("เลิกเรียนแล้วกลับบ้าน !")
                }else if(classindex === 7){
                    setfirsttext(update[classindex].c)
                    setsectext("เลิกเรียนแล้วกลับบ้าน !")
                    setthrtext("มาโรงเรียน")
                }
            }else if(classindex === 8){
                setfirsttext("เลิกเรียนแล้วกลับบ้าน !")
                setsectext("มาโรงเรียน")
                setthrtext("เข้าแถว")
            }else if(classindex === -1){
                setfirsttext("ไปโรงเรียน")
                setsectext(update[classindex+1].c)
                setthrtext(update[classindex+2].c)
            }
        }else{
            setfirsttext("วันหยุด")
            setsectext("ไม่ต้องมาโรงเรียน")
            setthrtext("นะครับ")
        }
        }, 500);
        
        return () => clearInterval(interval);
      }, [dayofw]);
    return(
        <div className="TimeTable">
            <div className="Wrapper">
            <div className="container">
            <h1 className="top">ตารางเรียน </h1>
            <div className="center">
                <div className="timetable-list">
                    <div className="timetable-now">
                        <p className="now">ตอนนี้ <span className="live"><BsCircleFill fill="red"/></span></p>
                        <h1 className="timetable-now-title"> {firsttext} </h1>
                        <div className="upcoming">
                        <p className="upcom-text">{sectext}</p>
                        <p className="upcom-text">{thrtext}</p>
                    </div>
                    </div>

                </div>
                <Link to="/alltimetable" className="btn btn-green">ตารางเรียนทั้งหมด</Link>
            </div>
            
            </div>

            
        </div>
        </div>
    )
}

export default TimeTable