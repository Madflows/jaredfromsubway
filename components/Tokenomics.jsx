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
    title: 'Increased Earnings Potential',
    body: 'JaredFromSubway provides an automated and optimized solution for extracting this value',
    icon: '/assets/wallet.svg',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Efficiency and Automation',
    body: 'JaredFromSubway provides an efficient and automated solution for executing transactions on the Ethereum blockchain.',
    icon: '/assets/bank.svg',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Fair and Transparent Mechanism',
    body: "By leveraging the bot's automated solution, users can avoid the potential for miner manipulation and other unfair practices.",
    icon: '/assets/briefcase.svg',
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {actions.map((action, actionIdx) => (
          <BenefitCard action={action} key={actionIdx} />
        ))}
      </div>
    </section>
  );
}
