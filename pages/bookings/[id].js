import { useRouter } from 'next/router';

const BookingDetails = () => {
    const router = useRouter();

    return <div>
        <h1>{`Booking Details for item with ID: ${router.query.id}`}</h1>
    </div>;
    }
    export default BookingDetails;