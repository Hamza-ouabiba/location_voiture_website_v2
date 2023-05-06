import axios from "axios"
export default class APISerive {


    static InsertReservation(body, token) {
        console.log(body)
        return fetch(`http://localhost:8000/django_app/Reservation/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteReservation(reservation_id,token) {
        return axios.delete(`http://localhost:8000/django_app/Reservation/${reservation_id}/`,{
            headers: {
                'Authorization': `Token ${token}`
            },
          })
    }

    static LoginUser(body) {
        return fetch(`http://localhost:8000/django_app/Utilisateur/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }



    static RegisterUser(body) {
        return fetch(`http://localhost:8000/django_app/Utilisateur/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }


}