import useSWR from 'swr';
import './style.css';
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function AdminDashboard(){
    const { data, error } = useSWR("http://localhost:3110/admin-dashboard", fetcher);
    
    if (error) return <p>Error fetching count</p>;
    if (!data) return <p>Loading...</p>;


    return(
        <div className='mai-cont'>
            <div className="user-count">
            <p className="tol">Total Users</p>
            <p className='title-data'>{data.total}</p>
            </div>

            <div className="user-count">
            <p className="tol">Male Users</p>
            <p className='title-data'>{data.male}</p>
            </div>

            <div className="user-count">
            <p className="tol">Female Users</p>
            <p  className='title-data'>{data.female}</p>
            </div>   
        </div>
    );
}