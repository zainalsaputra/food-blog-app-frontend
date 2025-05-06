import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const navigate = useNavigate()

    const onHandleChange = (e) => {
        let val
        if (e.target.name === "ingredients") {
            val = e.target.value.split(",")
        } else if (e.target.name === "coverImage") {
            val = e.target.files[0]
        } else {
            val = e.target.value
        }

        setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorMsg("")

        const formData = new FormData()
        formData.append("title", recipeData.title)
        formData.append("ingredients", JSON.stringify(recipeData.ingredients))
        formData.append("instructions", recipeData.instructions)
        formData.append("cookingTime", recipeData.cookingTime)
        formData.append("coverImage", recipeData.coverImage)

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/recipes`, formData, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem("accessToken")
                }
            })
            navigate("/")
        } catch (err) {
            const msg = err.response?.data?.message || "Gagal menambahkan resep. Silakan coba lagi."
            setErrorMsg(msg)
            console.error("Error saat mengirim data:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={onHandleSubmit}>
                <h2>Tambah Resep Makanan</h2>
                
                {errorMsg && <div style={{ color: 'red', marginBottom: '1rem' }}>{errorMsg}</div>}
                {isLoading && <div style={{ marginBottom: '1rem' }}>Mengirim data...</div>}

                <div className='form-control'>
                    <label>Title</label>
                    <input type="text" className='input' name="title" onChange={onHandleChange} />
                </div>
                <div className='form-control'>
                    <label>Ingredients (pisahkan dengan koma)</label>
                    <textarea className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>
                </div>
                <div className='form-control'>
                    <label>Instructions</label>
                    <textarea className='input-textarea' name="instructions" rows="5" onChange={onHandleChange}></textarea>
                </div>
                <div className='form-control'>
                    <label>Cooking Time (menit)</label>
                    <input type="number" className='input' name="cookingTime" onChange={onHandleChange} />
                </div>
                <div className='form-control'>
                    <label>Recipe Image</label>
                    <input type="file" className='input' name="coverImage" onChange={onHandleChange} accept="image/*" />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Menyimpan..." : "Add Recipe"}
                </button>
            </form>
        </div>
    )
}
