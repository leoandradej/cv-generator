import { useEffect, useState } from 'react';
import './index.css'
import './reset.css'
import CV from './components/CV';
import Sidebar from './components/Sidebar';

function App() {

  const [data, setData] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) {
      return {
        personal: {},
        education: [],
        work: [],
        skills: [],
        achievements: []
      }
    }
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(data))
  }, [data])

  const handleEditPersonal = (formId) => {
    setData(currentData => {
      return {
        ...currentData,
        [formId]: currentData[formId]
      }
    })
  }

  const handleEditSkills = (formId, newData) => {
    setData(currentData => {
      return {
        ...currentData,
        [formId]: [newData]
      }
    })
  }

  const handleEdit = (formId) => {
    setData(currentData => {
      return {
        ...currentData,
        [formId]: [...currentData[formId]]
      }
    })
  }

  const handleDelete = (formId, newData) => {
    setData(currentData => {
      return {
        ...currentData,
        [formId]: newData
      }
    })
  }

  const handleSubmit = form => {
    const formData = new FormData(form)
    const newData = Object.fromEntries(formData)

    if (form.id === 'personal') {
      setData(currentData => {
        return {
          ...currentData,
          [form.id]: newData
        }
      })
    } else if (form.id === 'skills') {
      const formattedValue = newData.skills.split(', ')
      setData(currentData => {
        return {
          ...currentData,
          [form.id]: formattedValue
        }
      })
    } else {
      setData(currentData => {
        return {
          ...currentData,
          [form.id]: [...currentData[form.id], { id: crypto.randomUUID(), ...newData }]
        }
      })
    }  
  }

  return (
    <>
      <Sidebar onSubmit={handleSubmit} handleSubmitSkills={handleSubmit} personalData={data.personal} educationData={data.education} workData={data.work} skillsData={data.skills} achievementsData={data.achievements} handleEditPersonal={handleEditPersonal} handleEditSkills={handleEditSkills} handleEdit={handleEdit} handleDelete={handleDelete} />
      <CV personalData={data.personal} educationData={data.education} workData={data.work} skillsData={data.skills} achievementsData={data.achievements} />
    </>
  )
}

export default App