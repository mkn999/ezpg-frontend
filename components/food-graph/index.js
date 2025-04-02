import { useState, useEffect } from 'react';
import Loader from '../loader';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export default function FoodGraph() {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch("http://localhost:3110/food-graph", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const result = await response.json();
        if (result.success) {
          // Transform data for Recharts format
          const chartData = result.data.map(item => ({
            name: item.day,
            value: item.food_count
          }));
          setFoodData(chartData);
        } else {
          throw new Error(result.message || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  if (loading) return <div><Loader /></div>;
  if (error) return <div>Error: {error}</div>;
  console.log(foodData);
  
  return (
    <div className="food-graph">
      {/* <h2>Food Consumption trend</h2> */}
      <div style={{ width: 500, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={foodData}
             margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
             }}
          >
        <CartesianGrid/>
            
            <XAxis 
             dataKey="name" 
             tickFormatter={(value) => value.substring(0, 3)} 
             tick={{ fontSize: 14, fill: "#333" }} 
             axisLine={{ stroke: "#000000" }} // Change axis line color
             tickLine={{ stroke: "#000000" }} // Customize tick lines
            />
            <YAxis 
              label={{ value: 'Food Count', angle: -90, position: 'insideLeft' }} 
              axisLine={{ stroke: "#000000" }} // Change axis line color
              tickLine={{ stroke: "#000000" }} // Customize tick lines
            />
            <Tooltip 
              formatter={(value) => [`${value} units`, 'Food Count']}
              labelFormatter={(day) => `Day: ${day}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4F378A"
              strokeWidth={2}
              activeDot={{ r: 7 }}
              name="Food Consumption"
              animationDuration={2000} // Animation speed (in milliseconds)
              animationEasing="ease-in-out" // Smooth transition effect
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}