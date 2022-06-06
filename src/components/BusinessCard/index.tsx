import { Container, Content, Cover } from './styles';
import ForumImg from '../../assets/forum.png';
import Welcome from '../Welcome';

const BusinessCard: React.FC = () => {
    return (
        <Container id="home">
            <Cover style={{ backgroundImage: `url(${ForumImg})` }}>
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
