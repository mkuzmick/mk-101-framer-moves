import { ReactNode } from 'react';

interface FramerTestProps {
    children: ReactNode;
}
const FramerTest = ({children}: FramerTestProps) => {
    return (
        <div>
            {children}
        </div>
    );
}


export default function Page() {
    return (
        <main>
            <FramerTest>
                FramerTest content
            </FramerTest>
        </main>
    )
}