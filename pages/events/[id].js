import { useRouter } from 'next/router';

const PartyDetails = () => {
    const router = useRouter();
    
    return <div>
        <p>{`Party Details: ${router.query.id}`}</p>
    </div>;
}

export default PartyDetails;