import Values from '../Values/index';
import { Card, Container, Contant, Title } from './styles';
import DedicationImg from '../../assets/dedicacao.png';
import ConfiancaImg from '../../assets/confianca.png';
import CuidadoImg from '../../assets/cuidado.png';
import TransparenciaImg from '../../assets/transparencia.png';
import EficienciaImg from '../../assets/eficiencia.png';

const Section3: React.FC = () => {
    return (
        <Container>
            <Contant className="container">
                <Title>
                    <h1 className="text-center fw-bold">VALORES</h1>
                </Title>
                <Card className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                    <div className="col d-flex mb-3">
                        <Values value={DedicationImg} type="DEDICAÇÃO" />
                    </div>
                    <div className="col d-flex mb-3">
                        <Values value={ConfiancaImg} type="CONFIANÇA" />
                    </div>
                    <div className="col d-flex  mb-3">
                        <Values value={CuidadoImg} type="CUIDADO" />
                    </div>
                    <div className="col d-flex mb-3">
                        <Values value={TransparenciaImg} type="TRANSPARÊNCIA" />
                    </div>
                    <div className="col d-flex mb-3">
                        <Values value={EficienciaImg} type="EFICIÊNCIA" />
                    </div>
                </Card>
            </Contant>
        </Container>
    );
};

export default Section3;
