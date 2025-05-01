import React, { useContext, useEffect, useMemo } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({ category }) {
	const { categoryFilter, filteredFood } = useContext(StoreContext);

	useEffect(
		() => {
			categoryFilter(category);
		},
		[ category ]
	);

	return (
		<div className="food-display" id="food-display">
			<h2>Top dishes Near you</h2>
			<div className="food-display-list">
				{filteredFood.length === 0 ? (
					<p>No matching value</p>
				) : (
					filteredFood.map((item, index) => (
						<FoodItem
							key={index}
							id={item.id}
							name={item.name}
							description={item.description}
							price={item.price}
							image={item.image}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default FoodDisplay;
