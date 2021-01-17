import React from "react";
import "../styles/component_styles/StatChart.css";

export const StatChart = ({ baseStats, types }) => {
	return (
		<div className="stat-chart">
			<div className="stat-chart__base-stat-name-container">
				{baseStats.map((stat) => {
					return (
						<div className="stat-chart__base-stat-name">
							{`${stat.baseStatName}: `} &nbsp;
						</div>
					);
				})}
			</div>
			<div className="stat-chart__base-stat-value-container">
				{baseStats.map((stat) => {
					return (
						<div key={stat.baseStatName} className="stat-chart__base-stat">
							<div className="stat-chart__base-stat-value">
								{stat.value < 100 ? (
									<span>{`${stat.value}`} &nbsp;</span>
								) : (
									<span>{` ${stat.value}`}</span>
								)}
							</div>
							<div
								className={`stat-chart__base-stat-line`}
								style={{
									width: `${stat.value <= 135 ? stat.value : 135}px`,
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
