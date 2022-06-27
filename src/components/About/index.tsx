import PerfilImg from '../../assets/perfil.jpg';
import { Container, Img, Paragraph } from './styles';

const About: React.FC = () => {
    return (
        <Container id="about">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col col-md-4 justify-content-center align-items-center">
                        <Img
                            src={PerfilImg}
                            alt="Foto de perfil"
                            className="img-fluid mb-4"
                        />
                    </div>
                    <div className="col col-md-8">
                        <div className="px-4">
                            <h1 className="fw-bold">QUEM SOU EU</h1>
                            <Paragraph>
                                Giulianna Badalotti de Andrade é advogada e
                                mediadora de conflitos. Natural de Curitiba,
                                formada pelo Centro Universitário Autônomo do
                                Brasil, inscrita na Ordem dos Advogados do
                                Brasil, Subseção Paraná, sob n 86.475.
                            </Paragraph>
                            <Paragraph>
                                Pós-graduada em Direito Processual Civil pelo
                                Centro Universitário Internacional UNINTER e
                                Pós-graduada em Direito do Trabalho e
                                Previdenciário pela Academia Brasileira de
                                Direito Constitucional ABDConst.
                            </Paragraph>
                            <Paragraph>
                                Membra do Instituto Brasileiro de Direito da
                                Família - IBDFAM. Membra do Grupo de Discussão
                                Permanente de Direito de Família da Subseção de
                                Curitiba OAB/PR. Atua na área jurídica desde
                                2013, junto a escritórios de advocacia e
                                administração pública, possuindo experiência nas
                                mais diversas áreas do direito.
                            </Paragraph>
                            <Paragraph>
                                Passou a advogar de forma autônoma quando
                                fundou, em 2017, o escritório de Advocacia GBA.
                                Com a prática, passou a perceber a necessidade
                                de desenvolver habilidades para além da formação
                                do direito, tais como técnicas de negociação, de
                                comunicação, de escuta ativa, dos métodos
                                adequados existentes para a resolução de
                                conflitos, dentre outros.
                            </Paragraph>
                            <Paragraph>
                                Assim, em 2021, capacitou-se como Conciliadora e
                                Mediadora Judicial certificada pelo Tribunal de
                                Justiça do Estado do Paraná, em formação
                                continuada. Atualmente atua como advogada e
                                mediadora junto ao escritório GBA Advocacia, e
                                também como mediadora judicial.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
