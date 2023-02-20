import NgTitle from '@/assets/svg/ng-title.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container } from './style';

const Header = () => {
	const router = useRouter();

	return (
		<Container>
			<Image
				onClick={() => router.push('/quests')}
				className='ng-title-logo'
				priority
				src={NgTitle}
				width={285}
				height={35}
				alt='ng-title-logo'
			/>

			<Image
				onClick={() => router.push('/quests')}
				priority
				src={'https://nodeguardians.io/assets/logo-white-square.svg'}
				width={40}
				height={40}
				alt='ng-logo-small'
				className='ng-logo-small'
			/>
		</Container>
	);
};

export default Header;
