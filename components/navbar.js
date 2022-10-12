import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-[#18181b] flex items-center justify-between">
      <div className="flex px-2">
        <label tabIndex="0" className="btn btn-ghost rounded-btn">
          <Link href="/">Home</Link>
        </label>
      </div>
      <div className="flex pl-2">
        <div className="flex items-stretch">
          <a href="https://www.wgu.edu/" target="_blank">
            <div className="eo">
              <img
                className="brightness-[100%] contrast-[5%]"
                src="/images/owl.png"
                alt="WGU Owl"
                height="55px"
                width="55px"
              ></img>
            </div>
          </a>
        </div>
      </div>
      <div className="flex pr-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost rounded-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul
              id="drop"
              tabIndex="0"
              className="menu dropdown-content p-2 shadow bg-[#18181b] rounded-box w-52 mt-4"
            >
              <li>
                <Link href="/recommend">Recommendations</Link>
              </li>
              <li>
                <Link href="/helpful">Helpful Links</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
