import { MySidebar } from "./../../components/user/MySidebar";
import { MyTextArea } from "./../../components/MyTextArea";
import { MyCard } from "./../../components/MyCard";


export default function UniversalRoom()
{
	return (
		<div className="flex gap-4 rounded-xl min-h-screen">
			<aside>
				<MySidebar />
			</aside>
			<main className="bg-purple-300 flex-auto">
				<div className="w-full py-4">
					<MyTextArea />
				</div>
				<content>
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
					<MyCard />
				</content>
			</main>
		</div>

		)
}