import { Cover, Paragraph } from './styles';
import BackgroundImg from '../../assets/background.jpg';

const TheOffice: React.FC = () => {
    return (
        <section id="office">
            <Cover style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <div className="container">
                    <h1 className="fw-bold">O ESCRITÓRIO</h1>
                    <Paragraph className="fs-2">
                        <p>
                            A missão deste escritório de advocacia é ouvir,
                            compreender e auxiliar os clientes na busca da
                            solução mais acertada e eficiente para resolução dos
                            seus conflitos.
                        </p>
                    </Paragraph>
                    <Paragraph className="fs-2">
                        <p>
                            Sabemos que são em momentos difíceis que a
                            necessidade de um advogado se faz presente, por isso
                            objetivamos prestar o atendimento jurídico da forma
                            mais humana e responsável possível.
                        </p>
                    </Paragraph>
                    <Paragraph className="fs-2">
                        <p>
                            Assim, de forma geral, a razão de existir deste
                            escritório é buscar soluções que preservem os
                            interesses dos nossos clientes e que ao mesmo tempo
                            sejam rápidas, eficazes e, portanto, menos
                            desgastantes, observados não apenas o aspecto
                            financeiro, como também relacional, psicológico e
                            social.
                        </p>
                    </Paragraph>
                </div>
            </Cover>
        </section>
    );
};

export default TheOffice;
