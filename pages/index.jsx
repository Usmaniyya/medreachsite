import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Contact from '../components/Contact'
import Modal from '../components/Modal'

const teamMembers = [
  {
    name: 'Dr Daniel Chukwuocha',
    title: 'Obstetrics and Gynecology',
    
    imageSrc:
      '/d2.png',
  },
  {
    name: 'Christian Ogochukwu',
    title: 'Pharmacist',
    
    imageSrc:
      '/d1.png',
  },
  {
    name: 'Akudo Chukwuemeka',
    title: 'Nurse',
    
    imageSrc:
      '/d3.png',
  },
]

const whoCanUse = [
  {
    title: 'Individuals',
    description:
      'Get instant and affordable healthcare without waiting in line.',
    imageSrc: '/individual.png',
  },
  {
    title: 'Doctors',
    description:
      '“Register as a specialist, increase your patients and teleconsultations. Stay safe and earn more from anywhere',
    imageSrc: '/doctors.png',
  },
  {
    title: 'Clinics & Hospitals',
    description:
      'Are you an Hospital Administrator? Register your doctors for instant booking and earn additional revenue',
    imageSrc: '/medicine.png',
  },
  {
    title: 'Pharmacies',
    description:
      'Register your pharmacy to gain access to additional patients and a referral network that will boost your bottom-line',
    imageSrc: '/clinic.png',
  },
  {
    title: 'Medical Labs',
    description: 'Are you a Medical lab administrator ? Register your lab',
    imageSrc: '/scientist.png',
  },
  {
    title: 'Employers',
    description:
      'Register your company to increase the morale and confidence of your workforce by focusing on corporate wellness',
    imageSrc: '/job.png',
  },
]

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  const [showModal, setShowModal] = useState(false)
const handleModal = () => setShowModal(!showModal)
  return (
    <>
    <div className=" h-screen flex flex-col scroll-smooth font-poppins">
      <Head>
        <title>MedReach365</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="shortcut icon" href="/fav.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
      <nav className="flex items-center justify-between flex-wrap px-3">
        <img className="w-44" src="/logo.png" alt="logo" />
        <div className="hidden md:flex items-center gap-4 py-4">
          <Link className="hover:text-indigo-600" href="#about">
            About Us
          </Link>
          <Link className="hover:text-indigo-600" href="#how">
            Our Partners
          </Link>
          <Link className="hover:text-indigo-600" href="#product">
            Product and Services
          </Link>
          <Link className="hover:text-indigo-600" href="#contact">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4 py-4">
          <button className="text-indigo-600 px-3 py-2 border border-indigo-600">
            <Link className="hover:text-indigo-600" href="#book">
              Book DR Now
            </Link>
          </button>
          <button className="bg-indigo-600 px-3 py-2 text-white" onClick={() => setShowModal(true)}>
           Login
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-10 text-indigo-600" />
          ) : (
            <XIcon className="w-10 text-indigo-600" />
          )}
        </div>
      </nav>
      {nav && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 ease-in-out duration-300">
          <Link className="hover:text-indigo-600" href="#">
            About Us
          </Link>
          <Link className="hover:text-indigo-600" href="#">
            How it Works
          </Link>
          <Link className="hover:text-indigo-600" href="#">
            Product and Services
          </Link>
          <Link className="hover:text-indigo-600" href="#">
            Contact Us
          </Link>
          <div className="flex gap-3">
            <button className="text-indigo-600 px-3 py-2 border border-indigo-600">
              <Link className="hover:text-indigo-600" href="#">
                Book DR Now
              </Link>
            </button>
            <button className="bg-indigo-600 px-3 py-2 text-white" onClick={() => setShowModal(true)}>Login</button>
          </div>
        </div>
      )}
    </div>
      <main className="flex-1">
        <section className="bg-hero-pattern bg-center bg-no-repeat bg-cover bg-fixed py-20 opacity-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl text-indigo-800 font-semibold tracking-wide uppercase">
                Welcome to MedReach365
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                We provide exceptional care and service to our patients
              </p>
          </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20 px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl  text-center text-indigo-600 font-semibold tracking-wide sm:text-4xl uppercase">
                Healthcare at your fingertip
              </h2>
              <p className="mt-2 text-lg leading-8  text-gray-600">
              MedReach365 is an on demand teleconsultation platform where you can get healthcare service 
              at the comfort of your home, consultations can take place with your laptop, tablet, or mobile phones. 
              We have doctors in all fields of medicine. On our platform, you can consult with a medical practitioner 24 hours a day, 
              7 days a week, and 365 days a year, with multi-lingual doctors. Our packages include a one off consultation package or a subscription package, 
              with the lowest rates in the industry. We know how drug sourcing can sometimes be frustrating, worry no more. 
              On our platform you can get your drugs from our partner pharmacies. You can also request for support, 
              if you experience any difficulty using our platform, and we will reach out immediately and help resolve any issue you face.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 px-10">
          <div className="grid grid-cols-2 gap-6">
            <div className="md:col-span-1 col-span-2">
              <img
                className="w-full"
                src="https://media.istockphoto.com/id/1352489891/photo/group-of-healthcare-workers-talking-in-a-meeting-at-the-hospital.jpg?s=612x612&w=0&k=20&c=lfaCqJkpSG7Qjk-1D6o8VvY_eb-H3iN-e0iNU2O5Bl0="
                alt="doctors"
                loading="lazy"
              />
            </div>
            <div
              className="md:col-span-1 col-span-2 flex flex-col justify-center"
              id="about"
            >
              <h2 className="text-lg text-indigo-600 font-semibold tracking-wide uppercase">
                Our Mission
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We are dedicated to providing the best care to our patients
              </p>
              <p className="mt-4 text-lg text-gray-500 lg:mx-auto">
                With MedReach365, you can get access to affordable
                teleconsultations with top-notch doctors and specialists
                worldwide. Our partnerships and integrations allow us to deliver
                diagnostics and medicine right to your door Healthcare for
                everyone. Anytime. Anywhere.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-lg text-indigo-600 font-semibold tracking-wide uppercase">
                Meet our team
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We are dedicated to providing the best care to our patients
              </p>
            </div>
            <div
              className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              id="book"
            >
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={teamMember.imageSrc}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {teamMember.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {teamMember.title}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {teamMember.bio}
                    </p>
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-10">
          <div
            className="flex md:justify-between flex-col md:flex-row gap-8 md:gap-0"
            id="how"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-left text-center text-indigo-600 font-bold tracking-wide uppercase">
                Our Partners
              </h2>
              <p className="mt-4 md:text-left text-center md:max-w-xl max-w-full text-xl text-gray-500 lg:mx-auto">
                We proudly collaborate with board-certified doctors, Hospitals,
                Pharmacy stores, Medical lab outlets, Employers, HMOs, and
                telecom service providers as the Uber for healthcare.
              </p>
            </div>
            <div className="md:self-start self-center">
              <img
                className="md:w-96 w-full"
                src="https://media.istockphoto.com/id/1404962407/photo/happy-muslim-doctor-working-at-the-hospital-using-a-tablet.jpg?s=612x612&w=0&k=20&c=PJlnI11CSpP9dkMoc4NRSXz4682lNCmbSfZpMWVrfcs="
                alt="doctors"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="mt-20 md:px-20 px-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            id="product"
          >
            {whoCanUse.map((whoCanUse, index) => (
              <div
                key={index}
                className="py-8 px-3 border border-indigo-600 flex flex-col gap-3 items-center rounded shadow"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={whoCanUse.imageSrc}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {whoCanUse.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {whoCanUse.description}
                  </p>
                </div>
                <button className="px-3 py-2 text-indigo-600 border border-indigo-600 hover:text-white hover:bg-indigo-600 rounded">
                  <Link className="" href="https://play.google.com/store/apps/details?id=com.medreach.com">
                    Create Account
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <footer className="bg-indigo-900 py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h2 className="text-xl font-bold text-white mb-4">MedReach365</h2>
            <p className="max-w-2xl text-gray-200 leading-loose">
              Join hands with us today to experience telemedicine that works. We
              aim to shine the brightest on the sky of telehealth,taking with us
              all our partners and members to enjoy the glory Book your doctor
              today and receive your consultation from specialized doctors
              instantly.
            </p>
          </div>
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="text-gray-200 leading-loose">
              <li className="mb-2">
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul className="flex">
              <li className="mr-4">
                <a href="https://web.facebook.com/MedReach365" className="text-gray-200 hover:text-white">
                  <FaFacebook />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.linkedin.com/company/medreach365/about" className="text-gray-200 hover:text-white">
                  <FaLinkedin />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://twitter.com/MedReach365" className="text-gray-200 hover:text-white">
                  <FaTwitter />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/medreach365/" className="text-gray-200 hover:text-white">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-100 text-center mt-8 text-base">
          Copyright &copy; 2023, MedReach365. All rights reserved{' '}
        </p>
      </div>
    </footer>
      </div>
      <Modal isVisible={ showModal} onClose={() =>setShowModal(false)} />
      </>
  )
}

export default Home
