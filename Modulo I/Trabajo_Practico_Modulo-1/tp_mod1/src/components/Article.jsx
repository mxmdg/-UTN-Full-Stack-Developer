import Content from './Content'

const Article = ()=> {
   return (<article>
        <h1>{Content.Titulo}</h1>
        <p>{Content.Info}</p>
        <p>{Content.Detalle}</p>
   </article>)
}

export default Article