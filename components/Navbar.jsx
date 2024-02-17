

export const Navbar = () => {
    return (
        <nav className="px-[70px] py-[30px] text-xl ">
            <div className="flex container gap-[64px] items-center">
                <h2>What.To.Watch</h2>
                <h3 className="text-black bg-white px-[24px] py-[10px] rounded-[100px] font-semibold">Home</h3>
                <ul className="flex gap-[63px] items-start max-w-[1300px]  ">
                    {items.map((item, index) => (
                        <li key={index} className="">{item}</li>
                    ) )}
            </ul>
            </div>
            
        </nav>
    )
}

const items = ['Search', 'Movies', 'Tv Shows']