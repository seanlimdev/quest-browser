import styled from 'styled-components';
import { Container } from './style';

interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

const Button = ({ className, children, onClick }: ButtonProps) => {
	return (
		<Container className={className} onClick={onClick}>
			{children}
		</Container>
	);
};

export default styled(Button)``;
