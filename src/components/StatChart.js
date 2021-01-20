import React from "react";
import "../styles/component_styles/StatChart.css";

export const StatChart = ({ baseStats, types }) => {
	// holds the stat chart on the pokemon card page
	return (
		<div className="stat-chart">
			<div className="stat-chart__base-stat-name-container">
				{baseStats.map((stat) => {
					return (
						<div
							className="stat-chart__base-stat-name"
							key={`${stat.baseStatName}StatName`}
						>
							{`${stat.baseStatName}: `} &nbsp;
						</div>
					);
				})}
			</div>
			<div className="stat-chart__base-stat-value-container">
				{baseStats.map((stat) => {
					return (
						<div
							key={`${stat.baseStatName}StatValue`}
							className="stat-chart__base-stat"
						>
							<div className="stat-chart__base-stat-value">
								{stat.value < 100 ? (
									<span>{`${stat.value}`} &nbsp;</span>
								) : (
									<span>{` ${stat.value}`}</span>
								)}
							</div>
							<div
								className={`stat-chart__base-stat-line`}
								// defines how long the line is for each stat to represent how high the stat is
								style={{
									width: `${
										stat.value <= 125 ? (stat.value * 100) / 125 : 100
									}%`,
									backgroundColor: `var(--${types[0]}4`,
								}}
							/>
						</div>
					);
				})}
			</div>
			<div className="stat-chart__base-stat-value-bar"></div>
		</div>
	);
};
