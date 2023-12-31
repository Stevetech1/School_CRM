import Header from '../../components/Header'
import HeaderImage from '../../images/Gal19.jpg'
import './gallery.css'

const Gallery = () => {
  const galLength = 15;
  const images = []

  for(let i = 1; i <= galLength; i++) {
    images.push(require(`../../images/Gal${i}.jpg`))
  }

  console.log(images);


  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestiae illo nihil vitae at 
      tempora dolorum, ducimus distinctio minus commodi atque, excepturi mollitia error ea!
    </Header>
    <section className='gallery'>
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery