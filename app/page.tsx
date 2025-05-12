import { OpenInV0Button } from "@/components/open-in-v0-button";
import { Button } from "@/registry/retro-game/blocks/button/button";
import { Card } from "@/registry/retro-game/blocks/card/card";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
			<header className="flex flex-col gap-1">
				<h1 className="text-3xl font-bold tracking-tight">
					Retro Game UI Registry
				</h1>
				<p className="text-muted-foreground">
					A collection of retro game style UI components built with shadcn.
				</p>
			</header>
			<main className="flex flex-col flex-1 gap-8">
				<div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-muted-foreground sm:pl-3">
							A pixel-perfect retro game style button
						</h2>
						<OpenInV0Button name="button" className="w-fit" />
					</div>
					<div className="flex items-center justify-center gap-4 min-h-[400px] relative">
						<Button>Default</Button>
						<Button variant="primary">Primary</Button>
						<Button variant="success">Success</Button>
						<Button variant="danger">Danger</Button>
					</div>
				</div>

				<div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
					<div className="flex items-center justify-between">
						<h2 className="text-sm text-muted-foreground sm:pl-3">
							A retro game style card with pixel borders
						</h2>
						<OpenInV0Button name="card" className="w-fit" />
					</div>
					<div className="flex items-center justify-center gap-4 min-h-[400px] relative">
						<Card className="w-48 h-32 flex items-center justify-center">
							Default
						</Card>
						<Card
							variant="primary"
							className="w-48 h-32 flex items-center justify-center"
						>
							Primary
						</Card>
						<Card
							variant="success"
							className="w-48 h-32 flex items-center justify-center"
						>
							Success
						</Card>
						<Card
							variant="danger"
							className="w-48 h-32 flex items-center justify-center"
						>
							Danger
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}
