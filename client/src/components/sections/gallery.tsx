export default function Gallery() {
  const galleryImages = [
    {
      src: "/attached_assets/0N4A6816.JPG",
      alt: "Aston Martin DB11 V12 - Krajina"
    },
    {
      src: "/attached_assets/0N4A6846.JPG", 
      alt: "Aston Martin - Detail loga"
    },
    {
      src: "/attached_assets/0N4A6849.JPG",
      alt: "Aston Martin - Detail křídel"
    },
    {
      src: "/attached_assets/0N4A6797.JPG",
      alt: "Aston Martin DB11 V12 - Detail"
    },
    {
      src: "/attached_assets/0N4A6841.JPG",
      alt: "Aston Martin - Interiér"
    },
    {
      src: "/attached_assets/IMG_3641.jpg",
      alt: "Ferrari 812 GTS - Boční pohled"
    },
    {
      src: "/attached_assets/IMG_3639.jpg",
      alt: "Ferrari 812 GTS - Zadní pohled"
    },
    {
      src: "/attached_assets/0N4A6959.JPG",
      alt: "Maserati - Detail ventilů"
    },
    {
      src: "/attached_assets/IMG_0197.PNG",
      alt: "Maserati Ghibli SQ4 - Krajina"
    },
    {
      src: "/attached_assets/0N4A6951.JPG",
      alt: "Maserati Ghibli SQ4 - Boční pohled"
    },
    {
      src: "/attached_assets/IMG_0206.JPG",
      alt: "Maserati Ghibli SQ4 - Dynamický pohled"
    },
    {
      src: "/attached_assets/IMG_0204.JPG",
      alt: "Maserati Ghibli SQ4 - V pohybu"
    },
    {
      src: "/attached_assets/IMG_4142.jpg",
      alt: "Mercedes AMG GTS - Speciální design"
    },
    {
      src: "/attached_assets/IMG_4141.jpg",
      alt: "Mercedes AMG GTS - Krajina"
    },
    {
      src: "/attached_assets/IMG_4144.jpg",
      alt: "Mercedes AMG GTS - Boční pohled"
    },
    {
      src: "/attached_assets/IMG_4147.jpg",
      alt: "Mercedes AMG GTS - Zadní pohled"
    },
    {
      src: "/attached_assets/IMG_4148.jpg",
      alt: "Mercedes AMG GTS - Detail V8"
    },
    {
      src: "/attached_assets/IMG_4151.jpg",
      alt: "Mercedes AMG GTS - Zadní světla"
    },
    {
      src: "/attached_assets/IMG_4161.jpg",
      alt: "Mercedes AMG GTS - Luxusní interiér"
    },
    {
      src: "/attached_assets/IMG_3645.jpg",
      alt: "Ferrari 812 GTS - Interiér"
    },
    {
      src: "/attached_assets/IMG_3646.jpg",
      alt: "Ferrari 812 GTS - Interiér detail"
    },
    {
      src: "/attached_assets/IMG_5556.jpg",
      alt: "Ferrari 812 GTS - Elegantní pohled"
    },
    {
      src: "/attached_assets/IMG_5469.jpg",
      alt: "Ferrari 812 GTS - Městské prostředí"
    },
    {
      src: "/attached_assets/IMG_9060.PNG",
      alt: "Aston Martin DB11 - Konfigurace"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Galerie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Objevte krásu našich luxusních vozidel prostřednictvím profesionálních fotografií
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 aspect-[4/3] hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}