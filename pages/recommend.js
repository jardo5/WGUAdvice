import NavBar from '../components/navbar.js';
import BSSDTable from '../components/bssd.js';
import React from 'react';
import Search from '../components/search.js'

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

        <select className="select w-full max-w-[10rem]">
            <option>Select degree...</option>
            <option>BSSD</option>
            <option>BSCS</option>
        </select>
        </div>
        <BSSDTable />
    </>
    )
}