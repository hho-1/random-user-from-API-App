import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import womanSvg from "./assets/woman.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";
import ContactList from "./components/ContactList";

const url = "https://randomuser.me/api/";

function App() {

  const [picture, setPicture] = useState("")
  const [nameSurname, setNameSurname] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [street, setStreet] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  
  useEffect(() => {
    handleNewUser()
  }, [])

  const handleNewUser = () => axios.get(url).then((veri) => {

    setPicture(veri.data.results[0].picture.large)
    setNameSurname(veri.data.results[0].name.first + " " + veri.data.results[0].name.last)
    setEmail(veri.data.results[0].email)
    setAge(veri.data.results[0].dob.age)
    setStreet(veri.data.results[0].location.street.name)
    setPhone(veri.data.results[0].phone)
    setPassword(veri.data.results[0].login.password)
  })


  const [isShown, setIsShown] = useState(null)

  const handleMouseEnter = (e) => {
    switch (e.target.id) {
      case "nameButton":
        setIsShown(1)
          break
      case "emailButton":
        setIsShown(2)
          break
      case "ageButton":
        setIsShown(3)
          break
      case "streetButton":
        setIsShown(4)
          break
      case "phoneButton":
        setIsShown(5)
          break
      case "passwordButton":
        setIsShown(6)
          break
      default: setIsShown(1)
  }
    
  }

  const [people, setPeople] = useState([])

  const createContact = () => {
        const createdContacts = [
            ...people, {
                id: Math.round(Math.random() * 999999999),
                name: nameSurname,
                email: email,
                phone: phone,
                age: age
            }
        ];
        setPeople(createdContacts)
  }

  
 

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={picture} alt="random user" className="user-img" />
          
          <p className="user-title">My {isShown === 1 ? "name" : (isShown === 2 ? "email" : (isShown === 3 ? "age" : (isShown === 4 ? "street" : (isShown === 5 ? "phone" : (isShown === 6 ? "password" : "name")))))} is</p>
          <p className="user-value">{isShown === 1 ? nameSurname : (isShown === 2 ? email : (isShown === 3 ? age : (isShown === 4 ? street : (isShown === 5 ? phone : (isShown === 6 ? password : nameSurname)))))}</p>
           
          <div className="values-list">
            <button id="nameButton" className="icon" data-label="name" onMouseEnter={handleMouseEnter}>
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button id="emailButton" className="icon" data-label="email" onMouseEnter={handleMouseEnter}>
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button id="ageButton" className="icon" data-label="age" onMouseEnter={handleMouseEnter}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button id="streetButton" className="icon" data-label="street" onMouseEnter={handleMouseEnter}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button id="phoneButton" className="icon" data-label="phone" onMouseEnter={handleMouseEnter}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button id="passwordButton" className="icon" data-label="password" onMouseEnter={handleMouseEnter}>
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={handleNewUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={createContact}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              
              <ContactList people={people}/>
              
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
