import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://678e9ad5a64c82aeb120e292.mockapi.io/justtayyabkhan/todos"
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from API</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id} <br />
              <strong>Name:</strong> {item.name} <br />
              <strong>Created At:</strong> {item.createdAt} <br />
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={`Avatar of ${item.name}`}
                  style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                />
              ) : (
                <p>No Avatar Available</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DataFetcher;
