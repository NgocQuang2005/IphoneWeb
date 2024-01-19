import './../../App.css'
type Sptoanbo ={
    link: string;
    name: string;
}
const ToanboSp = ({link, name} : Sptoanbo) => {
  return (
    <a href={link} className='logo-cate cate-christmas'>
        <h2>{name}</h2>
    </a>
  )
}

export default ToanboSp