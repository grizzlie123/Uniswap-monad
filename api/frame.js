export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  res.status(200).json({
    version: 'vNext',
    name: 'Swap on Monad Testnet',
    image: 'https://grizzlie123.github.io/Swap-by-beanswap/preview.png',
    post_url: 'https://uniswap-monad-three.vercel.app/api/frame',
    buttons: [
      { label: 'Swap via Uniswap' }
    ]
  });
}
