import StatementIconImg from '../../assets/depoimentosicon.png';
import { Container } from './styles';

interface IStatementProps {
    stat: string;
    name: string;
}

const Statement: React.FC<IStatementProps> = ({ stat, name }) => {
    return (
        <Container className="text-center align-self-stretch mb-4">
            <div className="flex-sm-grow-1 align-items-center p-0 px-sm-4">
                <img
                    src={StatementIconImg}
                    alt="Depoimentos"
                    className="mb-4"
                />
                <p className="text-wrap align-items-center">{stat}</p>
            </div>
            <div className="d-flex justify-content-center mt-auto">
                <h2 className="fw-bold">{name}</h2>
            </div>
        </Container>
    );
};

export default Statement;
