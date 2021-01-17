import React from "react";
import "../styles/component_styles/StatChart.css";

export const StatChart = ({ baseStats, type }) => {
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
								{` ${stat.value}`} &nbsp;
							</div>
							<div className="agh-class-name">
								<div
									className={`stat-chart__base-stat-line`}
									// style={{ width: `50px` }}
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className="stat-chart__base-stat-value-bar"></div>
		</div>
	);
};
