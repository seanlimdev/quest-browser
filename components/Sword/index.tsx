import Image from 'next/image';

import LightSwordIcon from '@/assets/svg/light-sword.svg';
import DarkSwordIcon from '@/assets//svg/dark-sword.svg';

type SwordProps = {
	swordColor: 'ligth' | 'dark';
	size: 's' | 'm';
};

const Sword = ({ swordColor, size }: SwordProps) => {
	const sizes = size === 's' ? 10 : 12;
	return (
		<Image
			src={swordColor === 'ligth' ? LightSwordIcon : DarkSwordIcon}
			width={sizes}
			height={sizes}
			alt='sword-icon'
		/>
	);
};

export default Sword;
