import { Quest } from '@/types/Quest';
import Characteristic from '../Characteristic';
import { Wrapper } from './style';

interface CharacteristicWrapperProps {
	quest: Quest;
	keys: string[];
}

const CharacteristicWrapper = ({ quest, keys }: CharacteristicWrapperProps) => {
	type QuestKeys = keyof typeof quest;
	const characteristics: QuestKeys[] = keys as QuestKeys[];

	return (
		<Wrapper>
			{characteristics.map((charact, index) => {
				const title = charact === 'skillTree' ? 'Skill tree' : charact;
				return (
					<Characteristic
						isBlue={charact === 'skillTree'}
						key={index}
						title={title}
						difficulty={charact === 'difficulty' ? quest[`${charact}`] : undefined}
						value={charact !== 'difficulty' ? quest[`${charact}`] : undefined}
					/>
				);
			})}
		</Wrapper>
	);
};

export default CharacteristicWrapper;
