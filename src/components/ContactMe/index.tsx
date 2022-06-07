import { FaWhatsapp } from 'react-icons/fa';
import { Border, LinkDecoration, Title } from './styles';

interface IContactMeProp {
    color: string;
}

export const ContactMe: React.FC<IContactMeProp> = ({ color }) => {
    return (
        <Border
            className={`d-flex align-items-center justify-items-center text-center ${color}`}
        >
            <div className="text-center align-items-center justify-items-center">
                <LinkDecoration
                    href="https://api.whatsapp.com/send/?phone=5541996386897"
                    target="_blank"
                >
                    <div className="d-flex align-items-center justify-contant-start">
                        <FaWhatsapp className="me-2" size={25} />
                        <Title className="">ENTRE EM CONTATO COMIGO</Title>
                    </div>
                </LinkDecoration>
            </div>
        </Border>
    );
};
