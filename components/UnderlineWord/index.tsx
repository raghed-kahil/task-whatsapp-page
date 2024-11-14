import UnderlineImage from '@/assets/Fill 48.png';
import style from './style.module.css';



export default function UnderlineWord($: {children: string}) {
    return (
        <span className={style["underline-word"]} style={{
            backgroundImage: `url('${UnderlineImage.src}')`
          }}>{$.children}</span>
    )
};
