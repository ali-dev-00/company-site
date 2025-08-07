import Image from "next/image"
import { Facebook, Twitter, Linkedin } from 'lucide-react'


export default function CareerStoryDetailSection() {
  return (
    <section className="py-12  bg-white">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="relative pb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">GC Career Story: Jodie Richardson</h1>
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-v0-red rounded-full" />
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Tuesday, July 15, 2025 <span className="mx-1">|</span> Posted By The Growth Company
          </p>
        </div>

        {/* Main Content */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed">
          {/* Image floated right on desktop, full width on mobile */}
          <div className="md:float-right md:ml-8 md:mb-8 w-full md:w-1/2 lg:w-2/5 relative h-64 md:h-auto aspect-video md:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <Image
              src="/images/career-story-detail.png"
              alt="Two people discussing work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Early career and motivation</h3>
          <p className="mb-4">
            I studied Law initially at university, before going on to study Creative Writing. Following university, I
            worked in bars and in retail roles, eventually becoming Assistant Manager and then Store Manager for
            Barnardo&apos;s. I found working for a charity extremely rewarding but I needed to move on for career progression
            and financial reasons, and so became Store Manager for Toolstation – setting up a brand-new store in
            Bredbury.
          </p>
          <p className="mb-4">
            I missed elements of working in the charity shop – working with and creating a team of volunteers, who were
            often people with disabilities, or people who were anxious to return to the workplace. I missed the
            satisfaction and reward that came from working with and helping people in this way, and that&apos;s what led me
            to apply for a role at GC.
          </p>
          <p className="mb-6">
            I started as an Employment Advisor on the Restart programme in Walkden. Even though I was starting in a new
            industry, my aim was always to progress, so I made that clear from the start. I went for a Lead position
            quite early on for someone new into the industry and although I didn&apos;t get the role, it made my manager
            realise that I was serious, and from then on she gave me the opportunities to get to the point where I would
            be ready. I took on extra responsibilities to prove that I could do the job, and also completed a level 3
            apprenticeship in Leadership and Management.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Support during diagnosis</h3>
          <p className="mb-4">
            The process of diagnosis was not very straightforward. I had my telephone assessment and was told that
            should have been within 12-18 months. After hearing nothing at the 18-month mark, I got in touch only to
            find out that they were no longer accepting NHS patients.
          </p>
          <p className="mb-6">
            I was obviously very upset, and I spoke to my manager about it. I had to go through the different stages and
            attend the assessments again, but the time was given to me to do this around work. Both of my managers at
            the time checked in with me constantly to see how things were going and how I was feeling. From the get-go,
            they were just so supportive and so encouraging. In my current role, I don&apos;t speak to them as much, but I
            still have very good relationships with them both, and I feel very grateful to them for supporting me with
            it.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Creating an inclusive culture at GC</h3>
          <p className="mb-4">
            I try to be as open as I possibly can about being autistic or any mental health struggles that I might be
            having on a day-to-day basis, and I think that helps my team to feel like they are able to express
            themselves in this way as well. We see lots of neurodiverse clients, and my hope is that if we&apos;ve got an
            open office that our participants will feel comfortable too.
          </p>
          <p className="mb-4">
            As a team, we&apos;re really trying to do as much as we can to meet their needs, we have a few participants who
            have a fully remote service, and we offer other accommodations where we can. During Autism Acceptance Month
            I also organised a day of activities for some of the team. We had a quiz, watched some videos about
            neurodiversity, and had a Q&A session.
          </p>
          <p className="mb-4">
            I became a neurodiversity champion by accident. I initially wanted to join the support group to find a
            buddy, but was accidentally added to the champions group. I mentioned that it was a mistake, but they asked
            if I wanted to stay anyway, and I did. We meet once a month and, although we can be prone to going off on
            tangents, a lot of what we do in those meetings is share our experiences and talk about any problems we may
            be having, so it does feel like a support group. I&apos;m genuinely really glad to be a part of it, and it
            reinforces the positive impression that I already had of GC and the experience I&apos;ve had working here.
          </p>
          <p>
            I&apos;ve always felt that decision I made was to join GC, and that&apos;s what I say when I&apos;m interviewing and
            talking to other people. The changes that come as a result of the neurodiversity champion group are really
            positive, and it&apos;s reassuring to know our voices are heard. I&apos;m proud to work somewhere that doesn&apos;t just
            talk about change but actually makes it happen by listening to its people.
          </p>
        </div>
      </div>
    </section>
  )
}
