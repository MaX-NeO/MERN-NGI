import React, { useEffect, useRef, useState } from 'react'
import { addContact, getContacts } from '../api/api'

const Home = () => {
  const [contacts, setContacts] = useState([])
  const nameRef = useRef('')
  const phoneRef = useRef(0)
  const fetchContacts = async () => {
    try {
      const response = await getContacts()
      setContacts(response.data)
      console.log(contacts)
    } catch (error) {
      console.log(error)
    }
  }
  const addContacts = async (e) => {
    e.preventDefault()
    try {
      const newcontact = {
        name: nameRef.current.value,
        phone: phoneRef.current.vale
      }
      const response = await addContact(newcontact)
      console.log(response.status)
      if (response.status === 200) {
        fetchContacts()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])
  return (
    <div>
      <div className="container">
        <div className="contact-container">
          <form action="" className="contact-form" onSubmit={addContacts}>
            <input type="text" placeholder='Name' className='contact-input' ref={nameRef} />
            <input type="number" placeholder='Phone' className='contact-input' ref={phoneRef} />
            <input type="submit" value="Add" className='contact-btn' />
          </form>
          <div className="contact-display">

            {contacts.length > 0 ? (
              <>
                <table className="contact-table" border={1}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id}>
                        <td>
                          {contact.name}
                        </td>
                        <td>
                          {contact.phone}
                        </td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <div className="empty">
                  No contacts Available
                </div>
              </>
            )
            }

          </div>
        </div>
      </div>


    </div>
  )
}

export default Home