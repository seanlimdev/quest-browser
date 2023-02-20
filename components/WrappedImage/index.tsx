import Image from 'next/image';
import styled from 'styled-components';
import { RaduisType } from '@/styles/theme';

interface ImageProps {
	src: string;
	alt: string;
	width?: string | number;
	height?: string | number;
	objectFit?: 'cover' | 'contain';
	radius?: RaduisType;
	className?: string;
}

const Wrapper = styled.div<{ objectFit: 'cover' | 'contain'; radius?: RaduisType }>`
	position: relative;

	${({ theme, radius, objectFit }) => `
		overflow: hidden;
		border-radius: ${radius ? theme.radius[radius] : 'unset'};
		img {
			object-fit: ${objectFit} !important;
		}
	`}
`;

const MyImage: React.FC<ImageProps> = ({
	className,
	radius,
	src,
	alt,
	width = '100%',
	height = '100%',
	objectFit = 'cover'
}) => {
	return (
		<Wrapper className={className} radius={radius} objectFit={objectFit} style={{ width, height }}>
			<Image priority src={src} alt={alt} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
		</Wrapper>
	);
};

export default MyImage;
