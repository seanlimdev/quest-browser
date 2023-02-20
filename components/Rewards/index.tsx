import Exp from '@/assets/svg/exp.svg';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Image from 'next/image';
import styled from 'styled-components';
import { RewardsBox } from './style';

interface RewardsProps {
	headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	exp: number;
	className?: string;
}

const Rewards = ({ className, headingLevel = 'h3', exp }: RewardsProps) => {
	return (
		<div className={className}>
			<Heading level={headingLevel}>QUEST REWARD</Heading>
			<RewardsBox>
				<Image src={Exp} width={28} height={18} alt='exp-loge' />
				<Paragraph size='xs'>+{exp}</Paragraph>
			</RewardsBox>
		</div>
	);
};

export default styled(Rewards)``;
