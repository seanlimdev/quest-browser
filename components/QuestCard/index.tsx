import Placeholder from '@/assets/svg/placeholder.svg';
import WrappedImage from '@/components/WrappedImage';
import Heading from '@/components/Heading';
import { Quest } from '@/types/Quest';
import CharacteristicWrapper from '../CharacteristicWrapper';
import { Card, Content } from './style';
import { cinzel } from '@/styles/fonts';

interface QuestCardProps {
	quest: Quest;
}

const QuestCard = ({ quest }: QuestCardProps) => {
	const metricsKeys = ['skillTree', 'difficulty', 'skill', 'experience', 'type', 'gold'];

	return (
		<Card>
			<WrappedImage radius='l' height={108} src={Placeholder} alt='card-cover' />
			<Content>
				<Heading level='h2' style={{ textTransform: 'uppercase' }} className={cinzel.className}>
					{quest.title}
				</Heading>
				<CharacteristicWrapper keys={metricsKeys} quest={quest} />
			</Content>
		</Card>
	);
};

export default QuestCard;
