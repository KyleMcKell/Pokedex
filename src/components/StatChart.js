import React from "react";

export const StatChart = ({ baseStats }) => {
	return (
		<div className="pokemon-info-card__base-stats">
			{baseStats.map((stat) => {
				return (
					<div
						key={stat.baseStatName}
						className="pokemon-info-card__base-stat"
					>{`${stat.baseStatName}: ${stat.value}`}</div>
				);
			})}
		</div>
	);
};
