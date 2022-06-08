/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Alignment,
    Container,
    DarkHeader,
    Img,
    List,
    ScrollLink,
} from './styles';
import { FaWhatsapp } from 'react-icons/fa';
import { GrFacebookOption, GrInstagram } from 'react-icons/gr';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import CardImg from '../../assets/card.png';
import { Circle } from '../Circle';
import Nav from '../Nav';
import { SocialMedia } from '../SocialMedia';
import { AiOutlineMenu } from 'react-icons/ai';
import Config from '../../Config';
import { useState } from 'react';

const Header: React.FC = () => {
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(!click);
    return (
        <DarkHeader>
            <Container className="container">
                <nav className="navbar navbar-expand-xxl">
                    <div className="container-fluid">
                        <Img>
                            <img
                                src={CardImg}
                                alt="Imagem de perfil"
                                className="img-fluid"
                            />
                        </Img>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <AiOutlineMenu color="#ffffff" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarNav"
                        >
                            <List className="navbar-nav">
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
                            </List>
                            <Alignment className="d-flex align-items-center">
                                {Config.social.instagram && (
                                    <div className="me-2">
                                        <SocialMedia
                                            icon={<GrInstagram />}
                                            link={Config.social.instagram}
                                            title="Instagram"
                                        />
                                    </div>
                                )}
                                {Config.social.whatsapp && (
                                    <div className="me-2">
                                        <SocialMedia
                                            icon={<FaWhatsapp />}
                                            link={Config.social.whatsapp}
                                            title="Whatsapp"
                                        />
                                    </div>
                                )}
                                {Config.social.email && (
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
                        </div>
                    </div>
                </nav>
            </Container>
        </DarkHeader>
    );
};

export default Header;
