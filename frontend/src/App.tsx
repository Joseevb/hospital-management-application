import AppRoutes from "@/AppRoutes";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SidebarProvider } from "@/components/ui/sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

export default function App() {
	return (
		<SidebarProvider>
			<Router>
				<AppSidebar />

				<div className="flex flex-col flex-grow relative py-3 pr-3 bg-sidebar min-h-svh">
					<main className="min-h-full flex-grow overflow-y-auto bg-background rounded-lg shadow-xl">
						<AppRoutes />
						<Toaster />
					</main>
					<ModeToggle />
				</div>
			</Router>
		</SidebarProvider>
	);
}
