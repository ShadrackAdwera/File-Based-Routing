import { useRouter } from 'next/router';

const PartyDetails = () => {
    const router = useRouter();
    
    return <div>{`Party Details: ${router.query.id}`}</div>;
}

export default PartyDetails;