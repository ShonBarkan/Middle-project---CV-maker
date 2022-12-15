import '../cvPDF/myCvPDFstyle.css'


const MoreAboutMePDF = (props) => {
    const {more}=props
    return(
    <div>
        <div className='moreAboutMe'>
            <div className='whatM' >
                <artical>{more.what}</artical>
            </div>
            <div className='yearM'>
                <artical>{more.startYear + (more.endYear? '-' + more.endYear:'')}</artical>
            </div>
            <div className='tellMeMoreM'>
                <artical>{more.moreAboutIt}</artical>
            </div>
        </div>
    </div>
    );
}
export default MoreAboutMePDF