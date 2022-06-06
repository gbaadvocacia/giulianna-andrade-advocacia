import { ContactMe } from '../ContactMe';
import { Container } from './styles';

const Welcome: React.FC = () => {
    return (
        <Container className="text-white">
            <h2 className="mb-4">GIULIANNA B. ANDRADE</h2>
            <h1 className="mb-4">ADVOCACIA MEDIAÇÃO DE CONFLITOS</h1>
            <h2>Qual o problema que você precisa resolver?</h2>
            <h2 className="mb-4">Eu posso te ajudar.</h2>
            <div className="d-flex justify-content-start">
                <div className="d-flex flex-column text-center justify-content-center justify-items-center mt-3">
                    <ContactMe />
                </div>
            </div>
        </Container>
    );
};

export default Welcome;
