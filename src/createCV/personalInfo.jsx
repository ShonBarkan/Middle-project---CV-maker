import {useFormik} from 'formik'
import "./../appCV/myStyle.css"
import { Link } from "react-router-dom";

const PersonalInfo = (props) => {
    const {addPersonalInfo,theCVinfo}=props
    const formik= useFormik({
        initialValues:{
            phoneNumber:theCVinfo.phoneNumber,
            email:theCVinfo.email,
            city:theCVinfo.city,
            linkedin:theCVinfo.linkedin,
            gitHub:theCVinfo.gitHub
        }
    })

    let ifEdit=false;
    if( formik.values.phoneNumber==theCVinfo.phoneNumber && formik.values.email==theCVinfo.email && formik.values.city==theCVinfo.city && formik.values.linkedin==theCVinfo.linkedin && formik.values.gitHub==theCVinfo.gitHub  ){
        ifEdit=false;
    }else{
        ifEdit=true;
    }

    return( <div>
        <h1 className='text-center'>My Personal Info</h1>
        <h3 className='text-center'>Great {theCVinfo.firstName}, now lets add your personal info</h3>
        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
            <p className='ids '><i className="fa-solid fa-fingerprint"></i></p>
            <div className="container text-center">
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" value={formik.values.phoneNumber} onChange={formik.handleChange}/>
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="city" placeholder="City" value={formik.values.city} onChange={formik.handleChange}/>
                        <label htmlFor="city">City</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="email" className="form-control" id="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="linkedin" placeholder="Linkedin" value={formik.values.linkedin} onChange={formik.handleChange}/>
                        <label htmlFor="linkedin">Linkedin</label>
                    </div>
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="gitHub" placeholder="GitHub" value={formik.values.gitHub} onChange={formik.handleChange}/>
                        <label htmlFor="gitHub">GitHub</label>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-3'>
                        <Link to="/DevSkill"><button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addPersonalInfo(e,formik.values)}>Submit</button></Link>
                    </div>
                </div>
            </div>

        </form>
    </div>)
}
 
export default PersonalInfo