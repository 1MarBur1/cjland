import Logo from '@/assets/logo.svg';
import Button from '../Button';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex items-center justify-between px-16 py-8">
			<Logo />

			<div className='flex gap-5 font-extrabold'>
				<Link href='#'>
					<p className='text-white text-lg'>
						Главная
					</p>
				</Link>
				<Link target='blank_' href='https://t.me/cjlakc/1126'>
					<p className='text-grey-text text-lg'>
						Как играть
					</p>
				</Link>
				<Link target='blank_' href='https://t.me/RaNiX2222'>
					<p className='text-grey-text text-lg'>
						Поддержка
					</p>
				</Link>
			</div>

			<Button onClick={() => window.open('https://www.donationalerts.com/r/padsjasdlskad')} className='px-8 py-0 h-12'>
				<p>
					Проходка
				</p>
			</Button>
		</div>
	)
}

export default Header;
