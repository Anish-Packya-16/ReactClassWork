import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User Info</h1>
     <form>
      <label>UserName:</label>
      <input type="text" placeholder="Enter your name" ></input>
      <br>
      </br>
      <br></br>
      <label>Email:</label>
      <input type="text" placeholder="Enter your email"></input>
      <br></br><br></br>
      <label>Password:</label>
      <input type="password" placeholder="Enter your password"></input>
      <br></br><br></br>
      <label >Gender:</label>
      <label><input type="radio" value="Male" ></input>Male</label>
      <label><input type="radio" value="Female" ></input>Female</label>
      <br></br><br></br>
      <label>Date of Birth:</label>
      <input type="date"></input>
      <br></br><br></br>
      <label>Age:</label>&nbsp;&nbsp;
      <input type="number"></input>
      <br></br><br></br>
      <label>Hobbies:</label>&nbsp;
      <input type="checkbox"></input>
      <label>Singing</label>
      <input type="checkbox"></input>
      <label>Dancing</label>
      <input type="checkbox"></input>
      <label>Reading</label>
      <br></br><br></br>
      <label>Address:</label>
      <input type="textarea" placeholder="Enter your address"></input>
      <br></br><br></br>
      <label>Country</label>
      <select>
        <option>India</option>
        <option>USA</option>
        <option>China</option>
        <option>Russia</option>
      </select>
      <br></br><br></br>
      <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
