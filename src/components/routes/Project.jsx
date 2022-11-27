import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Article from '../pedidos/Article'
import Searcher from '../pedidos/Searcher'



const Project = () => {

    const [pedidos, setPedidos] = useState([])
    const [phoneSearch, setPhoneSearch] = useState()




    useEffect(() => {
        // const urlPedidos = `http://localhost:9000/api/v1/orders/${phoneSearch}`
        const urlPedidos = `https://neonquitoorders-crud-api-production.up.railway.app/api/v1/orders/${phoneSearch}`
        console.log(urlPedidos)
        axios.get(urlPedidos)
            .then(res => {
                setPedidos(res.data)
                console.log('pedidos: ', res.data)
            })
            .catch(err => console.log(err.response))
    }, [phoneSearch])



    console.log(pedidos)

    return (

        <section className='project'>

            <div className="searcherheader">

                <Searcher
                    setPhoneSearch={setPhoneSearch}
                />
                <h1>PEDIDOS</h1>
            </div>

            <div className="articlesContainer">

                {
                    pedidos?.map(pedido => (
                        <Article
                            key={pedido.id}
                            pedidoInfo={pedido}
                        />
                    ))
                }
            </div>


        </section>
    )
}

export default Project