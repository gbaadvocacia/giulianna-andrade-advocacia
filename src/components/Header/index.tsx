/* eslint-disable jsx-a11y/anchor-is-valid */
import { Alignment, Container, DarkHeader, Img, List } from './styles';
import { FaWhatsapp } from 'react-icons/fa';
import { GrFacebookOption, GrInstagram } from 'react-icons/gr';
import { MdOutlineAlternateEmail } from 'react-icons/md';

import CardImg from '../../assets/card.png';
import { Circle } from '../Circle';
import Nav from '../Nav';
import { SocialMedia } from '../SocialMedia';
import { AiOutlineMenu } from 'react-icons/ai';

const Header: React.FC = () => {
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
                            <Alignment className="d-flex">
                                <div className="me-2">
                                    <SocialMedia
                                        value={<GrInstagram />}
                                        link="https://www.instagram.com/"
                                        title="link para o perfil no Instagram"
                                    />
                                </div>
                                <div className="me-2">
                                    <SocialMedia
                                        value={<FaWhatsapp />}
                                        link="https://api.whatsapp.com/send/?phone=5541996386897"
                                        title="link para o whatsapp"
                                    />
                                </div>
                                <div className="me-2">
                                    <SocialMedia
                                        value={<MdOutlineAlternateEmail />}
                                        link="https://www.instagram.com/"
                                        title="link para o contato de e-mail"
                                    />
                                </div>
                                <SocialMedia
                                    value={<GrFacebookOption />}
                                    link="https://www.facebook.com/"
                                    title="link para o perfil do Facebook"
                                />
                            </Alignment>
                        </div>
                    </div>
                </nav>
            </Container>
        </DarkHeader>
    );
};

export default Header;
