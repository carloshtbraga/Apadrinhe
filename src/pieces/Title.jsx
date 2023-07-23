import '../styles/Title.css'

export default function Title({title, img}) {
  return (
    <div className="titlec">
            <img src={img} alt="" width={'80px'}/>
          <h1 className='title'>
            {" "}
          {title}
         
             
          </h1>
              
        </div>

  )
}
