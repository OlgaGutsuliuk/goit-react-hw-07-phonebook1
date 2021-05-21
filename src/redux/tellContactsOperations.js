import axios from "axios";
import { addContacts, deleteContacts, getAllContacts, setContactsLoading, setError } from "./tellContactsAction";

const addContactsOperation = contact => async dispatch => {
  dispatch(setContactsLoading());
  try {
    const { data } = await axios.post(`https://tel-contacts-default-rtdb.firebaseio.com/tellContacts.json`, contact);
    dispatch(addContacts({ ...contact, id: data.name }));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactsLoading());
  }
};

const deleteContactsOperation = id => async dispatch => {
  dispatch(setContactsLoading());
  try {
    await axios.delete(`https://tel-contacts-default-rtdb.firebaseio.com/tellContacts/${id}.json`);
    dispatch(deleteContacts(id));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactsLoading());
  }
};

const getAllClientsOperation = () => async dispatch => {
  dispatch(setContactsLoading());
  try {
    const { data } = await axios.get(`https://tel-contacts-default-rtdb.firebaseio.com/tellContacts.json`);
    if (data) {
      const contacts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      dispatch(getAllContacts(contacts));
    }
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactsLoading());
  }
};

export { addContactsOperation, deleteContactsOperation, getAllClientsOperation };
