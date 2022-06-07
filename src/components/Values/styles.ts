import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--light-gray);
    color: var(--dark-blue);
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 1441px) {
        padding-top: 70px;
        padding-bottom: 70px;
    }
`;

export const Title = styled.div`
    padding-bottom: 100px;
    @media (max-width: 1441px) {
        padding-bottom: 70px;
    }
`;

export const Card = styled.div``;

/* <div className="card-body d-flex justify-content-center">
                    <h5 className="card-title mt-auto mb-0 fw-bold">{type}</h5>
                </div> */
