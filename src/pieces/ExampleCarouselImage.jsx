// eslint-disable-next-line react/prop-types
function ExampleCarouselImage({src}) {
  return (
    <div>
      {/* Aqui você pode adicionar a imagem do slide */}
      <img
        src={src}// Substitua esta URL pela URL da imagem real
        alt='carousel'
        style={{ width: "100%", height: "600px",   }}
      />

      {/* Aqui é onde o texto do slide será exibido */}
     
    </div>
  );
}

export default ExampleCarouselImage;
