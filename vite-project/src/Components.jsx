
function Components() {

    return (
        <div>
            <PostComponent />
        </div>
    )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex"}

function PostComponent() {
    return <div style={style}>
        <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
            width: 20,
            height: 20,
            borderRadius: 20
        }} />
        <div>
            <b>
                100xdevs
            </b>
        <div>23,888 followers</div>
        <div>12M</div>
        </div>
        <div>
            Want to know how to win big? Check out how these folks won $5000 in bounties.
        </div>
    </div>
}

export default Components