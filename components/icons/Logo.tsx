
import Image from 'next/image';

const Logo = () => {

	return (
		<>
			<div className="logo">
				<Image 
					alt="logo"
					src="/img/logo.png"
					width="322"
					height="322"
					layout="responsive"
					/>
			</div>

			<style jsx>
				{`
					.logo{
						background: var(--primary-color);
						width: 40px;
						height: 40px;
						border-radius: 5px;
						line-height: 40px;
						text-align: center;
						font-size: 30px;
						font-weight: bold;
					}
				`}
			</style>
		</>
	)
};

export default Logo;