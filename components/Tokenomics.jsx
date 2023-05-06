import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import BenefitCard from './BenefitCard';

const actions = [
  {
    title: '0% tax',
    body: "No tax for Jared holders! We won't make you pay for Jared's sins. Hold tight and enjoy the ride, just like a Subway sandwich.",
    icon: '/assets/wallet.svg',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: '100000 supply',
    body: "Yo, listen up, boys and girls! JaredFromSubway has only got 100,000 tokens to his name, so you better move fast if you want a piece of that sandwich. We're talking limited supply here, like a Subway store running out of cookies before you can get your grubby little paws on them. So don't be a Jared and miss out on this opportunity - grab your tokens no",
    icon: '/assets/bank.svg',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tokenomics() {
  return (
    <section
      id='tokenomics'
      className='py-12 px-6 md:px-16 lg:px-24 flex flex-col gap-8 md:gap-12'
    >
      <h2 className='text-center text-2xl md:text-5xl font-bold text-white'>
        Benefit of Using JaredFromSubway
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
        {actions.map((action, actionIdx) => (
          <BenefitCard action={action} key={actionIdx} />
        ))}
      </div>
    </section>
  );
}
