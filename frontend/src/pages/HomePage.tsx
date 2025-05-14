import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function HomePage() {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-full">
				<Button onClick={() => toast("Hello")}>Click me</Button>
			</div>
		</>
	);
}
