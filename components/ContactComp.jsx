export default function ContactComp() {
    return (
        <div className="flex flex-col h-screen items-center"
        style={{
            backgroundImage: `url(/background_artxacid.png)`
        }}>
            <p className="flex flex-row justify-center py-8 lg:pt-32 text-3xl text-white">CONTACT US</p>

                <form action="#" method="POST" className="grid md:grid-cols-4 lg:grid-cols-8 text-gray-300">                   

                    <div className="col-span-2 lg:col-start-3 md:col-span-4 p-4">
                        <input
                        placeholder="Name"
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="mt-1 p-4 block w-full rounded bg-zinc-700 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm"
                        />
                    </div>
                    
                    <div className="col-span-4 sm:col-span-2 lg:col-start-3 p-4">
                        <input
                        placeholder="Subject"
                            type="text"
                            name="subject"
                            id="subject"
                            autoComplete="subject"
                            className="mt-1 p-4 block w-full rounded bg-zinc-700 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm"
                        />
                    </div>

                    <div className="col-span-4 sm:col-span-2 p-4">
                        <input
                        placeholder="Email address"
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-1 p-4 block w-full rounded bg-zinc-700 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm"
                        />
                    </div>

                    <div className="col-span-4 lg:col-start-3 p-4">
                      <textarea
                        placeholder="Message"
                        id="Message"
                        name="Message"
                        rows="8"
                        className="mt-1 p-4 w-full rounded bg-zinc-700 shadow-sm focus:border-yellow-300 focus:ring-yellow-300 sm:text-sm"
                      />
                    </div>

                    
                </form>

        </div>
    )
}