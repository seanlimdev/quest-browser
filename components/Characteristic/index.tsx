import Paragraph from '@/components/Paragraph';
import Sword from '../Sword';
import { Container } from './style';

interface CharacteristicProps {
	title: string;
	value: any;
	difficulty?: string | number;
	isBlue?: boolean;
	size?: 's' | 'm';
}

const Characteristic = ({ title, value, difficulty, isBlue, size = 's' }: CharacteristicProps) => {
	return (
		<Container>
			<Paragraph color='gold' size={size} style={{ textTransform: 'capitalize' }}>
				{title}
			</Paragraph>

			{difficulty ? (
				<span>
					{[...Array(5)].map((_, index) => (
						<Sword key={index} swordColor={index < difficulty ? 'ligth' : 'dark'} size={size} />
					))}
				</span>
			) : (
				<Paragraph color={isBlue ? 'blue' : 'white'} size={size} style={{ textTransform: 'capitalize' }}>
					{value}
				</Paragraph>
			)}
		</Container>
	);
};

export default Characteristic;
