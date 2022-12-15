import {useFormik} from 'formik'
import "./../appCV/myStyle.css"

const MoreAboutMe = (props) => {
    const {more ,addMoreAboutMeInfo,deletForm}=props
    const formik= useFormik({
        initialValues:{
            what:more.what,
            startYear:more.startYear,
            endYear:more.endYear,
            moreAboutIt:more.moreAboutIt
        }
    })

    let ifEdit=false;
    if( formik.values.what==more.what && formik.values.startYear==more.startYear && formik.values.endYear==more.endYear && formik.values.moreAboutIt==more.moreAboutIt){
        ifEdit=false;
    }else{
        ifEdit=true;
    }
    return( <div>
        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
            <div className='headInput'>
                <p className='ids '>#{more.id} <i className="fa-regular fa-hand-peace"></i></p>
                <button className="btn btn-outline-danger  delets " onClick={(e)=>deletForm(e,'MoreAboutMe',more.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="what" placeholder="What" value={formik.values.what} onChange={formik.handleChange}/>
                        <label htmlFor="what">What</label>
                    </div>
                 
                </div>
                <div className="row">
                    <div  className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="startYear" placeholder="Start Year" value={formik.values.startYear} onChange={formik.handleChange}/>
                        <label htmlFor="startYear">Start Year</label>
                    </div>
                    <div  className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="endYear" placeholder="End Year" value={formik.values.endYear} onChange={formik.handleChange}/>
                        <label htmlFor="endYear">End Year</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="moreAboutIt">Tell me more about it...</label><br />
                        <textarea className="textareas" id="moreAboutIt" name="moreAboutIt" rows="4" cols="100" placeholder="Tell me more about it..." value={formik.values.moreAboutIt} onChange={formik.handleChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-3'>
                        <button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addMoreAboutMeInfo(e,formik.values,more.id)}>Submit</button>
                    </div>
                </div>
            </div>

        </form>
    </div>)
}
 
export default MoreAboutMe
