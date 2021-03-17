import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-parties';

const PartyDetails = () => {
    const router = useRouter();
    const foundEvent = getEventById(router.query.id);
    return <div>
        {foundEvent.description}
    </div>;
}

export default PartyDetails;