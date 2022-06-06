import { Container, Contant, Cover } from './styles';
import ForumImg from '../../assets/forum.png';
import Welcome from '../Welcome';

const Section1: React.FC = () => {
    return (
        <Container id="home">
            <Cover style={{ backgroundImage: `url(${ForumImg})` }}>
                <div className="container">
                    <Contant>
                        <Welcome />
                    </Contant>
                </div>
            </Cover>
        </Container>
    );
};

export default Section1;
