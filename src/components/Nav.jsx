
function Nav() {
  return (
    <nav className="w-full bg-yellow-400">
      <ul className="h-24 flex justify-around items-center text-purple-900 font-extrabold">
        <li className="hover:underline hover:cursor-pointer">Projects</li>
        <li className="hover:underline hover:cursor-pointer">About</li>
        <li className="hover:underline hover:cursor-pointer">Get in touch</li>
      </ul>
    </nav>
  );
}

export default Nav;
