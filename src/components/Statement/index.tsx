import StatementIconImg from '../../assets/depoimentosicon.png';
import { Container } from './styles';

interface IStatementProps {
    stat: string;
    name: string;
}

const Statement: React.FC<IStatementProps> = ({ stat, name }) => {
    return (
        <Container className="text-center">
            <img src={StatementIconImg} alt="Depoimentos" className="mb-4" />
            <p className="text-wrap align-items-centr">{stat}</p>
            <p className="fw-bold">{name}</p>
        </Container>
    );
};

export default Statement;
