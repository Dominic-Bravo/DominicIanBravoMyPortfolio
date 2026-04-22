import { Navbar } from '../layout/header';

export function Homepage() {
  return (
      <><Navbar /><div className="bg-gray-200 h-screen">
      <p>
        This is the content of the page. You can add more components and content here.
      </p>
    </div></>
  );
}