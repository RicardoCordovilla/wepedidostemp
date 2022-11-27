import React from 'react'

const Searcher = ({ setPhoneSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.searchInput.value
        console.log(value)
        setPhoneSearch(value)
        // e.target.searchInput.value=''
    }

    return (
            <div className="searchContainer">
                <span>Ingresa el número celular con el que estás realizando el pedido</span>
                <form onSubmit={handleSubmit} className='searchBx'>
                    <input id='searchInput' className='inputSearch' type="text" placeholder='Ingresa tu celular' />
                    <button type='submit' className='cta'>Buscar</button>
                </form>
            </div>
    )
}

export default Searcher