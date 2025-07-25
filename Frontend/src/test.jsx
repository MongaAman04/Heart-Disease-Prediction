import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css';

function TestApp() {
  const [profileData, setProfileData] = useState(null)

//   useEffect(()=>{
//    fetch('/profile').then(res =>{
//      console.log(res);
//    }).then(data =>{
//     console.log(data);
    
//    })
// },[])
  function getData() {
    axios.get('http://localhost:5000/profile').then((response) => {
        console.log(response.data);
        const res = response.data;

        setProfileData({
          profile_name: res.name,
          about_me: res.about
        });
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        
                }
      });
  }
    console.log(profileData);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default TestApp;