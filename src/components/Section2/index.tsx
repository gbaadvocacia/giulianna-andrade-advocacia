import { Container, Contant, Cover, Paragraph } from './styles';
import BackgroundImg from '../../assets/background.jpg';

const Section2: React.FC = () => {
    return (
        <Contant id="office">
            <Cover style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <Container className="container mt-4">
                    <h1 className="fw-bold mb-4">O ESCRITÓRIO</h1>
                    <Paragraph className="fs-2">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: 'A missão deste escritório de advocacia é ouvir, compreender e auxiliar os clientes na busca da melhor solução para seus conflitos.',
                            }}
                        />
                    </Paragraph>
                    <Paragraph className="fs-2">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: 'Sabemos que são em momentos difíceis que a necessidade de uma advogado se faz presente, por isso objetivamos prestar o atendimento jurídico da forma mais humana e responsável possível.',
                            }}
                        />
                    </Paragraph>
                    <Paragraph className="fs-2">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: 'Assim, de forma geral, a razão de existir deste escritório é buscar soluções que preservem os interesses dos nossos clientes e que ao mesmo tempo sejam rápidas, eficazes e, portanto, menos desgastantes, observados não apenas o aspecto financeiro, como também o emocional, psicológico e social.',
                            }}
                        />
                    </Paragraph>
                </Container>
            </Cover>
        </Contant>
    );
};

export default Section2;
