import { ReactElement } from 'react';
import { CircleStyles, LinkDecoration } from './styles';

interface ISocialMediaProps {
    value: ReactElement;
    link: string;
}

export const SocialMedia: React.FC<ISocialMediaProps> = ({ value, link }) => {
    return (
        <div className="d-flex align-items-center">
            <CircleStyles className="text-center">
                <LinkDecoration href={link}>{value}</LinkDecoration>
            </CircleStyles>
        </div>
    );
};
