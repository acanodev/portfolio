import './Card.css';

type CardProps = {
    children: React.ReactNode
}

export default function Card({ children } : CardProps) {
    return (
        <>
            <div className='card'>
                <div className='card-body text-info'>
                    {children}
                </div>
            </div>
        </>
    )
}