import { Link } from "react-router-dom";
import Kinzcut from "../assets/img/kingz-cut-main.png";
import './FormSubmit.css'

const FormSubmit = ()=> {
  return(
    <div className='form-submit-container'>
      <div className='form-submit-response'>
        <div className="logo-container">
          <img src={Kinzcut} alt="Kingzcut logo" />
        </div>
        <h4>Kingzcut Barbing Salon</h4>
        <p><span>Thank You!</span> <br/> Your appointment request has been received.</p>
        <p>We'll get back to you shortly! <Link to='/'>Back to Home Page</Link></p>
      </div>
    </div>
  )
}
export default FormSubmit