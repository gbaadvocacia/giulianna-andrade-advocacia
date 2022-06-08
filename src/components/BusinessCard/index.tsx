import { Container, Content, Cover } from './styles';
import Welcome from '../Welcome';

const BusinessCard: React.FC = () => {
    return (
        <Container id="home">
            <Cover>
                <div className="container">
                    <Content>
                        <Welcome />
                    </Content>
                </div>
            </Cover>
        </Container>
    );
};

export default BusinessCard;
