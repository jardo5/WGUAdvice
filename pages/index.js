import React from "react";
import App from "../components/typed.js";
import NavBar from "../components/navbar.js";


export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gradient-to-bl from-[#A17C7D] to-[#3C4F67]">
        <div className="flex flex-col justify-center w-screen h-screen text-center">
          <div className="flex flex-col items-center justify-center gap-12 text-zinc-900">
            <div className="text-center transition-opacity font-gemunu text-7xl">
              <App></App>
            </div>
            <div className="text-xl text-center w-96 font-albert">
              <p>
                {/* TODO: Write Something */}
                Welcome, Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat in eligendi ipsam nihil atque repellendus
                voluptates totam aut, labore accusamus. Laboriosam recusandae a
                quam quis ex reiciendis unde consequuntur alias.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center animate-pulse 1s">
          <img src="images/arrow.png" height="128px" width="128px" />
        </div>
      </div>
      <div className="bg-[#18181b]">
        <div className="flex justify-center w-screen pt-12 pb-12 text-6xl text-white font-albert">
          <h1>Quick Links</h1>
        </div>

        <div className="flex flex-row justify-around w-screen pt-12 pb-12 text-6xl h-fit mobile:flex-col mobile:gap-8">
          <div className="card w-96 flex justify-center bg-[#2a303c] shadow-xl rounded-pill p-14">
            <a href="https://www.reddit.com/r/WGU/" target="_blank">
              <figure className="flex justify-center transition duration-500 transform hover:scale-150">
                <img
                  src="images/reddit.png"
                  width="100px"
                  height="100px"
                  alt="Reddit"
                />
              </figure>
            </a>
          </div>

          <div className="card w-96 flex justify-center bg-[#2a303c] shadow-xl rounded-pill p-14">
            <a href="https://discord.com/invite/unwgu" target="_blank">
              <figure className="flex justify-center transition duration-500 transform hover:scale-150">
                <img className="hover:<"
                  src="images/discord.png"
                  width="100px"
                  height="100px"
                  alt="Discord"
                />
              </figure>
            </a>
          </div>

          <div className="card w-96 flex justify-center bg-[#2a303c] shadow-xl rounded-pill p-14">
            <a
              href="https://docs.google.com/spreadsheets/d/1Ib1_lCzvs8W3m0r_-Hzu5r3KZ7mroV_O/edit#gid=342964056"
              target="_blank"
            >
              <figure className="flex justify-center transition duration-500 transform hover:scale-150">
                <img
                  src="images/google.png"
                  width="100px"
                  height="100px"
                  alt="Google Sheet"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
