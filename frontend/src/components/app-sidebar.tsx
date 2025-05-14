import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const data = {
	user: {
		name: "test user",
		email: "user@test.com",
		avatar: "/avatars/test.jpg",
	},
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { open, openMobile } = useSidebar();

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu className="flex flex-row items-center gap-2">
					<SidebarMenuItem className="flex flex-row">
						<SidebarTrigger
							variant={"outline"}
							className="!size-9"
						/>
					</SidebarMenuItem>
					<SidebarMenuItem className="flex flex-row">
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<a
								href="#"
								className={cn(
									!(open || openMobile) && "sr-only",
								)}
							>
								<span className="text-base font-semibold">
									Hospital Management
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent></SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
