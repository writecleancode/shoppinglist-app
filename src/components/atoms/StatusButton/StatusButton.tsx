import { CheckIcon } from 'src/assets/icons/CheckIcon';
import { BarsWrapper, Circle, IconWrapper, Wrapper } from './StatusButton.styles';

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
			<BarsWrapper $animationType={animationType}>
				<div className='bar bar-top'></div>
				<div className='bar bar-top-left'></div>
				<div className='bar bar-left'></div>
				<div className='bar bar-bottom-left'></div>
				<div className='bar bar-bottom'></div>
				<div className='bar bar-bottom-right'></div>
				<div className='bar bar-right'></div>
				<div className='bar bar-top-right'></div>
			</BarsWrapper>
		</Wrapper>
	);
};
