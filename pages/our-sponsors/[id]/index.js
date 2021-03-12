import { useRouter } from 'next/router';

const SponsorInfo = () => {
const router = useRouter();

return <div>
    <h1>{`Sponsor ${router.query.id}`}</h1>
</div>;
}
export default SponsorInfo;