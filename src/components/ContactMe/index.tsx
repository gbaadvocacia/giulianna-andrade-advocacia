import { FaWhatsapp } from 'react-icons/fa';
import { Border, LinkDecoration, Title } from './styles';

export const ContactMe: React.FC = () => {
    return (
        <div className="d-flex align-items-center justify-items-center text-center">
            <Border className="text-center align-items-center justify-items-center">
                <LinkDecoration
                    href="https://api.whatsapp.com/send/?phone=5541996386897"
                    target="_blank"
                >
                    <div className="d-flex align-items-center">
                        <FaWhatsapp className="me-2" size={25} />
                        <Title>ENTRE EM CONTATO COMIGO</Title>
                    </div>
                </LinkDecoration>
            </Border>
        </div>
    );
};
