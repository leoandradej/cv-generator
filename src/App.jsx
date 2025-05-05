import { useEffect, useState } from 'react';
import './index.css'
import CV from './components/CV';
import Sidebar from './components/Sidebar';
import demoData from './demo-data.json';

function App() {

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("cv-data")
    return storedData ? JSON.parse(storedData) : demoData
  })

  useEffect(() => {
    localStorage.setItem("cv-data", JSON.stringify(data))
  }, [data])

  const handleEdit = (formId, updatedItem) => {
    setData((currentData) => {
      const updatedArray = currentData[formId].map((item) =>
        item?.id === updatedItem.id ? updatedItem : item
      );
  
      return {
        ...currentData,
        [formId]: updatedArray,
      };
    });
  };  

  const handleDelete = (formId, newData) => {
    setData(currentData => {
      return {
        ...currentData,
        [formId]: newData
      }
    })
  }

  const handleSubmit = ({ formId, newData }) => {
    if (formId === 'personal' || formId === 'skills') {
      setData(currentData => ({
        ...currentData,
        [formId]: newData
      }))
    } else {
      setData(currentData => ({
        ...currentData,
        [formId]: [
          ...currentData[formId], 
          { id: crypto.randomUUID(), ...newData }
        ]
      }))
    }  
  }

  return (
    <>
      <Sidebar
        onSubmit={handleSubmit}
        personalData={data.personal}
        educationData={data.education}
        workData={data.work}
        skillsData={data.skills}
        achievementsData={data.achievements}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <CV
        personalData={data.personal}
        educationData={data.education}
        workData={data.work}
        skillsData={data.skills}
        achievementsData={data.achievements}
      />
    </>
  )
}

export default App