
import { useState, useEffect } from "react";

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
          alt="avatar"
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612*612&w=0&k20&c=I8EBJl6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                style={{ width: 12, height: 12 }}
                alt="clock"
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{description}</div>
    </div>
  );
}

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
}

function Notifications() {
  const [notificationCount, setNotificationCount] = useState(0);
  function increment() {
    setNotificationCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={increment}>Notifications</button>
      <div>{notificationCount}</div>
    </div>
  );
}

function ProfileCard() {
  return (
    <div
      style={{
        width: 200,
        backgroundColor: "white",
        borderRadius: 30,
        borderColor: "gray",
        borderWidth: 1,
        padding: 20,
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          style={{
            width: 50,
            height: 60,
            borderRadius: 20,
          }}
          alt="profile"
        />
      </div>
      <div style={{ fontSize: 20, textAlign: "center" }}>
        <b>Harkirat Singh</b>
      </div>
      <div style={{ fontSize: 15, textAlign: "center" }}>
        Working As A FreeLancer
      </div>
      <div style={{ fontSize: 10, textAlign: "center" }}>
        Profile Views: 10064
        <br />
        Profile Visits: 50000
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function addPost() {
    const dummyPosts = [
      {
        name: "Harkirat",
        subtitle: "10000 followers",
        time: "2min ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "Want to know how to win big? Check out how these folks won $6000 in bounties.",
      },
      {
        name: "Raman",
        subtitle: "Promoted",
        time: "10min ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed.",
      },
    ];

    const randomPost =
      dummyPosts[Math.floor(Math.random() * dummyPosts.length)];

    setPosts([...posts, randomPost]);
  }

  return (
    <div style={{ display: "flex", gap: 100, backgroundColor: "#dfe6e9", minHeight: "100vh", padding: 20 }}>
      <div>
      <h1>Counter: {count}</h1>
      <Greeting name="Kshitiz" />
      <ToggleMessage />
      <Notifications />
      <ProfileCard />
      </div>
      <div>
      <button onClick={addPost} style={{ marginTop: 20 }}>
        Add Post
      </button>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
      
        <div>
          {posts.map((post, index) => (
            <div key={index} style={{ marginBottom: 20 }}>
              <PostComponent {...post} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

