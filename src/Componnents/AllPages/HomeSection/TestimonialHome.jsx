import React from 'react';
import Marquee from 'react-fast-marquee';
import ReviewCard from './ReviewCard';
import Avatar from './Avatar';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';


const reviews = [
  {
    id: 1,
    name: 'Louie de Boer',
    initial: 'L',
    bgColor: 'bg-purple-600',
    rating: 5,
    timestamp: '4 months ago',
    text: 'Alles in geheel volgens afspraak geïnstalleerd en door de monteur is ook een duidelijk uitleg gegeven over verschillende instellingen. De eindafrekening was conform de offerte dus geen onverwachte ...',
    showMore: true,
  },
  {
    id: 2,
    name: 'Yvonne Pletting',
    initial: 'Y',
    avatarUrl: 'https://placehold.co/40x40/f87171/ffffff?text=Y',
    bgColor: 'bg-red-400',
    rating: 4,
    timestamp: '4 months ago',
    text: 'Geleverd zoals verwacht. Mooi ontwerp. Zeer tevreden met installatie en afhandeling',
    showMore: false,
  },
  {
    id: 3,
    name: 'Dirk Beekman',
    initial: 'D',
    bgColor: 'bg-orange-500',
    rating: 5,
    timestamp: '5 months ago',
    text: 'Zeer fijn bedrijf. Goede afspraken goede prijs nette monteur en snel geregeld. Absoluut een aanrader.',
    showMore: false,
  },
  {
    id: 4,
    name: 'Alfred Vegelien',
    initial: 'A',
    bgColor: 'bg-red-600',
    rating: 5,
    timestamp: '7 months ago',
    text: 'Laadpaal aangeschaft en laten installeren. Duidelijke communicatie, goede afspraken en perfecte uitvoering. Aanbevelingswaardig!',
    showMore: false,
  },
  {
    id: 5,
    name: 'Peter van Eijndhoven',
    initial: 'P',
    avatarUrl: 'https://placehold.co/40x40/34d399/ffffff?text=P', // Using placeholder for image
    bgColor: 'bg-green-500',
    rating: 5,
    timestamp: '9 months ago',
    text: 'Goede communicatie en duidelijke offerte Snelle levering en heel nette installatie van de muur box. Kan dit bedrijf aanbevelen',
    showMore: false,
  },
  {
    id: 6,
    name: 'philippe van kleef',
    initial: 'p',
    bgColor: 'bg-green-600',
    rating: 4,
    timestamp: '9 months ago',
    text: 'nt geïnstalleerd volgens afspraak. Keurig geleverd zowel op de muur als in de meterkast.',
    showMore: false,
  },
  {
    id: 7,
    name: 'Ria Jansen',
    initial: 'R',
    bgColor: 'bg-pink-500',
    rating: 5,
    timestamp: '3 months ago',
    text: 'Fantastische service en zeer professionele installatie. Een dikke 10!',
    showMore: false,
  },
  {
    id: 8,
    name: 'Mark Verweij',
    initial: 'M',
    bgColor: 'bg-blue-600',
    rating: 5,
    timestamp: '6 months ago',
    text: 'Snel, vakkundig en vriendelijk. Wat wil je nog meer? Top bedrijf.',
    showMore: false,
  },
];



const topRowReviews = reviews.slice(0, 4);
const bottomRowReviews = reviews.slice(4);


const TestimonialHome = () => {
  return (
    <div className="w-full py-16 overflow-x-hidden md:py-20">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}

        className='text-center px-[16px] md:px-0 mb-10'>
        <h2 className='text-[40px] font-semibold'>Our Customer Review</h2>
        <p className='md:w-2xl mx-auto'>Save yourself hours and get your to-do list completed.Save yourself hours and get your to-do list completedSave yourself hours and get your to-do list completed</p>

      </motion.div>


      <Marquee
        direction="left"
        speed={30}
        gradient={true}
        gradientColor={[249, 250, 251]}
        gradientWidth={100}
        pauseOnHover={true}
        className='pb-[10px]'
      >
        {topRowReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>

      <Marquee
        direction="right"
        speed={30}
        gradient={true}
        gradientColor={[249, 250, 251]}
        gradientWidth={100}
        pauseOnHover={true}
        className="mt-8 pb-[10px]"
      >
        {bottomRowReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialHome;