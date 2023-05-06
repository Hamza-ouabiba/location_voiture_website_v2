import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [url]);

    return data;
}

export function Cars() {
    return useFetch('http://localhost:8000/django_app/Voiture/');
}

export function Brands() {
    return useFetch('http://localhost:8000/django_app/Marque/');
}

export function FuelTypes() {
    return useFetch('http://localhost:8000/django_app/Carburant/');
}

export function GearBoxs() {
    return useFetch('http://localhost:8000/django_app/Transmission/');
}

export function Users() {
    return useFetch('http://localhost:8000/django_app/Utilisateur/');
}

export function Clients() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/django_app/Client/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, [])
    console.log("getting data")
    return data;
}

export function Reservations() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/django_app/Reservation/`)
            .then((res) => setData(res.data))
    }, [])
    return data;
}