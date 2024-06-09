import { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode;
}
const Component = ({children}: ComponentProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <main className='p-8'>
            <h1 className="text-7xl font-black">tailwind tests</h1>
            <div className="flex flex-row w-full gap-2 pt-2">
                <div className="basis-1/4 bg-blue-400 p-8 text-center rounded-lg">01</div>
                <div className="basis-1/4 bg-amber-300 p-8 text-center rounded-lg">02</div>
                <div className="basis-1/2 bg-red-500 p-8 text-center rounded-lg">03</div>
            </div>
            <div className="flex flex-row w-full gap-2 pt-2">
                <div className="basis-1/2 bg-cyan-200 p-8 text-center rounded-lg">01</div>
                <div className="basis-1/4 bg-purple-300 p-8 text-center rounded-lg">02</div>
                <div className="basis-1/3 bg-green-500 p-8 text-center rounded-lg">03</div>
            </div>
            <div className="flex flex-row w-full gap-2 pt-2 justify-start">
                <div className="w-32 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-48 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <div className="flex flex-row w-full gap-2 pt-2 justify-end">
                <div className="w-32 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-48 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <h2>justify center</h2>
            <div className="flex flex-row w-full gap-2 pt-2 justify-center">
                <div className="w-32 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-48 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <div className="flex flex-row w-full gap-2 pt-2 justify-center">
                <div className="w-64 bg-blue-400 p-8 text-center rounded-lg">01</div>
                <div className="w-32 bg-amber-300 p-8 text-center rounded-lg">02</div>
                <div className="w-32 bg-red-500 p-8 text-center rounded-lg">03</div>
            </div>
            <div className="flex flex-row w-full gap-2 pt-2 justify-center">
                <div className="w-32 bg-cyan-200 p-8 text-center rounded-lg">01</div>
                <div className="w-72 bg-purple-300 p-8 text-center rounded-lg">02</div>
                <div className="w-48 bg-green-500 p-8 text-center rounded-lg">03</div>
            </div>
            <div className="flex flex-row w-full gap-2 pt-2 justify-center">
                <div className="w-72 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-24 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <h2>justify between</h2>
            <div className="flex flex-row w-full gap-2 pt-2 justify-between">
                <div className="w-32 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-48 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <h2>justify around</h2>
            <div className="flex flex-row w-full gap-2 pt-2 justify-around">
                <div className="w-32 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-48 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <h2>justify evenly</h2>
            <div className="flex flex-row w-full gap-2 pt-2 justify-evenly">
                <div className="w-32 bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className="w-48 bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className="w-24 bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
            <h2>justify stretch</h2>
            <div className="grid grid-flow-col w-full gap-2 pt-2 justify-stretch">
                <div className=" bg-blue-200 p-8 text-center rounded-lg">01</div>
                <div className=" bg-orange-300 p-8 text-center rounded-lg">02</div>
                <div className=" bg-pink-500 p-8 text-center rounded-lg">03</div>
            </div>
        </main>
    )
}

