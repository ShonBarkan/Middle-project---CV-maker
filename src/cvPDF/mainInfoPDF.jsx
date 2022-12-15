import '../cvPDF/myCvPDFstyle.css'

const MainInfoPDF = (props) => {

    const {info, style2}=props

    return(
    <div className='mainInfo' >
        <div className='InfoFormat m-2'>
            <div className='whatDiv'>
                <article>{info.what}</article>
            </div>
             <div style={style2} className='YearDiv'>
                <article>{info.startYear + (info.endYear? '-' + info.endYear:'')}</article>
            </div>
            <div className='whereDiv'>
                <article>{info.where}</article>
            </div>
           
            <div className='MoreAboutDiv'>
                <article>{info.what}</article>
            </div>
        </div>
    </div>
    );
}
export default MainInfoPDF
