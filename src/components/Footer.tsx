import { Link } from 'react-router-dom';
import xIcon from '../assets/social/x.svg';
import linkedinIcon from '../assets/social/linkedin.svg';
import instagramIcon from '../assets/social/instagram.svg';
import { currentYear } from '../utils.ts';

const Footer: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-20 pt-10 pb-8 bg-bgColorPrimary">
      <div className="w-full flex items-center justify-between">
        <p className="font-syncopate text-primary font-bold text-xs sm:text-[22px] leading-[26px]">MakeOver</p>

        <div className="flex items-center gap-6">
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src={xIcon} alt="twitter" className="w-6 h-6"  loading="lazy" />
          </Link>
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src={linkedinIcon} alt="linkedin" className="w-6 h-6"  loading="lazy"/>
          </Link>
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src={instagramIcon} alt="instagram" className="w-6 h-6"  loading="lazy"/>
          </Link>
        </div>
      </div>

      <hr className="my-6 h-[1px] bg-hrColor" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between font-semibold">
        <div className="lg:w-full flex gap-5 sm:gap-6 text-xs sm:text-base leading-8 text-secondary">
          <p className="text-light font-normal">
            &#169; MakeOver {currentYear}
          </p>

          <Link to="/privacy-policy" className="hover:opacity-70 transition-opacity">
            Privacy Policy 
            </Link>
          <Link to="/terms-of-service" className="hover:opacity-70 transition-opacity">
            Terms & Conditions 
            </Link>
        </div>

        <p className="w-full flex flex-wrap items-center justify-center lg:justify-end font-semibold text-xs sm:text-base leading-8 text-secondary">
          Know Our Services & Customer Support:
          <Link to="tel:+918969699521" className="ml-2 hover:opacity-70 transition-opacity">
            +91-8969699521,
          </Link>
          <Link to="mailto:hello@wemakeover.co.in" className="ml-1">hello@wemakeover.co.in</Link>
        </p>
      </div>
    </div>
  )
}

// Know Our Services & Customer Support: +91-8969699521, hello@wemakeover.co.in

export default Footer;