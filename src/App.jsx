import QRCode from 'qrcode'
import {useState} from 'react'


function App() {
	const [url, setUrl] = useState('')
	const [qrcode, setQrcode] = useState('')
	
	const GenerateQRCode = () =>{
		QRCode.toDataURL(url,{
			
			margin: 2,
			color:{
				dark:'#335383ff'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQrcode(url)
		})
	}

	return (
		<div className="App pt-14 h-screen text-center text-gray-50 bg-sky-800 flex flex-col items-center justify-center min-h-[50%]">
			<div className=' w-96'>
				<h2 className="text-4xl mb-4 w-full">QR Code Generator</h2>
				<div className='w-full'>
					<input
						type="text"
						placeholder="e.g.https//google.com"
						className="p-2 text-rose-600 bg-gray-50 outline-0"
						value={url}
						onChange={(evt) => setUrl(evt.target.value)}
					/>
					<button onClick={GenerateQRCode} className="bg-rose-600 px-4 py-2 hover:bg-rose-800">Generate</button>
				</div>
				{qrcode && <>
					<img src={qrcode} className="my-5 w-full rounded"/>
					<a href={qrcode} download='qrcode.png' className='bg-rose-600 px-4 py-2 hover:bg-rose-800'>Download</a>
				</>}
			</div>
		</div>
	)
}

export default App
