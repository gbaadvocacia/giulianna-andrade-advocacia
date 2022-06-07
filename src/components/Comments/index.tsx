import Statement from '../Statement';
import { Container, Title } from './styles';

const Comments: React.FC = () => {
    return (
        <Container>
            <div className="container">
                <Title className="fw-bold text-center">
                    O QUE DIZEM SOBRE MIM
                </Title>
                <div className="row row-cols-1 row-cols-md-2 justify-content-between">
                    <div className="col mb-4 py-1">
                        <Statement
                            stat="Os testemunhos das citações são a forma mais popular de
                depoimentos. Eles são poderosos, têm credibilidade e, o mais
                importante, são eficazes"
                            name="José Gonçalves"
                        />
                    </div>
                    <div className="col py-1">
                        <Statement
                            stat="Os testemunhos das citações são a forma mais popular de
                depoimentos. Eles são poderosos, têm credibilidade e, o mais
                importante, são eficazes"
                            name="Ana Maria"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Comments;
