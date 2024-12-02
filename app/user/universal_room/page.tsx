import { MySidebar } from "./../../components/user/MySidebar";
import { MyTextArea } from "./../../components/MyTextArea";
import { MyCard } from "./../../components/MyCard";
import { MyBreadcrumb } from "./../../components/MyBreadcrumb";


export default function UniversalRoom()
{
	return (
		<div className="flex gap-4 rounded-xl min-h-screen">
			<aside className="flex-auto bg-white">
				<MySidebar />
			</aside>
			<main className="bg-purple-300 flex-auto mt-2">
				<div className="ml-0 w-full fixed">
					<MyBreadcrumb></MyBreadcrumb>
				</div>
				<div className="mt-12 fixed text-center w-auto bg-amber-300 w-full top-14 shadow-sm">
					<h3 class="text-3xl font-bold dark:text-white text-white">Film Room</h3>
				</div>
				<div className="mt-20">
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
				</div>
			</main>
		</div>

		)
}