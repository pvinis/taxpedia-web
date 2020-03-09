import React from 'react'
import Media from 'react-media'


export default () => {
	return (
		<>
			<Media queries={{
				isLandscape: '(orientation: landscape)',
			}}>
				{matches => {

					if (matches.isLandscape) {
						return (	<div>
							<div style={{ width: '100%', position: 'absolute', height: '100%', backgroundImage: 'url(bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
							<div style={{ display: 'flex',position: 'absolute', width: '50%', height: '100%', color: 'white', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0px 10px' }}>
								<h1 style={{ fontSize: 70 }}>Taxpedia</h1>
								<a style={{ color: 'white' , fontSize: 30 }} href='/jobs'>Jobs open</a>
								<p style={{ fontSize: 30 }}>For more info, check back soon.</p>
							</div>
						</div>
						)
					}
					return (	<div>
						<div style={{ width: '100%', position: 'absolute', height: '100%', backgroundImage: 'url(bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
						<div style={{ display: 'flex',position: 'absolute', width: '100%', height: '100%', color: 'white', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0px 10px' }}>
							<h1 style={{ fontSize: 70 }}>Taxpedia</h1>
							<a style={{ color: 'white' , fontSize: 30 }} href='/jobs'>Jobs open</a>
							<p style={{ fontSize: 30 }}>For more info, check back soon.</p>
						</div>
					</div>
					)
				}}
			</Media>
		</>
	)}
