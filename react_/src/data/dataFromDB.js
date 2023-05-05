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
