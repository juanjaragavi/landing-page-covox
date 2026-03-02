"use client"

import { FadeContainer, FadeDiv } from "../Fade"

const videos = [
  {
    id: "3mLaPmETf2o",
    title: "COVOX AI — Demo Multicanal",
  },
  {
    id: "b7JxthJTlXc",
    title: "COVOX AI — Testimonial 1",
  },
  {
    id: "QUHcKQ0E0ec",
    title: "COVOX AI — Testimonial 2",
  },
]

export function TestimonialesVideos() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 xl:px-0">
      <FadeContainer>
        <FadeDiv>
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tighter text-[#77FF00] md:text-4xl">
            Testimoniales
          </h2>
        </FadeDiv>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <FadeDiv key={video.id}>
              <div className="overflow-hidden rounded-xl shadow-lg shadow-[#77FF00]/10">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-xl border border-[#77FF00]/30"
                  />
                </div>
              </div>
            </FadeDiv>
          ))}
        </div>
      </FadeContainer>
    </div>
  )
}
