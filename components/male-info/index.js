import './style.css';
import { useEffect, useState } from 'react';

const MaleInfo = () => {
    const [residents, setResidents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResidents = async () => {
            try {
                const response = await fetch('http://192.168.1.52:3110/get-male', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                console.log(data); // Log the data to inspect the structure

                if (response.ok) {
                    setResidents(data); // Update this line based on the actual response
                } else {
                    setError(data.error || 'Failed to fetch data');
                }
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchResidents();
    }, []);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <div className='students-container'>
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
