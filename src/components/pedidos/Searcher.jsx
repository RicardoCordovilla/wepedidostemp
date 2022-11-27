import React from 'react'

const Searcher = ({setPhoneSearch}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const value=e.target.searchInput.value
        console.log(value)
        setPhoneSearch(value)
        // e.target.searchInput.value=''
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='searchBx'>
                <input id='searchInput' className='inputSearch' type="text" placeholder='Ingresar celular'/>
                <button type='submit' className='cta'>Buscar</button>
            </form>
        </div>
    )
}

export default Searcher