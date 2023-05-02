export default function Homevideo(){
    return(
        <div className="flex justify-center mt-20">
            <iframe
            src='https://www.youtube.com/embed/p6zvYaLF7Ks'
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className='iframe'
            />
    </div>
  )
}