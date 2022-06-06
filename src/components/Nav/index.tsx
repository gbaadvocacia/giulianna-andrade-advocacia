import { Link } from 'react-scroll';
import { useState } from 'react';
import { Title, UnderLine } from './styles';

interface INavProp {
    value: string;
    id: string;
}

const Nav: React.FC<INavProp> = ({ value, id }) => {
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(!click);
    return (
        <UnderLine className="nav-item me-3 text-white py-1">
            <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
            >
                <Title>{value}</Title>
            </Link>
        </UnderLine>
    );
};

export default Nav;
