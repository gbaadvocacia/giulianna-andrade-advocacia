import { FaWhatsapp } from 'react-icons/fa';
import { Border, LinkDecoration, Padding, Title } from './styles';

interface IContactMeProp {
    color: string;
}

export const ContactMe: React.FC<IContactMeProp> = ({ color }) => {
    return (
        <LinkDecoration
            href="https://api.whatsapp.com/send/?phone=5541996386897"
            target="_blank"
        >
            <Border
                className={`d-flex align-items-center justify-items-center text-center ${color}`}
            >
                <div className="text-center align-items-center justify-items-center">
                    <Padding className="d-flex align-items-center justify-contant-start">
                        <FaWhatsapp className="me-2" size={25} />
                        <Title className="fw-bold">
                            ENTRE EM CONTATO COMIGO
                        </Title>
                    </Padding>
                </div>
            </Border>
        </LinkDecoration>
    );
};
