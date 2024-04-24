import { CheckIcon } from 'src/assets/icons/CheckIcon';
import { BarsWrapper, Circle, IconWrapper, Wrapper } from './StatusButton.styles';
import { StatusButtonProps } from 'src/types/types';

export const StatusButton = ({ isBought, animationType, ...props }: StatusButtonProps) => {
	return (
		<Wrapper {...props} aria-label={isBought ? 'mark product as not bought' : 'mark product as bought'}>
			<Circle $isBought={isBought} $animationType={animationType} />
			<IconWrapper $isBought={isBought} $animationType={animationType}>
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
