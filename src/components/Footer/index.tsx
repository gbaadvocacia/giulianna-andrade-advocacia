import { MainFooter } from './styles';

const Footer: React.FC = () => {
    return (
        <MainFooter className="mt-auto py-5">
            <div className="container  text-white">
                <ul className="justify-content-center">
                    <li className="me-3">Home</li>
                    <li className="me-3">O escritório</li>
                    <li className="me-3">Quem sou eu</li>
                    <li className="me-3">Áreas de atuação</li>
                    <li className="me-3">Contato</li>
                </ul>
            </div>
        </MainFooter>
    );
};

export default Footer;
