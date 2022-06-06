import { Border, Container, Contant, Cover, Flex, Text } from './styles';
import BackgroundImg from '../../assets/imagemFundo.jpg';
import ConectImg from '../../assets/conectMe.png';
import WhatsImg from '../../assets/whats.png';
import EmailImg from '../../assets/email.png';

const Section7: React.FC = () => {
    return (
        <Contant id="contact">
            <Cover style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <Container className="container text-center text-white">
                    <h1 className="mb-5">CONTATO</h1>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column text-center justify-content-center justify-items-center mb-3 mt-3">
                            <img
                                src={ConectImg}
                                alt="Conect pelo whatsapp"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <Flex className="justify-content-center">
                        <div className="p-5 justify-content-start">
                            <Flex className="align-items-center justify-content-start mb-4">
                                <img
                                    src={WhatsImg}
                                    alt="Conect pelo whatsapp"
                                    className="mb-3 me-3"
                                />
                                <Border className="align-items-center">
                                    <span className="fs-4">41 99638-6897</span>
                                </Border>
                            </Flex>
                            <Flex className="align-items-center justify-content-start">
                                <img
                                    src={EmailImg}
                                    alt="Conect pelo whatsapp"
                                    className="mb-3 me-3"
                                />
                                <Border className="align-items-center">
                                    <Text className="">
                                        gba.escritorio@gmail.com
                                    </Text>
                                </Border>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </Cover>
        </Contant>
    );
};

export default Section7;
