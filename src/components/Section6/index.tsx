import Statement from '../Statement';
import { Container, Padding } from './styles';

const Section6: React.FC = () => {
    return (
        <Container className="py-5">
            <Padding className="container">
                <h1 className="fw-bold text-center">O QUE DIZEM SOBRE MIM</h1>
                <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-around mt-5">
                    <div className="col">
                        <Statement
                            stat="Os testemunhos das citações são a forma mais popular de
                depoimentos. Eles são poderosos, têm credibilidade e, o mais
                importante, são eficazes"
                            name="José Gonçalves"
                        />
                    </div>
                    <div className="col">
                        <Statement
                            stat="Os testemunhos das citações são a forma mais popular de
                depoimentos. Eles são poderosos, têm credibilidade e, o mais
                importante, são eficazes"
                            name="Ana Maria"
                        />
                    </div>
                </div>
            </Padding>
        </Container>
    );
};

export default Section6;
