

export default function About(){
    return (
        <div className="text-white w-full justify-center items-center flex flex-col mt-16 gap-4">
            <h1 className="text-2xl font-light">About <span className="text-light">Me</span></h1>
            <span className=" text-xl font-bold text-[#ffffff] w-[90%] max-lg:w-[95%] max-lg:text-sm text-justify mt-4">HI🙋‍♂️ , I AM <span className="text-light">YASH PATEL</span> PASSIONATE SOFTWARE DEVELOPER FROM <span className="text-light">INDIA</span></span>
            
            <span className="text-xl font-light text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-sm text-justify">I am passionate software developer who works on buliding interesting things, graduated from vishwakarma government engineering college in 2024. Pretty Good at Javascript , interested in Opensource Contributions. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nihil consequuntur obcaecati architecto voluptatum. Eaque architecto facilis magni possimus labore. Est quas exercitationem voluptatum nam id possimus, laborum voluptates alias dolores fuga optio voluptas necessitatibus animi veritatis impedit accusamus fugiat atque quos assumenda nihil ad, doloremque hic quidem. Incidunt, excepturi.</span>

            <ul className="text-xl font-light text-[gray] w-[90%] max-lg:w-[95%] max-lg:text-sm text-justify list-disc pl-4 flex flex-col gap-4 max-lg:gap-2 max-lg:text-left">
                <li>🌍 I'm based in India</li>
                <li>🖥️ See my portfolio at <a href="" className="cursor-pointer text-light underline">Github</a></li>
                <li>✉️ You can contact me at <a href="" className="cursor-pointer text-light underline">yashpatel21102001@gmail.com</a></li>
                <li>🚀 I'm currently working on <a href="" className="cursor-pointer text-light underline">MiddleTube</a></li>
                <li>🧠 I'm learning Docker and Kubernetes</li>
                <li>🤝 I'm open to collaborating on </li>
                <li>⚡ I'm eager to meet you!</li>
            </ul>
            
        </div>
    )
}