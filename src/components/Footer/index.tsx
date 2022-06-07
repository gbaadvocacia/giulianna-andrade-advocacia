import { Circle } from '../Circle';
import Nav from '../Nav';
import { Link, MainFooter, Site } from './styles';

const Footer: React.FC = () => {
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
            <div className="justify-items-center text-center text-white p-4">
                <Site>site por </Site>
                <span className="fw-bold">
                    <Link
                        href="https://www.linkedin.com/in/paulanader/"
                        target="_blank"
                        title="Perfil LinkedIn - Paula Nader"
                    >
                        Paula Nader
                    </Link>
                </span>
            </div>
        </MainFooter>
    );
};

export default Footer;
