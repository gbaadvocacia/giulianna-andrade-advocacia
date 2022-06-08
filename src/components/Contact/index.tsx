import { Border, Cover, Flex, Text, Title, Width } from './styles';
import BackgroundImg from '../../assets/imagemFundo.jpg';
import WhatsImg from '../../assets/whats.png';
import EmailImg from '../../assets/email.png';
import { ContactMe } from '../ContactMe';
import Config from '../../Config';

const Contact: React.FC = () => (
    <section id="contact">
        <Cover style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <div className="container justify-content-center text-center text-white">
                <Title>CONTATO</Title>
                {Config.social.whatsapp && (
                    <div className="d-flex justify-content-center mb-5 pb-5">
                        <ContactMe color="green" />
                    </div>
                )}
                <Flex className="d-flex justify-content-center">
                    <Width>
                        {Config.social.contato && (
                            <div className="d-flex align-items-center justify-content-start mb-4">
                                <img
                                    src={WhatsImg}
                                    alt="Conect pelo whatsapp"
                                    className="me-3"
                                />
                                <Border className="align-items-center">
                                    <span className="fs-4 fw-bold">
                                        {Config.social.contato}
                                    </span>
                                </Border>
                            </div>
                        )}
                        {Config.social.email && (
                            <div className="d-flex align-items-center justify-content-start">
                                <img
                                    src={EmailImg}
                                    alt="Conect pelo whatsapp"
                                    className="me-3"
                                />
                                <Border className="align-items-center">
                                    <Text className="fw-bold">
                                        {Config.social.email}
                                    </Text>
                                </Border>
                            </div>
                        )}
                    </Width>
                </Flex>
            </div>
        </Cover>
    </section>
);

export default Contact;
