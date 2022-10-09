import welcome from '../components/typed.js'
import React from 'react'
import { ReactDOM } from 'react'
import App from "../components/typed.js";
import NavBar from '../components/navbar.js';



export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gradient-to-tr from-teal-600 to-green-900">
        <div className="flex-col w-screen h-screen flex justify-center text-center">
            <div className="flex gap-12 flex-col justify-center items-center text-zinc-900">
                <div className="text-7xl text-center font-['Gemunu_Libre'] transition-opacity">
                    <App></App>
                </div>
                <div class="w-96 text-center">
                    <p>
                        Welcome, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat in eligendi ipsam nihil atque repellendus voluptates totam
                        aut, labore accusamus. Laboriosam recusandae a quam quis ex
                        reiciendis unde consequuntur alias.
                    </p>
                </div>
            </div>
        </div>
        <div className="text-center flex justify-center animate-pulse 1s">
            <img src="images/arrow.png" height="128px" width="128px" />
        </div>
    </div>
<div className="bg-[#18181b]">
        <div className="font-gemunu flex justify-center w-screen text-white pt-12 pb-12 text-6xl">
            <h1>Resources</h1>
        </div>

        <div className="flex flex-row justify-around w-screen h-fit pt-12 pb-12 text-6xl mobile:flex-col mobile:gap-8">

            <div className="card w-96 flex justify-center bg-[#2a303c] shadow-xl rounded-pill p-14">
                <a href="https://www.reddit.com/r/WGU/" target="_blank">
                    <figure className="flex justify-center transform transition duration-500 hover:scale-150">
                        <img src="images/reddit.png" width="100px" height="100px" alt="Reddit" />
                    </figure>
                </a>
            </div>

            <div className="card w-96 flex justify-center bg-[#2a303c] shadow-xl rounded-pill p-14">
                <a href="https://discord.com/invite/unwgu" target="_blank">
                    <figure className="flex justify-center transform transition duration-500 hover:scale-150">
                        <img src="images/discord.png" width="100px" height="100px" alt="Discord" />
                    </figure>
                </a>
            </div>

            <div className="card w-96 flex justify-center bg-[#2a303c] shadow-xl rounded-pill p-14">
                <a href="https://docs.google.com/spreadsheets/d/1Ib1_lCzvs8W3m0r_-Hzu5r3KZ7mroV_O/edit#gid=342964056"
                    target="_blank">
                    <figure className="flex justify-center transform transition duration-500 hover:scale-150">
                        <img src="images/google.png" width="100px" height="100px" alt="Google Sheet" />
                    </figure>
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}
