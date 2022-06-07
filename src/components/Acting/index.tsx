import FamiliarImg from '../../assets/familiar.png';
import SucessoesImg from '../../assets/sucessoes.png';
import MediacaoImg from '../../assets/mediacao.png';
import ProtetivasImg from '../../assets/protetivas.png';
import AdvocaciaImg from '../../assets/advocacia.png';
import AcoesImg from '../../assets/acoes.png';
import TrabalhistaImg from '../../assets/trabalhista.png';
import { Container } from './styles';
import ActingCard from '../ActingCard';

const Acting: React.FC = () => {
    return (
        <Container id="acting">
            <div className="container">
                <h1 className="fw-bold text-center">ÁREAS DE ATUAÇÃO</h1>
                <h2 className="text-center">Principais áreas de atuação</h2>
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center">
                    <div className="col mb-3">
                        <ActingCard
                            value={FamiliarImg}
                            type="Direito da família"
                        />
                    </div>
                    <div className="col mb-3">
                        <ActingCard
                            value={SucessoesImg}
                            type="Sucessões (inventário)"
                        />
                    </div>
                    <div className="col mb-3">
                        <ActingCard
                            value={MediacaoImg}
                            type="Mediação de conflitos (familiares, empresariais, trabalhistas)"
                        />
                    </div>
                    <div className="col mb-3">
                        <ActingCard
                            value={ProtetivasImg}
                            type="Medidas protetivas de urgência"
                        />
                    </div>
                    <div className="col mb-3">
                        <ActingCard
                            value={AdvocaciaImg}
                            type="Advocacia de apoio/ correspondência jurídica"
                        />
                    </div>
                    <div className="col mb-3">
                        <ActingCard
                            value={AcoesImg}
                            type="Ações cíveis e defesa do consumidor em geral"
                        />
                    </div>
                    <div className="col mb-3">
                        <ActingCard
                            value={TrabalhistaImg}
                            type="Trabalhista e previdenciário"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Acting;
