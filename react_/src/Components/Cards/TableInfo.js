import React from 'react'

export default function TableInfo() {
  return (
    <div className="flex justify-center">
    <table className="table-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg my-8">
        <tbody>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Modèle:</td>
            <td className="py-2">C4</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Transmission:</td>
            <td className="py-2">Manuelle</td>
        </tr>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Condition:</td>
            <td className="py-2">Occasion</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Kilométrage:</td>
            <td className="py-2">220.191 Km</td>
        </tr>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Carburant:</td>
            <td className="py-2">Diesel</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Puissance fiscale:</td>
            <td className="py-2">06</td>
        </tr>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Offer Type:</td>
            <td className="py-2">Vendu</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Adresse:</td>
            <td className="py-2">Casablanca 98 Bd Moulay Slimane 20250</td>
        </tr>
        </tbody>
    </table>
    </div>


  )
}
