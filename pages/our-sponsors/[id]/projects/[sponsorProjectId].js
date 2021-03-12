import { useRouter } from 'next/router';

const SponsorProjectDetail = () => {
    const router = useRouter();
    return <div>
        <h1>{`Sponsor ID: ${router.query.id} Project ID: ${router.query.sponsorProjectId}`}</h1>
    </div>;
}

export default SponsorProjectDetail;