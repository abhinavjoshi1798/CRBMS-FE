import React, { useState } from 'react'

const AddRoomUi = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [floor, setFloor] = useState("");
  const [description, setDescription] = useState("");
  const [seater, setSeater] = useState("");
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleAddRoom = () => {
    let obj = {
      category,
      name,
      floor,
      description,
      seater,
      city,
      building
    }
    fetch(`http://localhost:8080/admin/room`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then((res) => res.json()).then(res => {
      console.log(res);
      setModalContent("Rooms added successfully!");
      setShowModal(true);
    }).catch(err => {
      console.log(err);
    })

  }

  const handleCloseModal = () => {
    setShowModal(false);
    setCategory("");
    setName("");
    setFloor("");
    setDescription("");
    setSeater("")
    setCity("")
    setBuilding("")


  };

  return (
    <div style={{
      width: "100%",
      margin: "auto",
      border: "1px solid gold",
      height: "100%",

    }}>
      <div style={{ textAlign: "left", width: "40%", margin: "100px auto" }}>
        <h3>Add Room</h3>
        <table>
          <tr>
            <td><label className="AddUserFromLabel" >Category</label></td>
            <td><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label className="AddUserFromLabel" >Name</label></td>
            <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label className="AddUserFromLabel" >Floor</label></td>
            <td><input type="number" value={floor} onChange={(e) => setFloor(e.target.value)} /></td>

          </tr>
          <tr>
            <td><label className="AddUserFromLabel" >Description</label></td>
            <td>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td><label className="AddUserFromLabel" >Seater</label></td>
            <td> <input type="number" value={seater} onChange={(e) => setSeater(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label className="AddUserFromLabel" >City</label></td>
            <td><input type="text" value={city} onChange={(e) => setCity(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label className="AddUserFromLabel" >Building</label></td>
            <td><input type="text" value={building} onChange={(e) => setBuilding(e.target.value)} /></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="button" class="btn btn-primary" onClick={handleAddRoom}>Add Room</button>
            </td>
          </tr>
        </table>

         
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!showModal}
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Room Added Successfully
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">{modalContent}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                
              </div>
            </div>
          </div>
        </div>







      </div>
    </div>
  )
}

export default AddRoomUi
