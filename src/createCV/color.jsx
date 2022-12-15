import {useFormik} from 'formik'
import "./../appCV/myStyle.css"
import { Link } from "react-router-dom";


const FormColor = (props) => {
    const {theCVinfo, addFormColor}=props
    const formik= useFormik({
        initialValues:{
            cvColor:theCVinfo.cvColor
        }
    })
    console.log(formik.values);
    let ifEdit=false;
    if(   formik.values.cvColor==theCVinfo.cvColor){
        ifEdit=false;
    }else{
        ifEdit=true;
    }

    return( <div>
        <h1 className='text-center'>Form Color</h1>
        <h3 className='text-center'>Hi {theCVinfo.firstName} , Let's see if you have a fashion sense </h3>
        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
            <div className='text-center'>
                <p className='ids '> <i class="fa-solid fa-palette"></i></p>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="container text-center">
                        <div className="col input-group-lg  m-3">
                            <label for="cvColor">Select your favorite color:</label><br />
                            <input type="color" id="cvColor" name="cvColor" value={formik.values.devSkill} onChange={formik.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-3'>
                        <button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addFormColor(e,formik.values)}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>)
}
 
export default FormColor