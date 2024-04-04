export const Root = () => {
	return (
		<>
			<header>
				<h1>ShoppingList</h1>
			</header>
			<div className='progressBas'></div>
			<ul>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
				<li>
					<button className='check'></button>
					<p>ketchup</p>
					<div className='category icon'></div>
				</li>
			</ul>
			<button>Add</button>
		</>
	);
};
