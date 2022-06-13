import Config from '../../Config';
import { ContactMe } from '../ContactMe';
import { Button, Container } from './styles';

const Welcome: React.FC = () => {
    return (
        <Container className="text-white">
            <h2 className="mb-4">GIULIANNA B. ANDRADE</h2>
            <h1 className="mb-4">
                ADVOCACIA <br />
                MEDIAÇÃO DE CONFLITOS
            </h1>
            <h2>Qual o problema que você precisa resolver?</h2>
            <h2 className="mb-4">Eu posso te ajudar.</h2>
            {Config.contact.whatsapp && (
                <Button className="d-flex">
                    <div className="d-flex flex-column text-center justify-content-center justify-items-center mt-3">
                        <ContactMe color="blue" />
                    </div>
                </Button>
            )}
        </Container>
    );
};

export default Welcome;
