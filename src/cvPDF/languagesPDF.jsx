import '../cvPDF/myCvPDFstyle.css'
import ProgressBar from 'react-bootstrap/ProgressBar';


const LanguagesPDF = (props) => {
    const {language}=props
    return(
    <div>
        <div className='languages'>
            <div >
                <article className='TheLanguage'>{language.theLanguage}</article>
            </div>
            <div>
                <ProgressBar className='TheRange' variant="success" now={language.range} />
            </div>
        </div>
    </div>
    );
}
export default LanguagesPDF