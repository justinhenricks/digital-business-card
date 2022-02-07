import twitter from '../icons/light/twitter.png';
import facebook from '../icons/light/facebook.png';
import instagram from '../icons/light/instagram.png';
import linkedin from '../icons/light/linkedin.png';
import github from '../icons/light/github.png';
const Footer = () => {

    return (
        <div className='flex gap-8 justify-center p-6 bg-slate-200 rounded-b-lg'>
            <img src={twitter} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={linkedin} />
            <img src={github} />
        </div>
    )
}

export default Footer;