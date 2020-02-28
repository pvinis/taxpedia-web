import React from 'react'
import Media from 'react-media'


export default () => {
	return (
		<Media queries={{
			isLandscape: '(orientation: landscape)',
		}}>
			{matches => {

				if (matches.isLandscape) {
					return (	<div>
						<div style={{ width: '100%', position: 'absolute', height: '100%', backgroundImage: 'url(bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
						<div style={{ display: 'flex',position: 'absolute', width: '50%', height: '100%', color: 'white', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0px 10px' }}>
							<h1 style={{ fontSize: 70 }}>Taxpedia</h1>
							<p style={{ fontSize: 30 }}>Please check back again soon.</p>
						</div>
					</div>
					)
				}
				return (	<div>
					<div style={{ width: '100%', position: 'absolute', height: '100%', backgroundImage: 'url(bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
					<div style={{ display: 'flex',position: 'absolute', width: '100%', height: '100%', color: 'white', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '0px 10px' }}>
						<h1 style={{ fontSize: 70 }}>Taxpedia</h1>
						<p style={{ fontSize: 30 }}>Please check back again soon.</p>
					</div>
				</div>
				)
			}}
		</Media>
	)}
