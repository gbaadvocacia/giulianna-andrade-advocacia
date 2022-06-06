/* eslint-disable jsx-a11y/img-redundant-alt */
import { Border, Card } from './styles';

interface IValuesProps {
    value: string;
    type: string;
}
const Values: React.FC<IValuesProps> = ({ value, type }) => {
    return (
        <Border>
            <Card className="card align-self-stretch justify-items-center">
                <div className="text-center">
                    <img
                        src={value}
                        alt="Values image"
                        className="card-img-center img-fluid"
                        height="150"
                        width="150"
                    />
                </div>
                <div className="card-body d-flex justify-content-center mb-4">
                    <h5 className="card-title mt-auto mb-0 fw-bold">{type}</h5>
                </div>
            </Card>
        </Border>
    );
};

export default Values;
