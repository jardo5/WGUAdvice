import NavBar from '../components/navbar.js';
import Image from 'next/image.js';

export default function About() {
    return (
        <>
        {/* TODO: Format w/ Prettier when fished. */}
        <NavBar></NavBar>
        <div className='h-screen w-screen'>
        <div id='bg' className='w-screen h-screen overflow-auto'>
            <div className='flex justify-center p-8'>
                <div className='w-[52rem]  h-[24rem] px-5 pt-4 shadow-2xl text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-abtSlate  pb-6  rounded-lg leading-normal overflow-hidden'>
                <div class="top mb-2 flex">
                    <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                    <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="mt-4 flex-1 mobile:text-xs">
                    <span class="text-green-400 whitespace-nowrap">Users-MacBook-Pro ~ %</span>
                    <p class="flex-1 typing items-center pl-2">
                        echo Thank you for visiting! This website was created for 
                        the purpose of helping all WGU BSSD & BSCS students. Hope you can find
                        something useful. I will try to keep everything updated as much as possible. 
                        If there's something I should add/remove message me on discord and let me know. 
                        <br />
                        <br />
                        This site was built using MongoDB, ExpressJS, ReactJS (Next.js), and NodeJS.
                        <br />
                        <br />
                        Other technologies used were TailwindCSS, and DaisyUI and Typed.js.
                    </p>
                </div>
            </div>
            </div>
            {/* TODO: Add links to photos. Add scale on hover. */}
            <div className='flex justify-around pt-4 font-gemunu font-semibold text-lg text-black mobile:flex-col items-center gap-4 pb-4'>
                <div className='bg-abtSlate flex w-72 h-80 justify-center items-center shadow-md shadow-black rounded-2xl'>
                    <div className='bg-abtBlue w-64 h-72 flex flex-col justify-evenly items-center rounded-2xl'>
                        <div className="tooltip" data-tip="Jardo#1108">
                    <Image className="hover:scale-110" src='images/discordBlack.png' alt="Discord Logo" width="172px" height="172px" />
                    </div>
                        <h1>Feel free to ask questions</h1>
                    </div>
                </div>
                <div className='bg-abtSlate flex w-72 h-80 justify-center items-center shadow-md shadow-black rounded-2xl'>
                    <div className='bg-abtPink w-64 h-72 flex flex-col justify-evenly items-center rounded-2xl'>
                    <a href="https://github.com/jardo5" target="_blank" rel="noreferrer">
                    <Image className="hover:scale-110" src='images/githubBlack.png' alt="Github Logo" width="172px" height="172px" />
                    </a>    
                        <h1>Source Code</h1>
                    </div>
                </div>
                <div className='bg-abtSlate flex w-72 h-80 justify-center items-center shadow-md shadow-black rounded-2xl'>
                    <div className='bg-abtBlue w-64 h-72 flex flex-col justify-evenly items-center rounded-2xl'>
                    <a href="#" target="_blank" rel="noreferrer">
                    <div className="tooltip" data-tip="W.I.P">
                        <Image className="hover:scale-110" src='images/webpageBlack.png' alt="Webpage Logo" width="172px" height="172px" />
                    </div>
                    </a>
                        <h1>Personal Website</h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
        )
    }