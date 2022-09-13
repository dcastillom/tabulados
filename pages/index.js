import styles from '../styles/Home.module.css'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <HomeIcon />
        </IconButton>
      </main>

    </div>
  )
}
