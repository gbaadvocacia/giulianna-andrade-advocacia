import PerfilImg from '../../assets/perfil.png';
import { Container, Flex, Paragraph, Size } from './styles';

const Section4: React.FC = () => {
    return (
        <Container className="py-5" id="whoIAm">
            <div className="container">
                <Flex className="py-2">
                    <Size className="me-3 mb-4">
                        <img
                            src={PerfilImg}
                            alt="Foto de perfil"
                            className="img-fluid w-100"
                        />
                    </Size>
                    <Size>
                        <h1 className="fw-bold">QUEM SOU EU</h1>
                        <Paragraph className="fs-5">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: 'Giulianna Badalotti de Andrade é advogada e mediadora de conflitos. Natural de Curitiba, formada pelo Centro Universitário Autônomo do Brasil, inscrita na Ordem dos Advogados do Brasil Subseção Paraná sob n 86.475. Pós-graduada em Direito Processual Civil pelo Centro Universitário Internacional UNINTER e Pós-graduada em Direito do Trabalho e Previdenciário pela Academia Brasileira de Direito Constitucional ABBCONST.',
                                }}
                            />
                        </Paragraph>
                        <Paragraph className="fs-5">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: 'Membra do Instituto Brasileiro de Direito da Família - IBDFAM. Menbra do Grupo de Discussão Permanente de Direito de Família da Subseção de Curitiba OAB/PR. Atuando na área jurídica desde 2013, junto à escritórios de advocacia e à administração pública, possui experiência nas mais diversas áreas do direito.',
                                }}
                            />
                        </Paragraph>
                        <Paragraph className="fs-5">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: 'Passou a advogar de forma autônoma quando fundou, em 2017, o escritório de GBA Advocacia. Com a prática da advocacia, passou a perceber a necessidade de desenvolver habilidades para além da formação acadêmica do direito, tais como técnicas de negociação e estudos dos métodos existentes para a resolução de conflitos.',
                                }}
                            />
                        </Paragraph>
                        <Paragraph className="fs-5">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: '2021, capacitou-se como Conciliadora e Mediadora Judicial. Certificada pelo Tribunal de Justiça do Estado do Paraná, em formação continuada. Atualmente atua como advogada e mediadora junto ao escritório GBA Advocacia, e também como mediadora judicial.',
                                }}
                            />
                        </Paragraph>
                    </Size>
                </Flex>
            </div>
        </Container>
    );
};

export default Section4;
