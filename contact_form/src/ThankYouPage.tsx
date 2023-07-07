import { useParams } from 'react-router-dom'

export function ThankYouPage() {
    const {name} = useParams<{ name: string }>();
    
    return (
        <div>
            <div role="alert">
                Thanks {name}, we will be in touch shortly
            </div>
        </div>
    )
}