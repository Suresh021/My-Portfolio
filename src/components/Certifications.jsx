import { X } from "lucide-react";
import { useState } from "react";
import { certifications } from "../data/certificationsData";

export default function Certifications() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="certifications" className="py-20">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-4xl font-black mb-12 text-center">
                    <span>Certifications</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(cert.image)}
                            className="cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700 shadow-sm 
              hover:shadow-lg hover:-translate-y-1 transition"
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-40 object-cover transition duration-500 hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center 
                opacity-0 hover:opacity-100 bg-black/40 transition">
                                    <span className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium">
                                        View
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                                    {cert.title}
                                </h3>

                                <p className="text-sm text-primary mt-1">
                                    {cert.provider}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* ================= MODAL ================= */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >

                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={30} />
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt="Certificate"
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>
            )}

        </section>
    );
}