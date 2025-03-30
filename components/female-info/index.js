import useSWR from 'swr';
import Loader from '../loader';

const fetcher = (url) => fetch(url).then((res) => res.json());

const MaleInfo = () => {
    const { data: residents, error } = useSWR('http://localhost:3110/get-female', fetcher, {
        refreshInterval: 300, // 3000s (50 minutes)
    });

    if (!residents) return <Loader />;

    if (error) return <div className='text-danger'>Error: {error.message || 'Failed to fetch data'}</div>;

    return (
        <div className='students-container'>
            <p className='info-name'>Female List</p>
            {residents.map((resident) => (
                <div key={resident.phone_number} className='students-info'>
                    <p className='rname'>{resident.name}</p>
                    <p>{resident.room_number}</p>
                    <p>{resident.gender}</p>
                </div>
            ))}
        </div>
    );
};

export default MaleInfo;
