import {useFormik} from 'formik'
import "./../appCV/myStyle.css"
import { Link } from "react-router-dom";

const AboutMe = (props) => {
    const {addAboutMe,theCVinfo}=props
    const formik= useFormik({
        initialValues:{
            firstName:theCVinfo.firstName,
            lastName:theCVinfo.lastName,
            summaryAboutYou:theCVinfo.summaryAboutYou
        }
    })
    
    let ifEdit=false;
    if( formik.values.firstName==theCVinfo.firstName &&  formik.values.lastName==theCVinfo.lastName && formik.values.summaryAboutYou==theCVinfo.summaryAboutYou){
        ifEdit=false;
    }else{
        ifEdit=true;
    }

    return( <div >

        <h1 className='text-center'>First Info</h1>
        <h3 className='text-center'>Welcome to the CV maker, introduce yourself please</h3>
        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
            <p className='ids '><i className="fa-solid fa-user"></i></p>
            <div className='container text-center' >
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange}/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="summaryAboutYou">summary about you</label><br />
                        <textarea className="textareas" id="summaryAboutYou" name="summaryAboutYou" rows="3" cols="50" placeholder="aad a small summary about you, to add to your CV beginning" value={formik.values.summaryAboutYou} onChange={formik.handleChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-3'>
                    <button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addAboutMe(e,formik.values)}>Submit</button>
                    </div>
                </div>
            </div>

        </form>
    </div>)
}
 
export default AboutMe
