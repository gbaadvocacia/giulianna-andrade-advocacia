import Statement from '../Statement';
import { Container, Title } from './styles';

const Comments: React.FC = () => {
    return (
        <Container>
            <div className="container">
                <Title className="fw-bold text-center">
                    O QUE DIZEM SOBRE MIM
                </Title>
                <div className="row row-cols-1 row-cols-xl-2 justify-content-center">
                    <div className="d-flex col mb-4 py-1">
                        <Statement
                            stat="Há três anos a Dra. Giulianna vem prestando seu trabalho jurídico para eu e minha família. Trabalho esse com competência, seriedade e resolutividade. Sempre que necessito de orientação e intervenção jurídica não tenho dúvidas sobre a quem recorrer."
                            name="PATRÍCIA LOYOLA DE CAMARGO"
                        />
                    </div>
                    <div className="d-flex col py-1">
                        <Statement
                            stat="Dedicada, integra e muito ética.  Um dos diferencias que considero de grande valor é a forma como trata de meus processos, sempre me mantendo informada e explicando em linguagem acessível todos os trâmites em relação as ações."
                            name="MARCIA MAYER DE LIMA"
                        />
                    </div>
                    <div className="d-flex col py-1 mb-4">
                        <Statement
                            stat="Super indicio a Dra. Giuliana! Uma excelente profissional, atenciosa e prestativa! Sempre me deixou a par do andamento do processo, e o melhor de tudo ganhamos"
                            name="BRUNO LIMA BORGES"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Comments;
