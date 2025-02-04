import { useEffect, useState } from "react";
import axios from "axios";

function useData() {  // CUSTOM HOOK //
  const [data, setData] = useState([]);
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
      }
    };

    fetchData();
  }, []);

  return data;
}

function App() {
  const data = useData();

  return (
    <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map((item) => (
            <UserCard
              key={item.id}
              name={item.name}
              id={item.id}
              createdAt={item.createdAt}
            />
          ))}
        </div>
  
    </div>
  );
}

function UserCard({ name, id, createdAt }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p>{name}</p>
      <p>{id}</p>
      <p>{createdAt}</p>
    </div>
  );
}

export default App;
