import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import MainInfoPDF from './mainInfoPDF';
import LanguagesPDF from './languagesPDF';
import MoreAboutMePDF from './moreAboutMePDF';
import '../cvPDF/myCvPDFstyle.css'

const CVtempPDF = (props) => {
    const {theCVinfo,educations,workExperiences,militaryService,languages,mores, cvToPDF}=props

    let style={
        backgroundColor:theCVinfo.cvColor
    }
    let style1={
        border:'3px solid' + theCVinfo.cvColor
    }
    let style2={
        color:theCVinfo.cvColor
    }

    return (
        <div className="MyPdf">
            <div className="theTop">
                <h1>{theCVinfo.firstName} here is your CV</h1>
                <h3> what a wondwrfall jureny we had</h3>
                <h3> Dont forget to get a PDF file</h3>
                <button className="btn btn-outline-primary btnPDF" onClick={()=>cvToPDF()}>Make PDF</button>
            </div>
            <div className='CVpage' id="divToPrint" >
                <div style={style} className='sideColor'></div>
                <div style={style1} className='Kotert'>
                    <p style={style2} className='myName'>{theCVinfo.firstName + ' ' + theCVinfo.lastName }</p>
                    <div className='summray'>
                        <article >{theCVinfo.summaryAboutYou}</article>
                    </div>

                </div>
                <div style={style} className='ParsonalInfo'>
                    <div className='ParsonalInfoBox'>
                        <h4 className='headSide'>personal info</h4>
                        <artical className='personalInfo'><b>Phon:</b>  {theCVinfo.phoneNumber}</artical><br />
                        <artical className='personalInfo'><b>Email:</b>  {theCVinfo.email}</artical><br />
                        <artical className='personalInfo'><b>City: </b> {theCVinfo.city}</artical><br />
                        <artical className='personalInfo'> {theCVinfo.linkedin? <b>linkadin:</b> :''} {theCVinfo.linkedin? theCVinfo.linkedin :''}</artical><br />
                        <artical className='personalInfo'> {theCVinfo.gitHub? <b>GitHub: </b> :''} {theCVinfo.gitHub? theCVinfo.gitHub :''}</artical><br />
                    </div>
                </div>
                <div className='CenterInfo'>
                    <h3 className='mainDiv'>Work Experience</h3>
                        {workExperiences.map(work=>
                            <MainInfoPDF key={work} info={work}/>
                        )}   
                    <h3 className='mainDiv'>Education</h3>
                        {educations.map(educat=>
                            <MainInfoPDF key={educat} info={educat} style2={style2}/>
                        )} 
                    <h3 className='mainDiv'>Military Service</h3>
                        {militaryService.map(mil=>
                            <MainInfoPDF key={mil} info={mil}/>
                        )} 
                </div>
                <div style={style} className='sideInfo'>

                    <div className='sideDiv'>
                        <h4 className='headSide'>Dev Skills</h4>
                        <article className='devSkills'>{theCVinfo.devSkill}</article>
                    </div>
                    <div className='sideDiv'>
                        <h4 className='headSide'>Languages</h4>
                        {languages.map(language=>
                            <LanguagesPDF key={language} language={language}/>
                        )}
                    </div>
                    <div className='sideDiv'>
                        <h4 className='headSide'>Extras</h4>
                        {mores.map(more=>
                            <MoreAboutMePDF key={more} more={more}/>
                        )}
                    </div>
                </div>

            </div>
    
          
        </div>
      );




}
export default CVtempPDF;
