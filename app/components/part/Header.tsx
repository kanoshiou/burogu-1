import CommandMenuInServer from "@/app/components/part/CommandMenuInServer"
import Nav from "@/app/components/part/Nav"
import NavTrigger from "@/app/components/part/NavTrigger"
import Avatar from "@/app/components/ui/Avatar"
import config from "@/site.config.cjs"

export default function Header({}) {
	return (
		<header className="flex flex-col sm:flex-row gap-6 w-full items-center sm:justify-between print:hidden">
			<Nav className="hidden sm:flex sm:order-last">
				{/* @ts-expect-error Server Component */}
				<CommandMenuInServer />
			</Nav>
			<NavTrigger className="sm:hidden">
				{/* @ts-expect-error Server Component */}
				<CommandMenuInServer />
			</NavTrigger>
			<div className="flex items-center gap-4">
				<Avatar className="w-24 h-24 sm:w-16 sm:h-16" />
				<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
					<div className="flex flex-col gap-2 items-center">
						<p className="font-mono text-2xl">{config.authorName}</p>
						<p className="text-neutral-500 dark:text-neutral-400">
							{config.shortDescription}
						</p>
					</div>
				</div>
			</div>
		</header>
	)
}