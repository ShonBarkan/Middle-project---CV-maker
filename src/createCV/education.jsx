import {useFormik} from 'formik'
import "./../appCV/myStyle.css"

const Education = (props) => {
    const {form,addMainInfo, deletForm}=props
    const formik= useFormik({
        initialValues:{
            what:form.what,
            where:form.where,
            startYear:form.startYear,
            endYear:form.endYear,
            tellMeMore:form.tellMeMore
        }
    })

    let ifEdit=false;
    if( formik.values.what==form.what && formik.values.where==form.where && formik.values.startYear==form.startYear && formik.values.endYear==form.endYear && formik.values.tellMeMore==form.tellMeMore){
        ifEdit=false;
    }else{
        ifEdit=true;
    }

    return( <div>


        <form className={ifEdit ? 'inputsEdit': 'inputsSub'}>
                <div className='headInput'>
                    <p className='ids '>#{form.id} <i class="fa-solid fa-school"></i></p>
                    <button className="btn btn-outline-danger  delets " onClick={(e)=>deletForm(e,'Education',form.id)}><i class="fa-solid fa-trash"></i></button>
                </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="what" placeholder="What" value={formik.values.what} onChange={formik.handleChange}/>
                        <label htmlFor="what">What</label>
                    </div>
                   
                    
                </div>
                <div className="row">
                    <div className="col form-floating input-group-lg  m-3">
                        <input type="text" className="form-control" id="where" placeholder="Where" value={formik.values.where} onChange={formik.handleChange}/>
                        <label htmlFor="where">Where</label>
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
                        <label htmlFor="lastName">Tell me more about it...</label><br />
                        <textarea className="textareas" id="tellMeMore" name="tellMeMore" rows="4" cols="100" placeholder="Tell me more about it..." value={formik.values.tellMeMore} onChange={formik.handleChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-3'>
                        <button className={ifEdit ?"btn btn-warning":"btn btn-success"} onClick={(e)=>addMainInfo(e,formik.values,form.father,form.id,ifEdit)}>Submit</button>
                    </div>
                </div>
            </div>

        </form>
    </div>)
}
 
export default Education



