import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Sticky from 'react-sticky-el';
import AboutMe from '../createCV/aboutMe';
import Side from './side';
import PersonalInfo from '../createCV/personalInfo';
import DevSkill from '../createCV/devSkill';
import Languages from '../createCV/languages';
import MoreAboutMe from '../createCV/moreAboutMe';
import Education from '../createCV/education';
import WorkExperience from '../createCV/workExperience';
import MilitaryService from '../createCV/militaryService';
import CVtempPDF from '../cvPDF/cvTempPDF';
import FormColor from '../createCV/color';
import "./../appCV/myStyle.css"


class MyCVapp  extends Component {
    state = { 

        theCVinfo:{
            firstName:'',
            lastName:'',
            summaryAboutYou:'',
            phoneNumber:'',
            email:'',
            city:'',
            linkedin:'',
            gitHub:'',
            devSkill:'',
            cvColor: 'rgb(37, 120, 164)',
        },
        educations:[{sub:false, father:'educations',id:1,what:'',where:'',startYear:'',endYear:'',tellMeMore:''}],
        workExperiences:[{father:'workExperiences',id:1,what:'',where:'',startYear:'',endYear:'',tellMeMore:''}],     
        militaryService:[{father:'militaryService',id:1,what:'',where:'',startYear:'',endYear:'',tellMeMore:''}],
        languages:[{id:1,theLanguage:'', range:0}],
        mores:[{id:1,what:'',startYear:'',endYear:'',moreAboutIt:''}],
        subs:[false,false,false,false,false,false,false,false,false]
        // subs:[]
     }

      
    render() { 
        this.style={
            backgroundColor:this.state.theCVinfo.cvColor
        }
        return (<div >
            <div className='allApp'>
                <div style={this.style} className='theUp'>
                        <Side ifSub={(i,sub)=>this.ifSub(i,sub)} subs={this.state.subs} />
                </div>
                <div style={this.style} className='side1'></div>
                <div className='theMain'>  
                    <div className='inMain'>
                    <Routes>
                        <Route path="/" element ={<div>
                            <AboutMe addAboutMe={(e,vals)=>this.addAboutMe(e,vals)} theCVinfo={this.state.theCVinfo}/>
                            <Link className='navbar-brand ' to="/FormColor"><button className="btn btn-primary inputsBtn2" onClick={()=>this.ifSub(0,true)}>Next</button></Link>
                        </div>}/>
                        <Route path="/FormColor" element ={<div>
                            <FormColor theCVinfo={this.state.theCVinfo} addFormColor={(e,vals)=>this.addFormColor(e,vals)}/>
                            <Link className='navbar-brand ' to="/PersonalInfo"><button className="btn btn-primary inputsBtn2" onClick={()=>this.ifSub(8,true)}>Next</button></Link>
                        </div>}/>
                        <Route path="/PersonalInfo" element ={<div>
                            <PersonalInfo addPersonalInfo={(e,vals)=>this.addPersonalInfo(e,vals)} theCVinfo={this.state.theCVinfo}/>
                            <Link className='navbar-brand ' to="/DevSkill"><button className="btn btn-primary inputsBtn2" onClick={()=>this.ifSub(1,true)}>Next</button></Link>
                        </div>}/>
                        <Route path="/DevSkill" element ={<div>
                            <DevSkill addDevSkill={(e,vals)=>this.addDevSkill(e,vals)} theCVinfo={this.state.theCVinfo}/>
                            <Link className='navbar-brand ' to="/Education"><button className="btn btn-primary inputsBtn2" onClick={()=>this.ifSub(2,true)}>Next</button></Link>
                        </div>}/>
                        <Route path="/Education" element ={<div >
                            <h1 className='text-center'>Education</h1>
                            <h3 className='text-center'>Now {this.state.theCVinfo.firstName} show me how mach smart you are</h3>
                            {
                                this.state.educations.map(educat=>
                                    <Education key={educat} form={educat} addMainInfo={(e,vals,father,id)=>this.addMainInfo(e,vals,father,id)} deletForm={(e,what,id)=>this.deletForm(e,what,id)}/>
                                )
                            }
                            <div className='endInputsBtn'>
                                <button className="btn btn-secondary inputsBtn" onClick={()=>this.addForm('educations')}>add another one</button>
                                <Link className='navbar-brand ' to="/WorkExperience"><button className="btn btn-primary inputsBtn" onClick={()=>this.ifSub(3,true)}>Next</button></Link>
                            </div>
                        </div>}/>
                        <Route path="/WorkExperience" element ={<div>
                            <h1 className='text-center'>Work Experience</h1>
                            <h3 className='text-center'>Ok {this.state.theCVinfo.firstName} now show me that you are not a lazy boy</h3>
                            {
                                this.state.workExperiences.map(workExperience=>
                                    <WorkExperience key={workExperience} form={workExperience} addMainInfo={(e,vals,father,id)=>this.addMainInfo(e,vals,father,id)} deletForm={(e,what,id)=>this.deletForm(e,what,id)} />
                                )
                            }
                            <div className='endInputsBtn'>
                                <button className="btn btn-secondary inputsBtn" onClick={()=>this.addForm('workExperiences')}>add another one</button>
                                <Link  to="/MilitaryService"><button className="btn btn-primary inputsBtn" onClick={()=>this.ifSub(4,true)}>Next</button></Link>
                            </div>
                        </div>}/>
                        <Route path="/MilitaryService" element ={<div>
                            <h1 className='text-center'>Military Service</h1>
                            <h3 className='text-center'>{this.state.theCVinfo.firstName} show me that you deserve my respact</h3>
                            {
                                this.state.militaryService.map(service=>
                                    <MilitaryService key={service} form={service} addMainInfo={(e,vals,father,id)=>this.addMainInfo(e,vals,father,id)} deletForm={(e,what,id)=>this.deletForm(e,what,id)}/>
                                )
                            }
                            <div className='endInputsBtn'>
                                <button className="btn btn-secondary inputsBtn" onClick={()=>this.addForm('militaryService')}>add another one</button>     
                                <Link  to="/Languages"><button className="btn btn-primary inputsBtn" onClick={()=>this.ifSub(5,true)}>Next</button></Link>
                            </div>
                        </div>}/>
                        <Route path="/Languages" element ={<div>
                            <h1 className='text-center'>Languages</h1>
                            <h3 className='text-center'>How can i speak with you {this.state.theCVinfo.firstName}</h3>
                            {
                                    this.state.languages.map(language=>
                                        <Languages key={language} language={language} addLanguageInfo={(e,vals,id)=>this.addLanguageInfo(e,vals,id)} deletForm={(e,what,id)=>this.deletForm(e,what,id)}/>
                                    )
                            }
                            <div className='endInputsBtn'>
                                <button className="btn btn-secondary inputsBtn" onClick={()=>this.addLanguage()}>add another one</button>
                                <Link  to="/MoreAboutMe"><button className="btn btn-primary inputsBtn" onClick={()=>this.ifSub(6,true)}>Next</button></Link>
                            </div>
                        </div>}/>
                        <Route path="/MoreAboutMe" element ={<div>
                            
                            <h1 className='text-center'>More about me</h1>
                            <h3 className='text-center'> And last but not least ,{this.state.theCVinfo.firstName} ! Impress me</h3>
                            {   this.state.mores.map(more=>
                                    <MoreAboutMe key={more} more={more} addMoreAboutMeInfo={(e,vals,id)=>this.addMoreAboutMeInfo(e,vals,id)} deletForm={(e,what,id)=>this.deletForm(e,what,id)} />
                                )
                            } 
                            <div className='endInputsBtn'>
                                <button className="btn btn-secondary inputsBtn" onClick={()=>this.addMoreAboutMe()}>add another one</button>  
                                <Link  to="/TheCV"><button className="btn btn-primary inputsBtn" onClick={()=>this.ifSub(7,true)}>Next</button></Link>
                            </div>
                        </div>}/>
                        <Route path="/TheCV" element ={<CVtempPDF theCVinfo={this.state.theCVinfo} educations={this.state.educations} workExperiences={this.state.workExperiences} militaryService={this.state.militaryService} languages={this.state.languages} mores={this.state.mores} cvToPDF={()=>this.cvToPDF()} />}/>
                    </Routes> 
                    </div> 
                </div>
                <div style={this.style} className='side2'></div>

            </div>

        </div>);

    }

    addAboutMe=(e,vals)=>{
        e.preventDefault();

        this.state.theCVinfo.firstName=vals.firstName
        this.state.theCVinfo.middleName=vals.middleName
        this.state.theCVinfo.lastName=vals.lastName
        this.state.theCVinfo.summaryAboutYou=vals.summaryAboutYou
        this.setState({theCVinfo:this.state.theCVinfo})

    }
    addPersonalInfo=(e,vals)=>{
        e.preventDefault();

        this.state.theCVinfo.phoneNumber=vals.phoneNumber
        this.state.theCVinfo.email=vals.email
        this.state.theCVinfo.city=vals.city
        this.state.theCVinfo.linkedin=vals.linkedin
        this.state.theCVinfo.gitHub=vals.gitHub
        this.setState({theCVinfo:this.state.theCVinfo})
    
    }
    addDevSkill=(e,vals)=>{
        e.preventDefault();
        this.state.theCVinfo.devSkill=vals.devSkill
        this.setState({theCVinfo:this.state.theCVinfo})
        
    }
    addFormColor=(e,vals)=>{
        e.preventDefault();
        this.state.theCVinfo.cvColor=vals.cvColor
        this.setState({theCVinfo:this.state.theCVinfo})
        console.log(this.state.theCVinfo.cvColor);        
    }
    addForm=(where)=>{
        let newForm={}
        let id=null
        if(where==='educations'){
            if(this.state.educations.length==0){
                id=1
            }else{
                id=this.state.educations[this.state.educations.length-1].id+1
            }
                newForm={
                sub:false,
                father:'educations',
                id:id,
                what:'',
                where:'',
                yearStart:'',
                yearEnd:'',
                tellMeMore:''
            }
            this.state.educations.push(newForm)
            this.setState({educations:this.state.educations})
        }
        if(where==='workExperiences'){
                if(this.state.workExperiences.length==0){
                    id=1
                }else{
                    id=this.state.workExperiences[this.state.workExperiences.length-1].id+1
                }
                newForm={
                father:'workExperiences',
                id:id,
                what:'',
                where:'',
                yearStart:'',
                yearEnd:'',
                tellMeMore:''
            }
            this.state.workExperiences.push(newForm)
            this.setState({workExperiences:this.state.workExperiences})
        }
        if(where==='militaryService'){
            if(this.state.militaryService.length==0){
                id=1
            }else{
                id=this.state.militaryService[this.state.militaryService.length-1].id+1
            }
            newForm={
            father:'militaryService',
            id:id,
            what:'',
            where:'',
            yearStart:'',
            yearEnd:'',
            tellMeMore:''
            }
            this.state.militaryService.push(newForm)
            this.setState({militaryService:this.state.militaryService})
        }

    }
    addMainInfo=(e,vals,father,id)=>{

        e.preventDefault();
        
        if(father=='educations'){
            this.state.educations[id-1].what=vals.what
            this.state.educations[id-1].where=vals.where
            this.state.educations[id-1].startYear=vals.startYear
            this.state.educations[id-1].endYear=vals.endYear
            this.state.educations[id-1].tellMeMore=vals.tellMeMore

            this.setState({educations:this.state.educations})
            // console.log(this.state.educations);
        }
        if(father=='workExperiences'){
            this.state.workExperiences[id-1].what=vals.what
            this.state.workExperiences[id-1].where=vals.where
            this.state.workExperiences[id-1].startYear=vals.startYear
            this.state.workExperiences[id-1].endYear=vals.endYear
            this.state.workExperiences[id-1].tellMeMore=vals.tellMeMore

            this.setState({workExperiences:this.state.workExperiences})
            // console.log(this.state.workExperiences);

        }
        if(father=='militaryService'){
            this.state.militaryService[id-1].what=vals.what
            this.state.militaryService[id-1].where=vals.where
            this.state.militaryService[id-1].startYear=vals.startYear
            this.state.militaryService[id-1].endYear=vals.endYear
            this.state.militaryService[id-1].tellMeMore=vals.tellMeMore

            this.setState({militaryService:this.state.militaryService})
            // console.log(this.state.militaryService);

        }

    }
    addLanguage=()=>{
    let id=null
    if(this.state.languages.length==0){
        id=1
    }else{
        id=this.state.languages[this.state.languages.length-1].id+1
    }
    const newlanguage={id:id,theLanguage:'', range:100}
    this.state.languages.push(newlanguage)
    console.log(this.state.languages);
    this.setState({languages:this.state.languages})
    }
    addLanguageInfo=(e,vals,id)=>{
        e.preventDefault();
        
            this.state.languages[id-1].theLanguage=vals.theLanguage;
            this.state.languages[id-1].range=vals.range;

            this.setState({languages:this.state.languages})
        
    }
    addMoreAboutMe=()=>{
        let id=null
        if(this.state.mores.length==0){
            id=1
        }else{
            id=this.state.mores[this.state.mores.length-1].id+1
        }
        const more={id:id,what:'',startYear:'',endYear:'',moreAboutIt:''}
        this.state.mores.push(more)
        console.log(this.state.mores);
        this.setState({mores:this.state.mores})
    }
    addMoreAboutMeInfo=(e,vals,id)=>{
        e.preventDefault();
        
            this.state.mores[id-1].what=vals.what;
            this.state.mores[id-1].startYear=vals.startYear;
            this.state.mores[id-1].endYear=vals.endYear;
            this.state.mores[id-1].moreAboutIt=vals.moreAboutIt;

            this.setState({mores:this.state.mores})
    }
    ifSub=(i,sub)=>{
        this.state.subs[i]=sub;
        this.setState({subs:this.state.subs})
        console.log(this.state.subs);   
    }
    deletForm=(e,what,id)=>{
        e.preventDefault();
        if(what=='Education'){
            this.state.educations=this.state.educations.filter(form=> form.id!=id)
            this.state.educations.map(form=> form.id>id? form.id-=1 : form.id=form.id)
            this.setState({educations:this.state.educations})
        }
        if(what=='WorkExperience'){
            this.state.workExperiences=this.state.workExperiences.filter(form=> form.id!=id)
            this.state.workExperiences.map(form=> form.id>id? form.id-=1 : form.id=form.id)
            this.setState({workExperiences:this.state.workExperiences})
        }
        if(what=='MoreAboutMe'){
            this.state.mores=this.state.mores.filter(form=> form.id!=id)
            this.state.mores.map(form=> form.id>id? form.id-=1 : form.id=form.id)
            this.setState({mores:this.state.mores})
        }
        if(what=='MilitaryService'){
            this.state.militaryService=this.state.militaryService.filter(form=> form.id!=id)
            this.state.militaryService.map(form=> form.id>id? form.id-=1 : form.id=form.id)
            this.setState({militaryService:this.state.militaryService})
        }
        if(what=='Language'){
            this.state.languages=this.state.languages.filter(form=> form.id!=id)
            this.state.languages.map(form=> form.id>id? form.id-=1 : form.id=form.id)
            this.setState({languages:this.state.languages})
        }
    }
    cvToPDF=()=>{
        var data = document.getElementById('divToPrint');
        var canvas = document.createElement('canvas');
        // document.getElementById('#page').style.margin = "0px"

        canvas.width = 950;
        canvas.height = 1340;

        var options = {
            canvas: canvas,
            scale: 1,
            width: 950,
            height: 1340,
            windowHeight: 1280,
            windowWidth: 1920,

        };

        html2canvas(data, options).then((canvas) => {
            const contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF('p', 'px', 'a4');

            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();

            pdf.addImage(contentDataURL, 'PNG', 1, 1, width, height);
            pdf.save(' - Dashboard');
        });
    }

}
 
export default MyCVapp ;

