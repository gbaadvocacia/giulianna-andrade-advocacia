import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GrFacebookOption, GrInstagram } from 'react-icons/gr';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import Config from '../../Config';
import { Circle } from '../Circle';
import { Alignment } from '../Header/styles';
import Nav from '../Nav';
import { SocialMedia } from '../SocialMedia';
import { LinkStyle, MainFooter, ScrollLink, Site } from './styles';

const Footer: React.FC = () => {
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(!click);

    return (
        <MainFooter className="mt-auto">
            <div className="container text-white mb-4">
                <ul className="justify-content-center align-items-center mb-4">
                    <Nav value="Home" id="home" />
                    <li className="me-3 d-none d-xxl-block">
                        <Circle />
                    </li>
                    <Nav value="O escritório" id="office" />
                    <li className="me-3 d-none d-xxl-block">
                        <Circle />
                    </li>
                    <Nav value="Quem sou eu" id="about" />

                    <li className="me-3 d-none d-xxl-block">
                        <Circle />
                    </li>
                    <Nav value="Áreas de atuação" id="acting" />
                    <li className="me-3 d-none d-xxl-block">
                        <Circle />
                    </li>
                    <Nav value="Contato" id="contact" />
                </ul>
            </div>
            <Alignment className="d-flex align-items-center justify-content-center">
                {Config.social.instagram && (
                    <div className="me-2">
                        <SocialMedia
                            icon={<GrInstagram />}
                            link={Config.social.instagram}
                            title="Instagram"
                        />
                    </div>
                )}
                {Config.contact.whatsapp && (
                    <div className="me-2">
                        <SocialMedia
                            icon={<FaWhatsapp />}
                            link={Config.contact.whatsapp}
                            title="Whatsapp"
                        />
                    </div>
                )}
                {Config.contact.email && (
                    <div className="me-2">
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onClick={closeMenu}
                            title="E-mail"
                        >
                            <MdOutlineAlternateEmail />
                        </ScrollLink>
                    </div>
                )}
                {Config.social.facebook && (
                    <div className="me-2">
                        <SocialMedia
                            icon={<GrFacebookOption />}
                            link={Config.social.facebook}
                            title="Whatsapp"
                        />
                    </div>
                )}
            </Alignment>
            <div className="justify-items-center text-center text-white p-4">
                <Site>site por </Site>
                <span className="fw-bold">
                    <LinkStyle
                        href="https://www.linkedin.com/in/paulanader/"
                        target="_blank"
                        title="Perfil LinkedIn - Paula Nader"
                    >
                        Paula Nader
                    </LinkStyle>
                </span>
            </div>
        </MainFooter>
    );
};

export default Footer;
