import React from 'react'

export default function TableInfo({data}) {
  return (
    <table className="table-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg my-8 p-11">
        <tbody>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Modèle:</td>
            <td className="py-2">{data.model}</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Transmission:</td>
            <td className="py-2">{data.gearbox}</td>
        </tr>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Carburant:</td>
            <td className="py-2">{data.idCarburant}</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2"></td>
            <td className="py-2">06</td>
        </tr>
        <tr className="bg-transparent">
            <td className="font-bold pr-2 py-2">Debut de production :</td>
            <td className="py-2">Vendu</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Seats:</td>
            <td className="py-2">{data.seats}</td>
        </tr>
        <tr className="bg-gray-50 bg-transparent">
            <td className="font-bold pr-2 py-2">Doors:</td>
            <td className="py-2">{data.doors}</td>
        </tr>
        </tbody>
    </table>


  )
}
