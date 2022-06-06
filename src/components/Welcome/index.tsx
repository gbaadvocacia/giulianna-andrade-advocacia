import ConectImg from '../../assets/conectMe.png';
import { Container } from './styles';

const Welcome: React.FC = () => {
    return (
        <Container className="text-white px-2 mb-4">
            <h2 className="mb-1">GIULIANNA B. ANDRADE</h2>
            <h1 className="mb-3">ADVOCACIA MEDIAÇÃO DE CONFLITOS</h1>
            <h2 className="">Qual o problema que você precisa resolver?</h2>
            <h2 className="mb-4">Eu posso te ajudar.</h2>
            <div className="d-flex justify-content-start">
                <div className="d-flex flex-column text-center justify-content-center justify-items-center mb-3 mt-3">
                    <img
                        src={ConectImg}
                        alt="Conect pelo whatsapp"
                        className="img-fluid"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Welcome;
