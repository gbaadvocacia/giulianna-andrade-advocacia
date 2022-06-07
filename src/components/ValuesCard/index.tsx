/* eslint-disable jsx-a11y/img-redundant-alt */
import { Border, Card, Container, ImgCard } from './styles';

interface IValuesProps {
    value: string;
    type: string;
}
const ValuesCard: React.FC<IValuesProps> = ({ value, type }) => {
    return (
        <Border className="align-items-center align-self-strech justify-items-center">
            <Container>
                <div className="d-flex align-items-center">
                    <Card className="card d-flex align-items-center w-100 h-100">
                        <ImgCard
                            src={value}
                            alt="Values image"
                            className="img-fluid align-self-center"
                            width="150"
                            height="233"
                        />
                    </Card>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <h5 className="card-title mt-auto mb-0 fw-bold">{type}</h5>
                </div>
            </Container>
        </Border>
    );
};

export default ValuesCard;
