import React from 'react'

const Article = (pedidoInfo) => {

    const infoPedido = pedidoInfo.pedidoInfo
    console.log(infoPedido)
    return (
        <div className="projects">
            <div className='pedidoContainer'>
                <span className='spanTitle'>{infoPedido.title}</span>
                <div className="articleBody">
                    <div className="descriptionBx">
                        <div className="detalle">
                            <h3 className='h3-project'>Descripción:</h3>
                            <span className='spanDato'>{infoPedido.description}</span>
                        </div>
                        <div className="detalle">
                            <h3 className='h3-project'>Ubicación:</h3>
                            <span className='spanDato'>{infoPedido.location}</span>
                        </div>


                        <div className="detalle">
                            <h3 className='h3-project'>Diseñado por:</h3>
                            <span className='spanDato'>{infoPedido.designer}</span>
                        </div>
                        <div className="detalle">
                            <h3 className='h3-project'>Fabricado por:</h3>
                            <span className='spanDato'>{infoPedido.maker}</span>
                        </div>
                        <div className="detalle">
                            <h3 className='h3-project'>Fecha de entrega:</h3>
                            <span className='spanDato'>{infoPedido.finishdate}</span>
                        </div>

                    </div>

                    <aside className='asideArticle'>
                        <div className="">
                            <h4 className=''>Garantía:</h4>
                            <span href="pdf garantía" target="_blank" className="asideItemBx">
                                <i className='bx bx-file asideicon'></i>
                                {/* <span className='asideSpan'>Ver <i className='bx bx-right-top-arrow-circle icon-text'></i></span> */}
                                <span className=''>12 meses</span>

                            </span>
                        </div>
                        <div className="">
                            <h4 className=''>Foto:</h4>
                            <a href={infoPedido.imageurl} target="_blank" className="asideItemBx">
                                <i className='bx bx-image asideicon'></i>
                                <span className='asideSpan'>Ver <i className='bx bx-right-top-arrow-circle icon-text'></i></span>
                            </a>
                        </div>
                    </aside>
                </div>
                <footer className="articleFooter">
                    <h6>Etapa:</h6>
                    <input className='progress' type="range" min={1} max={3} value={infoPedido.process} defaultValue={1} readOnly={true} />
                    <section className='footer-icons-container'>
                        <div className="article_footer-iconBx">
                            <img
                                className='article_footer-icon'
                                src={`./icon-design.${infoPedido.process == 1 ? 'gif' : 'png'}`}
                            />
                            <h6 className='h6'>Diseño</h6>
                        </div>

                        <div className="article_footer-iconBx">
                            <img
                                className='article_footer-icon'
                                src={`./icon-laser.${infoPedido.process == 2 ? 'gif' : 'png'}`}
                            />
                            <h6 className='h6'>Fabricación</h6>
                        </div>

                        <div className="article_footer-iconBx">
                            <img
                                className='article_footer-icon'
                                src={`./icon-shipping.${infoPedido.process == 3 ? 'gif' : 'png'}`}
                            />
                            <h6 className='h6'>Entrega</h6>
                        </div>

                    </section>
                </footer>

            </div>
        </div>
    )
}

export default Article