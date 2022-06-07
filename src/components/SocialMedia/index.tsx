import { ReactElement } from 'react';
import { CircleStyles, LinkDecoration } from './styles';

interface ISocialMediaProps {
    value: ReactElement;
    link: string;
    title: string;
}

export const SocialMedia: React.FC<ISocialMediaProps> = ({
    value,
    link,
    title,
}) => {
    return (
        <div className="d-flex align-items-center justify-items-center text-center py-1">
            <LinkDecoration href={link} target="_blank" title={title}>
                <CircleStyles className="text-center align-items-center justify-items-center justify-content-center">
                    {value}
                </CircleStyles>
            </LinkDecoration>
        </div>
    );
};
