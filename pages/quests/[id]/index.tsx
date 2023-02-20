import CrossIcon from '@/assets/svg/cross.svg';
import Dash from '@/assets/svg/dot-dash.svg';
import ItemPlaceholder from '@/assets/svg/item-placeholder.svg';

import Button from '@/components/Button';
import CharacteristicWrapper from '@/components/CharacteristicWrapper';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Rewards from '@/components/Rewards';
import WrappedImage from '@/components/WrappedImage';
import { getQuests, getQuest } from '@/services/api';
import { cinzel, lato } from '@/styles/fonts';
import { useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Quest } from 'types/Quest';
import { Container, QuestInfos, Content, WrappedTitle } from './style';

export const getStaticPaths = async () => {
	const data = await getQuests();

	const paths = data.map((quest) => ({
		params: { id: `${quest.id}` }
	}));

	return {
		paths: paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context?.params?.id;
	const data = await getQuest(id as string);

	return { props: { quest: data } };
};

const Quest: React.FC<{ quest: Quest }> = ({ quest }) => {
	const { locale, push, query } = useRouter();

	const id = query.id as string;
	const { data, isLoading } = useQuery(['quest'], () => getQuest(id), { initialData: quest });

	const backToQuests = () => push('/quests', undefined, { locale });

	if (isLoading && !data) return <p>isLoading ...</p>;

	const metricsKeys = ['skillTree', 'difficulty', 'skill', 'type'];

	return (
		<Container className={lato.className}>
			<QuestInfos>
				<button className='ng-cross' onClick={backToQuests}>
					<Image src={CrossIcon} width={14} height={14} alt='logo' />
				</button>
				<WrappedImage className='clear-radius' radius='l' height={207} src={ItemPlaceholder} alt='card-cover' />
				<Content>
					<WrappedTitle>
						<Image src={Dash} width={99} height={10} alt='logo' className='rotate' />
						<Heading level='h2' size='l' className={cinzel.className}>
							{data.title}
						</Heading>
						<Image src={Dash} width={99} height={10} alt='logo' />
					</WrappedTitle>
					<CharacteristicWrapper quest={data} keys={metricsKeys} />
					<Paragraph color='grey'>{data.description}</Paragraph>
				</Content>
				<Rewards exp={2000} />
				<Button onClick={backToQuests}>Go Back</Button>
			</QuestInfos>
		</Container>
	);
};

export default Quest;
