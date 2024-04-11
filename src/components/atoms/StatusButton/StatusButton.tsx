import { Box, Circle, InnerCircle, OuterCircle, TestCircle, Wrapper } from './StatusButton.styles';

type StatusButtonProps = {
	animationType: string;
	onClick: any;
};

export const StatusButton = ({ animationType, ...props }: StatusButtonProps) => {
	return (
		<Wrapper {...props}>
			<Circle $animationType={animationType} />
			{/* <Circle>
				<OuterCircle />
				<InnerCircle />
				<Box $animationType={animationType} className='bottom-left' />
				<Box $animationType={animationType} className='bottom-right' />
				<Box $animationType={animationType} className='top-right' />
				<Box $animationType={animationType} className='top-left' />
			</Circle> */}
		</Wrapper>
	);
};
