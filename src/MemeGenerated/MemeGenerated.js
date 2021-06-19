import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import { useClipboard } from 'use-clipboard-copy';
import { useState } from 'react';
export const MemeGenerated = () => {

    const [copied, setCopied] = useState(false);

    const clipboard = useClipboard();
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
    };

    return(
        <div className={styles.container}>
            <button onClick = {()=> history.push('/')} className={styles.home}>
                Make More Memes
            </button>
            { url && <img src={url} alt='Your Meme' /> }
            <button onClick={copyLink} className={styles.copy}>
                {copied ? 'Link Copied!' : 'Copy Link..'}
            </button>
        </div>
    );
};