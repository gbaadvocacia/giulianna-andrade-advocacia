/* eslint-disable jsx-a11y/img-redundant-alt */

interface IValuesProps {
    value: string;
    type: string;
}
const Acting: React.FC<IValuesProps> = ({ value, type }) => {
    return (
        <div className="text-center justify-content-center w-100">
            <div className="d-flex flex-column align-items-center">
                <img src={value} alt="Values image" height="100" width="100" />
            </div>
            <div className="align-items-center">
                <h2 className="fs-5 text-wrap">{type}</h2>
            </div>
        </div>
    );
};

export default Acting;
