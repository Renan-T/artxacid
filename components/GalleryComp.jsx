export default function GalleryComp() {
    return (
        <div className="flex flex-col items-center pb-40 h-full"
            style={{
                backgroundImage: `url(/background_artxacid.png)`
            }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 px-5 py-10 lg:pt-20 lg:px-32">
            <div>
                <img src="/gallery/img09.jpeg" alt="gallery" className="w-full h-full rounded-lg" />
            </div>
            <div>
                <img src="/gallery/img15.jpeg" alt="gallery" className="w-full h-full rounded-lg" />
            </div>
            <div>
                <img src="/gallery/img21.jpeg" alt="gallery" className="w-full h-full rounded-lg" />
            </div>
            <div>
                <img src="/gallery/img22.jpeg" alt="gallery" className="w-full h-full rounded-lg" />
            </div>
            <div>
                <img src="/gallery/img25.jpeg" alt="gallery" className="w-full h-full rounded-lg" />
            </div>
            <div>
                <img src="/gallery/img04.jpeg" alt="gallery" className="w-full h-full rounded-lg" />
            </div>
        </div>
            
        </div>
    )
}