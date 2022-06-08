/* eslint-disable jsx-a11y/img-redundant-alt */
import { Border } from './styles';

interface IValuesProps {
    value: string;
    type: string;
}
const ValuesCard: React.FC<IValuesProps> = ({ value, type }) => {
    return (
        <Border className="d-flex flex-sm-column align-items-center justify-content-center w-100 p-4">
            <div className="flex-sm-grow-1 d-flex align-items-center">
                <img src={value} alt="Values image" className="img-fluid" />
            </div>
            <div className="text-center mt-sm-3">
                <h5 className="card-title mt-auto mb-0 fw-bold">{type}</h5>
            </div>
        </Border>
    );
};

export default ValuesCard;
