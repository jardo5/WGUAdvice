export default function NavBar() {
    return (
        <div className="navbar bg-[#18181b] flex items-center justify-between">
        <a href="/index.js" target="">
            <div class="flex-1 px-2 lg:flex-none">
                <label tabindex="0" class="btn btn-ghost rounded-btn">Home</label>
            </div>
        </a>
        <div class="flex pl-2">
            <div class="flex items-stretch">
            <a href="https://www.wgu.edu/" target="_blank">
                <div class="eo">
                    <img className="brightness-[100%] contrast-[5%]" src="/images/owl.png" alt="WGU Owl" height="55px" width="55px"></img>
                </div>
            </a>
            </div>
        </div>
    
        <div class="flex pr-2">
            <div class="flex items-stretch">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost rounded-btn">Links</label>
                    <ul id="drop" tabindex="0" class="menu dropdown-content p-2 shadow bg-[#18181b] rounded-box w-52 mt-4">
                        <li><a>Recommendations</a></li>
                        <li><a>Helpful Links</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}