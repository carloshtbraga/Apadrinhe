import '../styles/Carro.css'

function ExampleCarouselImage({src}) {
  return (
    <div>
      {/* Aqui você pode adicionar a imagem do slide */}
      <img
        src={src}// Substitua esta URL pela URL da imagem real
        alt='carousel'
        style={{ width: "100%", height: "600px",
        
        }}
        className="carro-img main-carro" 
      />

      {/* Aqui é onde o texto do slide será exibido */}
     
    </div>
  );
}

export default ExampleCarouselImage;
