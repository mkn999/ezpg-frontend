import useSWR from 'swr';
import Loader from '../loader';

const fetcher = (url) => fetch(url).then((res) => res.json());

const FoodFetch = () => {
    const { data, error } = useSWR('http://localhost:3110/food-fetch', fetcher, {
        refreshInterval: 300, 
    });

    if (error) return <div className="text-danger">Error: {error.message || 'Failed to fetch data'}</div>;
    if (!data) return <Loader />;

    const residents = Array.isArray(data) ? data : []; // ✅ Ensure data is an array
    return (
        <div className='students-container'>
            <p className='info-name'>Food Log List</p>
            {residents.map((resident) => (
                <div key={resident.username} className='students-info'>
                    <p>{resident.name}</p>
                    <p>{new Date(resident.taken_at).toLocaleTimeString()} {new Date(resident.taken_at).toLocaleDateString('en-GB')}</p>
                    <p>{resident.username}</p>

                </div>
            ))}
        </div>
    );
};

export default FoodFetch;
