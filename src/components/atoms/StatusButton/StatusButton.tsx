import { Box, Circle, InnerCircle, OuterCircle, Wrapper } from './StatusButton.styles';

export const StatusButton = () => {
	return (
		<Wrapper>
			<Circle>
				<OuterCircle />
				<InnerCircle />
				<Box className='bottom-left' />
				<Box className='bottom-right' />
				<Box className='top-right' />
				<Box className='top-left' />
			</Circle>
		</Wrapper>
	);
};
