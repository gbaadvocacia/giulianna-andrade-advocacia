import { Container, Title } from './styles';
import DedicationImg from '../../assets/dedicacao.png';
import ConfiancaImg from '../../assets/confianca.png';
import CuidadoImg from '../../assets/cuidado.png';
import TransparenciaImg from '../../assets/transparencia.png';
import EficienciaImg from '../../assets/eficiencia.png';
import ValuesCard from '../ValuesCard/index';

const Values: React.FC = () => {
    return (
        <Container>
            <div className="container">
                <Title>
                    <h1 className="text-center fw-bold">VALORES</h1>
                </Title>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center g-4">
                    <div className="col d-flex">
                        <ValuesCard value={DedicationImg} type="DEDICAÇÃO" />
                    </div>
                    <div className="col d-flex">
                        <ValuesCard value={ConfiancaImg} type="CONFIANÇA" />
                    </div>
                    <div className="col d-flex">
                        <ValuesCard value={CuidadoImg} type="CUIDADO" />
                    </div>
                    <div className="col d-flex">
                        <ValuesCard
                            value={TransparenciaImg}
                            type="TRANSPARÊNCIA"
                        />
                    </div>
                    <div className="col d-flex">
                        <ValuesCard value={EficienciaImg} type="EFICIÊNCIA" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Values;
