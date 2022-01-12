import axios from "axios";

export const getContacts = () => async dispatch => {
    try {
        const { data } = await axios.get("https://randomuser.me/api/?results=20&seed=41768d5e17252a34");

        dispatch({ type: "GET_CONTACTS", payload: data.results })
    } catch (error) {
        console.log(error.message);
    }
}

export const getContact = (id) => ({
    type: "GET_CONTACT",
    payload: id,
})