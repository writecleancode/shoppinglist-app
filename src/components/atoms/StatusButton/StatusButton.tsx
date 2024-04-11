import { CheckIcon } from 'src/assets/icons/CheckIcon';
import { Circle, IconWrapper, Wrapper } from './StatusButton.styles';

type StatusButtonProps = {
	animationType: string;
	onClick: any;
};

export const StatusButton = ({ animationType, ...props }: StatusButtonProps) => {
	return (
		<Wrapper {...props}>
			<Circle $animationType={animationType} />
			<IconWrapper $animationType={animationType}>
				<CheckIcon />
			</IconWrapper>
		</Wrapper>
	);
};
