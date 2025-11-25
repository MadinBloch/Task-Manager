import { Button, Typography } from "@mui/material";


export default function Hero() {
return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 px-10">
        <div>
        <Typography variant="h3" className="font-bold mb-6 text-gray-900">
        Manage Your Tasks Easily
        </Typography>


        <Typography variant="body1" className="text-gray-600 mb-6">
        A simple, clean and fast task manager to make your daily work more
        productive.
        </Typography>


        <Button variant="contained" size="large">
        Get Started
        </Button>
        </div>


        <div>
        <img
        src="https://images.unsplash.com/photo-1523475496153-3d6cc3000f97?auto=format&fit=crop&w=800&q=80"
        alt="Task Illustration"
        className="rounded-2xl shadow-lg"
        />
        </div>
        </div>
);
}