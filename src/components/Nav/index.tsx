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
        <li className="nav-item me-3 text-white py-1">
            <UnderLine
                to={id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeMenu}
                title={value}
            >
                <Title>{value}</Title>
            </UnderLine>
        </li>
    );
};

export default Nav;
