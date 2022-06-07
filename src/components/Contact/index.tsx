import { Border, Cover, Flex, Text, Title, ContactStyles } from './styles';
import BackgroundImg from '../../assets/imagemFundo.jpg';
import WhatsImg from '../../assets/whats.png';
import EmailImg from '../../assets/email.png';
import { ContactMe } from '../ContactMe';

const Contact: React.FC = () => (
    <section id="contact">
        <Cover style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <div className="container justify-content-center text-center text-white">
                <Title>CONTATO</Title>
                <div className="d-flex justify-content-center">
                    <ContactStyles className="d-flex flex-column text-center justify-content-center justify-items-center">
                        <ContactMe color="green" />
                    </ContactStyles>
                </div>
                <Flex className="justify-content-center">
                    <div className="justify-content-start">
                        <div className="d-flex align-items-center justify-content-start mb-4">
                            <img
                                src={WhatsImg}
                                alt="Conect pelo whatsapp"
                                className="me-3"
                            />
                            <Border className="align-items-center">
                                <span className="fs-4 fw-bold">
                                    41 99638-6897
                                </span>
                            </Border>
                        </div>
                        <div className="d-flex align-items-center justify-content-start">
                            <img
                                src={EmailImg}
                                alt="Conect pelo whatsapp"
                                className="me-3"
                            />
                            <Border className="align-items-center">
                                <Text className="fw-bold">
                                    gba.escritorio@gmail.com
                                </Text>
                            </Border>
                        </div>
                    </div>
                </Flex>
            </div>
        </Cover>
    </section>
);

export default Contact;
