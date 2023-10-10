import Image from 'next/image'

export function DailyMix() {
    return(
        <a href="#" className=' bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src='/daily.jpg' className='w-full' width={120} height={120} alt='Capa do álbum Dos Prédios Deluxe'/>
            <strong className='font-semibold'>Daily Mix</strong>
            <span className=' text-sm text-zinc-400'>Álvaro, Alan, Matheus</span>
        </a>
    )
}