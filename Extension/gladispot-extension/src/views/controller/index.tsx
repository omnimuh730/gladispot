import { Button } from "@mui/material";

const RemoteControllerCollection = () => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-2xl font-bold">Remote Controller Collection</h2>
			<p className="text-gray-600">
				Manage your remote controllers and their configurations.
			</p>
			<Button color="primary" variant="contained">Grab</Button>
			<Button color="primary" variant="contained">Analyze</Button>
			<Button color="primary" variant="contained">Generate</Button>
			<Button color="primary" variant="contained">Action</Button>
		</div>
	);
}

export default RemoteControllerCollection