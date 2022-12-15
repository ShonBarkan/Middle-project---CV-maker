import {useFormik} from 'formik'
import "./../appCV/myStyle.css"

const Languages = (props) => {
    const {language,addLanguageInfo,deletForm}=props
    const formik= useFormik({
        initialValues:{
            theLanguage:language.theLanguage,
            range:language.range
        }
    })

    let ifEdit=false;
    if(   formik.values.theLanguage==language.theLanguage && formik.values.range==language.range){
        ifEdit=false;
    }else{
        ifEdit=true;
    }
    return( <div>

        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
            <div className='headInput'>
                <p className='ids '>#{language.id} <i className="fa-solid fa-earth-americas"></i></p>
                <button className="btn btn-outline-danger  delets " onClick={(e)=>deletForm(e,'Language',language.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="container text-center">
                
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="theLanguage" placeholder="Language" value={formik.values.theLanguage} onChange={formik.handleChange} />
                        <label htmlFor="theLanguage">Language</label>
                    </div>
                    <div className="col form-floating input-group-lg  m-3">
                        {/* <input type="range" id="vol" name="vol" min="0" max="10" value={formik.values.range} onChange={formik.handleChange}/> */}
                        <input type="text" className="form-control" id="range" placeholder="100" value={formik.values.range} onChange={formik.handleChange} />
                        <label htmlFor="range">Volume (between 0 and 100):</label>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-3'>
                        <button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addLanguageInfo(e,formik.values,language.id)}>Submit</button>
                    </div>
                </div>
            </div>

        </form>
    </div>)
}
 
export default Languages