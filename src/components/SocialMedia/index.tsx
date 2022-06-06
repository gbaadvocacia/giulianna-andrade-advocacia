import { ReactElement } from 'react';
import { CircleStyles, LinkDecoration } from './styles';

interface ISocialMediaProps {
    value: ReactElement;
    link: string;
}

export const SocialMedia: React.FC<ISocialMediaProps> = ({ value, link }) => {
    return (
        <div className="d-flex align-items-center justify-items-center text-center py-1">
            <CircleStyles className="text-center align-items-center justify-items-center">
                <LinkDecoration href={link} target="_blank">
                    {value}
                </LinkDecoration>
            </CircleStyles>
        </div>
    );
};
