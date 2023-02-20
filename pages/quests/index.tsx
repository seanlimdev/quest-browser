import Link from 'next/link';

import { Quest } from '@/types/Quest';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getQuests } from '@/services/api';
import { Container } from './style';
import QuestCard from '@/components/QuestCard';
import { lato } from '@/styles/fonts';

export const getStaticProps = async () => {
	const data = await getQuests();

	return { props: { quests: data } };
};

const Quests: React.FC<{ quests: Quest[] }> = ({ quests }) => {
	const { locale } = useRouter();
	const { data, isLoading } = useQuery(['quests'], getQuests, { initialData: quests });

	if (isLoading && !data) return <p>isLoading ...</p>;

	return (
		<Container className={lato.className}>
			{data.map((q, index) => (
				<Link key={index} href={`/quests/${q.id}`} locale={locale}>
					<QuestCard quest={q} />
				</Link>
			))}
		</Container>
	);
};

export default Quests;
