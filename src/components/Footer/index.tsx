import { Circle } from '../Circle';
import { Link, MainFooter } from './styles';

const Footer: React.FC = () => {
    return (
        <>
            <MainFooter className="mt-auto py-5">
                <div className="container text-white mb-4">
                    <ul className="justify-content-center align-items-center mb-4">
                        <li className="me-3">Home</li>
                        <li className="me-3 d-none d-lg-block">
                            <Circle />
                        </li>
                        <li className="me-3">O escritório</li>
                        <li className="me-3 d-none d-lg-block">
                            <Circle />
                        </li>
                        <li className="me-3">Quem sou eu</li>
                        <li className="me-3 d-none d-lg-block">
                            <Circle />
                        </li>
                        <li className="me-3">Áreas de atuação</li>
                        <li className="me-3 d-none d-lg-block">
                            <Circle />
                        </li>
                        <li className="me-3">Contato</li>
                    </ul>
                </div>
            </MainFooter>
            <MainFooter>
                <div className="justify-items-center text-center text-white p-4">
                    <span>site por </span>
                    <Link
                        href="https://www.linkedin.com/in/paulanader/"
                        target="_blank"
                    >
                        Paula Nader
                    </Link>
                </div>
            </MainFooter>
        </>
    );
};

export default Footer;
