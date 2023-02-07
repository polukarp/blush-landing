import React from 'react';

export interface CardProps {
	title: string;
	description: string;
	icon?: string;
}

const Card = ({ title, description, icon }: CardProps) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body">
				<div className="flex gap-2">
					<i className={`text-3xl ${icon}`}></i>
					<h2 className="card-title">{title}</h2>
				</div>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
