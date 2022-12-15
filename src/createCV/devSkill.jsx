import {useFormik} from 'formik'
import "./../appCV/myStyle.css"
import { Link } from "react-router-dom";

const DevSkill = (props) => {

    const {addDevSkill,theCVinfo}=props
    const formik= useFormik({
        initialValues:{
            devSkill:theCVinfo.devSkill,
        }
    })

    let ifEdit=false;
    if(formik.values.devSkill==theCVinfo.devSkill){
        ifEdit=false;
    }else{
        ifEdit=true;
    }
    return( <div>
        
        <h1 className='text-center'>Dev skill</h1>
        <h3 className='text-center'>Ok {theCVinfo.firstName} ,I know you're a smart programmer, but show me how mach</h3>
        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
            <p className='ids '>        <i class="fa-solid fa-desktop"></i></p>
            <div className="container text-center">
            <div className="row">
                    <div className="col">
                        <textarea className="textareas" id="devSkill" name="devSkill" rows="4" cols="100" placeholder=" C# , HTML ,CSS" value={formik.values.devSkill} onChange={formik.handleChange}></textarea>
                    </div>
                    </div>
                    <div className="row">
                        <div className='col m-3'>
                        <Link to="/Education"> <button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addDevSkill(e,formik.values)}>Submit</button> </Link>
                        </div>
                    </div>
            </div>

        </form>
    </div>)
}
 
export default DevSkill
