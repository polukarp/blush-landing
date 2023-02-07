import 'boxicons';
import Navbar from './components/Navbar';
import Card, { CardProps } from './components/Card';

function App() {
	const whyCards: CardProps[] = [
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
	];

	const applicationCards: CardProps[] = [
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
		{
			title: 'Productivity',
			description:
				'Comfortably write your code in an object-oriented way with high level abstractions, while having access to deep integrations with GNOME technolgies such as: GObject, GTK and more!',
			icon: 'bx bx-cog',
		},
	];
	whyCards.map((card) => {
		console.log(card);
	});

	return (
		<>
			<Navbar />
			<div className="bg-base-200 ">
				<div className="max-w-screen-xl mx-auto">
					<div className="min-h-[calc(100vh-20vh)]  mx-auto grid place-content-center py-8">
						<div className="prose mb-8">
							<h1 className="text-center ">
								Welcome to the World of <span className="">Blush</span> Programming
								Language!
							</h1>
						</div>

						<div className="bg-base-content text-base-100 flex flex-col p-4 mx-auto max-w-[500px] rounded-md mb-6">
							<div>
								fun main: i32 (argc: i32, argv: [*u8]) &#123;
								<div className="ml-4">puts("Hello, world")</div>
								<div className="ml-4">return 0</div>
								<div>&#125;</div>
							</div>
						</div>
						<div className="flex gap-4 justify-center items-center">
							<button className="btn ">Get Started</button>
							<button className="btn btn-outline flex gap-1">
								Source Code
								<i className="bx bxl-github text-3xl"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-base-300 px-2">
				<div className="max-w-screen-xl mx-auto">
					<div>
						<h2 className="text-center text-4xl p-12 font-bold">Why Blush?</h2>
						<div className="flex flex-wrap gap-4 justify-center items-center">
							{whyCards.map((card: CardProps) => (
								<Card {...card} />
							))}
						</div>
					</div>
					<div>
						<h2 className="text-center text-4xl p-12 font-bold">What can you build?</h2>
						<div className="flex flex-wrap gap-4 justify-center items-center">
							{applicationCards.map((card: CardProps) => (
								<Card {...card} />
							))}
						</div>
					</div>

					<div className="flex flex-col justify-center items-center gap-4 p-8">
						<h2 className="text-4xl text-center font-bold">Social Media</h2>
						<div className="flex text-4xl gap-4">
							<i className="cursor-pointer bx bxl-discord-alt"></i>
							<i className="cursor-pointer bx bxl-meta"></i>
							<i className="cursor-pointer bx bxl-telegram"></i>
							<i className="cursor-pointer bx bxl-twitter"></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
