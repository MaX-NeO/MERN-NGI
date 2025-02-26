import axios from 'axios'

const ServerURL = 'http://localhost:3000/contacts'


const getContacts = () => axios.get(`${ServerURL}/all`)
const addContact = (contact) => axios.post(`${ServerURL}/add`, contact)
const editContact = (id, contact) => axios.put(`${ServerURL}/edit/${id}`, contact)
const deleteContact = (id) => axios.delete(`${ServerURL}/edit/${id}`)

export { getContacts, addContact, editContact, deleteContact }
