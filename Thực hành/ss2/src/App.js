import logo from './logo.svg';
import './App.css';
import React from ".";

function App() {
  const id = "C0324H1"

  const students = [
    {
      id: 1,
      name: "HaiTT",
      address: "Quảng Nam",
      point: 3
    },
    {
      id: 2,
      name: "HaiTT",
      address: "Quảng Nam",
      point: 7
    },
    {
      id: 3,
      name: "HaiTT",
      address: "Quảng Nam",
      point: 9
    }
  ]

  const helloWorld = (name) => {
    alert(`Hello ${name}!`)
  }

  return (
      <>
        <h1 id= {id} className = "c0324h1" onclick={() => helloWorld("HaiTT")}></h1>
        <table>
          <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Address</th>
            <th>Point</th>
            <th>Academic performance</th>
          </tr>
          </thead>
          <tbody>
          {
            students.map((item, index) =>
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.point}</td>
                  <td>{getGrade(item.point)}</td>
                </tr>
            )
          }
          </tbody>
        </table>
      </>
  )
}

function getGrade(point) {
  if (point >= 8) {
    return 'Giỏi';
  } else if (point >= 6.5) {
    return 'Khá';
  } else if (point >= 5) {
    return 'Trung bình';
  } else if (point >= 3.5) {
    return 'Yếu';
  } else {
    return 'Kém';
  }
}

export default App;
