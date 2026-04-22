import { Navbar } from "../layout/navbar"

export function Homepage() {
  return (
    <div className="homepage">
        <Navbar />
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage of my portfolio website. Here you can find information about me, my projects, and how to contact me.</p>
    </div>
  );
}