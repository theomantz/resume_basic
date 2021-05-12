import './ContactCard.css'
import headshot from '../../assets/headshot.jpg'
import {
  ReactComponent as GithubIcon
} from '../../assets/githubIcon.svg'
import {
  ReactComponent as LocationIcon
} from '../../assets/locationIcon.svg'

const ContactCard = () => {

  return (
    <div className="contact-card-visible content-card-visible">
      <img className="contact-card-image" alt="avatar" src={headshot} />
      <div className="contact-info-container">
        <strong className="contact-card-name">Theo Mantz</strong>
          
          <ul className='basic-contact-info'>
            <span className='contact-subtext'>
              Lets Get in Touch!
            </span>
            <li className='contact-info-item'>
              <LocationIcon /> 
              <span className='contact-card-text'>New York, NY</span>
            </li>
          </ul>
        <div className="contact-card-info">
          <ul className="socials-list">
            <span className='contact-subtext'>
              Follow Me:
            </span>
            <li className="socials-link-container">
              <GithubIcon
                onClick={() => window.open("https://github.com/theomantz/", "_blank")}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactCard