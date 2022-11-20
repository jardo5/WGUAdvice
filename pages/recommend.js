import NavBar from '../components/navbar.js';;
import BSSDTable from '../components/bssd.js';
import BSCSTable from '../components/bscs.js';
import React from 'react';
import Search from '../components/search.js'
import toggleElements from '../components/switch'

export default function Recommend() {
    return (
    <>
        {/* TODO: Color Pallet */}
        {/* TODO: Add BSCS */}
        {/* TODO: Toggle BSCS vs BSSD */}
        <NavBar />
        <div className="flex justify-between text-center pt-5 pb-5">

        <input type="text" id="myInput" onKeyUp={Search} placeholder="Enter Class Code" 
        className="input input-bordered w-full max-w-[10rem]" />

        <div className="btn-group">
            <button onClick="toggleElements('Tables', 'Tables1')" className="btn">Button</button>
            <button onClick="toggleElements('Tables1', 'Tables')" className="btn">Button</button>
        </div>

        <select className="select w-full max-w-[10rem]">
            <option>Select degree...</option>
            <option id="btn1" value="Table 1">BSSD</option>
            <option id="btn2" value="Table 2">BSCS</option>
        </select>
        </div>

        <div id="Tables">
            <BSSDTable />
        </div>
        <div id="Tables1" className="hidden">
            <BSCSTable />
        </div>
    </>
    )
}