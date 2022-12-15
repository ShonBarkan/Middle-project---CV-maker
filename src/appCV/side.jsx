import { Link } from "react-router-dom";
import Sticky from 'react-sticky-el';
import "./../appCV/myStyle.css"

const Side = (props) => {
    const {ifSub, subs}=props 
    return(

            <div className="btnDiv">
                <Link className='navbar-brand' to="/"><button className={(subs[0]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(0,false)}>About Me</button></Link>                     
                <Link className='navbar-brand' to="/FormColor"><button className={(subs[8]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(8,false)}>Form Color</button></Link>                     
                <Link className='navbar-brand' to="/PersonalInfo"><button className={(subs[1]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(1,false)}>Personal Info</button></Link>                        
                <Link className='navbar-brand' to="/DevSkill"><button className={(subs[2]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(2,false)}>Dev Skill</button></Link>         
                <Link className='navbar-brand' to="/Education"><button className={(subs[3]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(3,false)}>Education</button></Link>                 
                <Link className='navbar-brand' to="/WorkExperience"><button className={(subs[4]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(4,false)}>Work Experience</button></Link>                 
                <Link className='navbar-brand' to="/MilitaryService"><button className={(subs[5]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(5,false)}>Military Service</button></Link>                 
                <Link className='navbar-brand' to="/Languages"><button className={(subs[6]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(6,false)}>Languages</button></Link>                  
                <Link className='navbar-brand' to="/MoreAboutMe"><button className={(subs[7]? "btn btn-success m-1 sideBtn":"btn btn-warning m-1 sideBtn")} onClick={()=>ifSub(7,false)}>More About Me</button></Link>                      
                <Link className='navbar-brand' to="/TheCV"><button className="btn btn-warning m-1 sideBtn">Take a look <i class="fa-solid fa-eye"></i></button></Link>                     
            </div>
        )
}
 
export default Side
