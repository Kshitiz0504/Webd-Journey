
function App() {

  return (
      <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
         <PostComponent />
         <PostComponentDescription />
         <ProfileCard />
          </div>
      </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex"}

function PostComponent() {
  return <div style={style}>
    <div style={{display: "grid", justifyContent: "center"}}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
          width: 20,
          height: 20,
          borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
          <b>
              100xdevs
          </b>
      <div>23,888 followers</div>
      <div>12M</div>
      </div>
      </div>
      <div style={{fontSize: 12}}>
          Want to know how to win big? Check out how these folks won $5000 in bounties.
      </div>
  </div>
}

function PostComponentDescription({name, followerCount, time, image, description}) {
  return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{followerCount} followers</div>
        <div style={{display: "flex"}}>
          <div>{time}</div>
          <img src={"https://www.dreamstime.com/illustration/wall-clock.html"} style={{width: 12, height: 12}} />
          </div>
          </div>
      </div>
    <div style={{fontSize: 12}}>
      {description}
  </div>
  </div>
}

function ProfileCard() {
  return <div style={{color: "black", width:500, height:50, border: "black", padding: 5}}>
    <div style={{margin: 100, display: "grid", justifyContent: "left"}}>
      <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
          width: 50,
          height: 50,
          borderRadius: 20
      }} />
      <div style={{fontSize: 20}}>
        <b>
          Harkirat Singh
        </b>
      </div>
      <div style={{fontSize: 15}}>
        <b>
          Working As A Freelancer
        </b>
      </div>
      <div style={{fontSize: 12}}>
        Profile Visits: 2304 <br></br>
        Post Impressions: 145
      </div>
    </div>

  </div>
}


export default App
