import '../styles/Title.css'

export default function Title({title, img}) {
  return (
    <div className="titlec">
            <img src={img} alt="" width={'60px'}/>
          <h2 className='title'>
            {" "}
          {title}
         
             
          </h2>
              
        </div>

  )
}
